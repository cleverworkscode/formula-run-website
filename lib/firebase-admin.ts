import { getApps, initializeApp, cert, applicationDefault } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";

export type InitDiagnostic = {
  mode: "inline-json" | "split-vars" | "adc" | "none";
  ok: boolean;
  error?: string;
};

let _diagnostic: InitDiagnostic = { mode: "none", ok: false };

function tryParseServiceAccount(raw: string): Record<string, string> | null {
  try {
    return JSON.parse(raw);
  } catch {
    try {
      return JSON.parse(raw.replace(/\n/g, "\\n"));
    } catch {
      try {
        return JSON.parse(raw.replace(/\r?\n/g, "\\n"));
      } catch {
        return null;
      }
    }
  }
}

function init() {
  if (getApps().length) {
    return;
  }

  const inline = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (inline) {
    const parsed = tryParseServiceAccount(inline);
    if (!parsed) {
      _diagnostic = {
        mode: "inline-json",
        ok: false,
        error: `JSON parse failed (env var length: ${inline.length})`,
      };
      return;
    }
    try {
      initializeApp({
        credential: cert({
          projectId: parsed.project_id,
          clientEmail: parsed.client_email,
          privateKey: (parsed.private_key || "").replace(/\\n/g, "\n"),
        }),
      });
      _diagnostic = { mode: "inline-json", ok: true };
    } catch (e) {
      _diagnostic = {
        mode: "inline-json",
        ok: false,
        error: (e as Error).message?.slice(0, 200),
      };
    }
    return;
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;
  if (projectId && clientEmail && privateKey) {
    try {
      initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey: privateKey.replace(/\\n/g, "\n"),
        }),
      });
      _diagnostic = { mode: "split-vars", ok: true };
    } catch (e) {
      _diagnostic = {
        mode: "split-vars",
        ok: false,
        error: (e as Error).message?.slice(0, 200),
      };
    }
    return;
  }

  try {
    initializeApp({ credential: applicationDefault() });
    _diagnostic = { mode: "adc", ok: true };
  } catch (e) {
    _diagnostic = {
      mode: "adc",
      ok: false,
      error: (e as Error).message?.slice(0, 200),
    };
  }
}

let _db: Firestore | null = null;
export function db(): Firestore {
  if (!_db) {
    init();
    _db = getFirestore();
  }
  return _db;
}

export function getDiagnostic(): InitDiagnostic {
  if (_diagnostic.mode === "none") init();
  return _diagnostic;
}
