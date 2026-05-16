import { StartLights } from "./components/StartLights";
import { Countdown } from "./components/Countdown";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/formula-run/id6758935487";

export default function Home() {
  return (
    <>
      <StatusBar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Ticker />
        <Sectors />
        <Standings />
        <Features />
        <ClosingCTA />
        <Footer />
      </main>
    </>
  );
}

/* -------------------- STATUS BAR -------------------- */

function StatusBar() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur-md bg-[rgba(13,13,13,0.7)] border-b border-line">
      <div className="max-w-[1400px] mx-auto px-6 h-9 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-muted">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-red glow-pulse" />
            <span className="text-red">LIVE</span>
          </span>
          <span className="hidden sm:inline">RD.11 / 24</span>
          <span className="hidden md:inline">NORTHAMPTON GP</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="hidden sm:inline">
            LIGHTS OUT IN <Countdown compact />
          </span>
          <span className="text-lime">FORMULA RUN</span>
        </div>
      </div>
    </div>
  );
}

/* -------------------- HERO -------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden hero-grid">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_30%,rgba(214,255,139,0.08),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 h-px sector-line" />
      <div className="absolute right-0 top-0 bottom-0 w-px sector-line opacity-30 hidden lg:block" />

      <div className="relative max-w-[1400px] mx-auto px-6 pt-14 pb-24 sm:pt-20 sm:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-10 rise" style={{ animationDelay: "0.1s" }}>
              <span className="font-mono text-[10px] tracking-[0.35em] text-muted">
                START PROCEDURE / SIM
              </span>
              <div className="h-px flex-1 bg-line-strong max-w-32" />
            </div>

            <div className="mb-12 rise" style={{ animationDelay: "0.2s" }}>
              <StartLights />
            </div>

            <h1
              className="font-mono font-bold leading-[0.85] tracking-[-0.04em] rise"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="block text-[20vw] sm:text-[14vw] lg:text-[11vw]">
                F1
                <span className="text-lime">+</span>
              </span>
              <span className="block text-[20vw] sm:text-[14vw] lg:text-[11vw] -mt-[2vw]">
                RUNNING<span className="text-lime">.</span>
              </span>
            </h1>

            <p
              className="mt-10 text-lg sm:text-xl text-zinc-300 max-w-xl leading-relaxed rise"
              style={{ animationDelay: "0.6s" }}
            >
              Every week, a Grand Pursuit. Twenty-four rounds tracking the
              real 2026 F1 calendar — Melbourne to Abu Dhabi. Run the set
              distance, post your time. Fastest time on the round scores 25.
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center rise"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 h-14 px-7 rounded-full bg-lime hover:bg-white transition-colors text-black font-semibold"
              >
                <span>Download — iOS</span>
                <span className="font-mono text-sm">↗</span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-3 h-14 px-7 rounded-full border border-line-strong hover:border-lime/40 hover:bg-white/[0.03] transition-colors font-medium"
              >
                <span className="font-mono text-xs text-muted">[S]</span>
                Read the regulations
              </a>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-line">
            <div
              className="rise"
              style={{ animationDelay: "1s" }}
            >
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted mb-3">
                NEXT ROUND / OFFICIAL TIMING
              </div>
              <div className="mb-8">
                <div className="text-2xl font-semibold mb-1">
                  Northampton Grand Pursuit
                </div>
                <div className="font-mono text-xs text-muted">
                  RD.11 · 23.05 · 14:00 UTC · 5.30 KM
                </div>
              </div>
              <Countdown />

              <div className="mt-12 border-t border-line pt-6">
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted mb-4">
                  PROVISIONAL GRID
                </div>
                <div className="space-y-2">
                  <GridRow pos={1} name="A. MARTIN" team="#3B82F6" time="18:42" tone="text-gold" />
                  <GridRow pos={2} name="M. BLAKE" team="#F97316" time="19:01" tone="text-silver" />
                  <GridRow pos={3} name="C. NGUYEN" team="#F97316" time="19:14" tone="text-bronze" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function GridRow({
  pos,
  name,
  team,
  time,
  tone,
}: {
  pos: number;
  name: string;
  team: string;
  time: string;
  tone: string;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-sm py-1.5">
      <span className={`w-5 text-right ${tone} font-bold`}>{pos}</span>
      <span className="w-0.5 h-4" style={{ background: team }} />
      <span className="flex-1 text-zinc-200">{name}</span>
      <span className="text-muted tabular-nums">{time}</span>
    </div>
  );
}

/* -------------------- TICKER -------------------- */

