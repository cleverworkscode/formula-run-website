import { getApps, initializeApp, cert, applicationDefault } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";

function init() {
  if (getApps().length) return;

  const inline = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (inline) {
    initializeApp({ credential: cert(JSON.parse(inline)) });
    return;
  }

  initializeApp({ credential: applicationDefault() });
}

let _db: Firestore | null = null;
export function db(): Firestore {
  if (!_db) {
    init();
    _db = getFirestore();
  }
  return _db;
}
