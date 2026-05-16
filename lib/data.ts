import { db } from "./firebase-admin";

export type Race = {
  round: number;
  name: string;
  trackName: string;
  flagEmoji: string;
  month: number;
  day: number;
  distanceKm: number;
  date: Date;
};

const SEASON_YEAR = 2026;

function dayKey(month: number, day: number, year: number) {
  return new Date(Date.UTC(year, month - 1, day, 14, 0, 0));
}

export async function getRaces(): Promise<Race[]> {
  const snap = await db()
    .collection("schedules")
    .doc(String(SEASON_YEAR))
    .collection("races")
    .orderBy("round")
    .get();

  return snap.docs.map((doc) => {
    const d = doc.data();
    return {
      round: Number(d.round),
      name: String(d.name ?? ""),
      trackName: String(d.trackName ?? ""),
      flagEmoji: String(d.flagEmoji ?? ""),
      month: Number(d.month),
      day: Number(d.day),
      distanceKm: Number(d.distanceKm ?? 0),
      date: dayKey(Number(d.month), Number(d.day), SEASON_YEAR),
    };
  });
}

export async function getNextRace(): Promise<{
  next: Race | null;
  total: number;
}> {
  const races = await getRaces();
  const now = Date.now();
  const upcoming = races.filter((r) => r.date.getTime() >= now);
  return {
    next: upcoming[0] ?? races[races.length - 1] ?? null,
    total: races.length,
  };
}