const tickerEntries = [
  ["A. MARTIN", "18:42", "RED BOLT RACING"],
  ["M. BLAKE", "19:01", "PAPAYA PACERS"],
  ["C. NGUYEN", "19:14", "PAPAYA PACERS"],
  ["S. RIVERA", "19:33", "ASTON MARATHIN"],
  ["J. TORRES", "19:48", "RED BOLT RACING"],
  ["D. PATEL", "20:02", "ASTON MARATHIN"],
  ["E. ROSS", "20:11", "MERC. MILERS"],
  ["L. CHEN", "20:24", "FERRACE"],
];

function Ticker() {
  const items = [...tickerEntries, ...tickerEntries];
  return (
    <section className="relative border-y border-line overflow-hidden bg-[var(--surface)]">
      <div className="marquee-track py-3 font-mono text-sm">
        {items.map((entry, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 pr-10 text-zinc-300"
          >
            <span className="text-lime">●</span>
            <span className="font-semibold">{entry[0]}</span>
            <span className="text-muted">·</span>
            <span className="tabular-nums">{entry[1]}</span>
            <span className="text-muted">·</span>
            <span className="text-muted text-xs">{entry[2]}</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* -------------------- SECTORS -------------------- */

function Sectors() {
  const sectors = [
    {
      tag: "01",
      tone: "text-gold",
      bar: "var(--gold)",
      title: "A round opens",
      body:
        "Every race weekend, the next Grand Pursuit goes live. A real F1 venue, a set distance (5–7 km), and a single window to submit before lights-out.",
      stat: "24 rounds · MEL → AUH",
    },
    {
      tag: "02",
      tone: "text-silver",
      bar: "var(--silver)",
      title: "Run, set your time",
      body:
        "Run any way you like — outdoor, treadmill, race day. Tap in your time on the wheel picker. One submission per round. Miss the window and you take a DNF.",
      stat: "One submission · No retries",
    },
    {
      tag: "03",
      tone: "text-bronze",
      bar: "var(--bronze)",
      title: "Score F1 points",
      body:
        "Fastest time on the round wins. P1 scores 25, P2 18, P3 15, down to P10 on 1. Your team scores the sum. Twenty-four rounds decide the title.",
      stat: "25 · 18 · 15 · 12 · 10 · 8 · 6 · 4 · 2 · 1",
    },
  ];

  return (
    <section id="how-it-works" className="relative px-6 py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 mb-20 gap-10 items-end">
          <div className="lg:col-span-3 font-mono text-[10px] tracking-[0.35em] text-lime">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-lime" />
              SECTION 02 / REGULATIONS
            </div>
          </div>
          <h2 className="lg:col-span-9 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.0]">
            How a Grand Pursuit
            <br />
            <span className="text-muted">actually runs.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {sectors.map((s) => (
            <article
              key={s.tag}
              className="card-hover relative bg-bg p-8 lg:p-10"
            >
              <div className="flex items-start justify-between mb-12">
                <span
                  className={`font-mono text-6xl font-bold ${s.tone} leading-none`}
                >
                  {s.tag}
                </span>
                <span
                  className="block w-1 h-12"
                  style={{ background: s.bar }}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                {s.body}
              </p>
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted pt-6 border-t border-line">
                {s.stat}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- STANDINGS -------------------- */

const standings = [
  { pos: 1, name: "Alex Martin", team: "Red Bolt Racing", teamColor: "#3B82F6", points: 171, gap: "—" },
  { pos: 2, name: "Morgan Blake", team: "Papaya Pacers", teamColor: "#F97316", points: 141, gap: "-30" },
  { pos: 3, name: "Casey Nguyen", team: "Papaya Pacers", teamColor: "#F97316", points: 137, gap: "-34" },
  { pos: 4, name: "Sam Rivera", team: "Aston Marathin'", teamColor: "#10B981", points: 131, gap: "-40" },
  { pos: 5, name: "Jamie Torres", team: "Red Bolt Racing", teamColor: "#3B82F6", points: 121, gap: "-50" },
  { pos: 6, name: "Drew Patel", team: "Aston Marathin'", teamColor: "#10B981", points: 115, gap: "-56" },
];

function Standings() {
  return (
    <section className="px-6 py-24 sm:py-32 border-t border-line bg-[var(--surface)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 mb-12 gap-10 items-end">
          <div className="lg:col-span-3 font-mono text-[10px] tracking-[0.35em] text-lime">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-lime" />
              SECTION 03 / CHAMPIONSHIP
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.0] mb-4">
              The table moves <span className="text-lime">every weekend.</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              Filter by points, best pace, wins, or fewest DNFs. Watch
              teammates close the gap. Or chase down the leader yourself.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-line overflow-hidden bg-bg">
          <div className="grid grid-cols-[40px_4px_1fr_120px_80px] sm:grid-cols-[60px_4px_1fr_200px_120px_80px] gap-x-3 sm:gap-x-4 px-4 sm:px-6 py-3 border-b border-line font-mono text-[10px] tracking-[0.3em] text-muted">
            <span>POS</span>
            <span />
            <span>DRIVER</span>
            <span className="hidden sm:block">TEAM</span>
            <span className="text-right">PTS</span>
            <span className="text-right">GAP</span>
          </div>
          {standings.map((row) => {
            const tone =
              row.pos === 1
                ? "text-gold"
                : row.pos === 2
                  ? "text-silver"
                  : row.pos === 3
                    ? "text-bronze"
                    : "text-muted";
            return (
              <div
                key={row.pos}
                className="grid grid-cols-[40px_4px_1fr_120px_80px] sm:grid-cols-[60px_4px_1fr_200px_120px_80px] gap-x-3 sm:gap-x-4 px-4 sm:px-6 py-4 items-center border-b border-line last:border-b-0 hover:bg-[var(--surface-elev)] transition-colors"
              >
                <span className={`font-mono font-bold text-xl tabular-nums ${tone}`}>
                  {row.pos}
                </span>
                <span
                  className="h-8 w-1 rounded-full"
                  style={{ background: row.teamColor }}
                />
                <div className="min-w-0">
                  <div className="font-semibold truncate">{row.name}</div>
                  <div className="text-xs text-muted sm:hidden truncate">
                    {row.team}
                  </div>
                </div>
                <div className="hidden sm:block text-zinc-400 text-sm truncate">
                  {row.team}
                </div>
                <div className="font-mono tabular-nums text-right">
                  <span className="text-lg font-semibold">{row.points}</span>
                  <span className="text-muted text-xs ml-1">pts</span>
                </div>
                <div className="font-mono text-sm text-right text-muted tabular-nums">
                  {row.gap}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 font-mono text-[10px] tracking-[0.3em] text-muted text-center">
          PROVISIONAL · POST RD.10 · UPDATED LIVE IN-APP
        </div>
      </div>
    </section>
  );
}

/* -------------------- FEATURES -------------------- */

const features = [
  {
    code: "01",
    name: "Record Time",
    body: "Wheel picker or type it in. One submission per round. Mark DNF if you couldn't run.",
  },
  {
    code: "02",
    name: "Standings",
    body: "Live table — drivers and constructors. Sort by points, best pace, wins, or fewest DNFs.",
  },
  {
    code: "03",
    name: "Schedule",
    body: "All 24 rounds on the calendar. Melbourne to Abu Dhabi, real 2026 F1 dates and distances.",
  },
  {
    code: "04",
    name: "Profile",
    body: "Career stats. Podium counts, head-to-heads with teammates, your full season tape.",
  },
];

function Features() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 mb-16 gap-10 items-end">
          <div className="lg:col-span-3 font-mono text-[10px] tracking-[0.35em] text-lime">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-lime" />
              SECTION 04 / PADDOCK
            </div>
          </div>
          <h2 className="lg:col-span-9 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.0]">
            Four screens.
            <br />
            <span className="text-muted">Run the season from anywhere.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {features.map((f) => (
            <article
              key={f.code}
              className="card-hover bg-bg p-8 group"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-mono text-xs tracking-[0.3em] text-muted">
                  {f.code}
                </span>
                <span className="font-mono text-xs text-lime opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{f.name}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CLOSING CTA -------------------- */

function ClosingCTA() {
  return (
    <section className="relative px-6 py-32 border-t border-line overflow-hidden">
      <div className="absolute inset-0 stripes opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,255,139,0.06),transparent_60%)]" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="font-mono text-[10px] tracking-[0.4em] text-lime mb-8 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-lime" />
          SECTION 05 / LIGHTS OUT
          <span className="w-8 h-px bg-lime" />
        </div>

        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-mono font-bold tracking-tighter mb-12 leading-[0.9]">
          FIVE
          <br />
          RED
          <br />
          LIGHTS<span className="text-lime">.</span>
        </h2>

        <p className="text-xl text-zinc-300 mb-12 max-w-xl mx-auto">
          Then the season starts. Free on iOS — join a team, set your first
          time, and you&apos;re on the grid.
        </p>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 h-14 px-10 rounded-full bg-lime hover:bg-white transition-colors text-black font-semibold"
        >
          <span>Download — iOS</span>
          <span className="font-mono text-sm">↗</span>
        </a>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */

function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-line bg-[var(--surface)]">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="text-lime tracking-[0.2em] font-bold">
            FORMULA RUN
          </span>
          <span className="text-muted">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6 text-zinc-400">
          <a href="/privacy" className="hover:text-lime transition-colors">
            PRIVACY
          </a>
          <a href="/terms" className="hover:text-lime transition-colors">
            TERMS
          </a>
          <a
            href="mailto:hello@formularun.app"
            className="hover:text-lime transition-colors"
          >
            CONTACT
          </a>
        </div>
        <div className="text-muted text-[10px] tracking-[0.2em]">
          BUILT IN AOTEAROA
        </div>
      </div>
    </footer>
  );
}
