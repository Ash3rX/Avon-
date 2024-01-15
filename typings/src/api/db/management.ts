import AvonDatabase from "../../database/db.js";

const db = new AvonDatabase("management.sqlite");

export {
  manageMent,
  addManagement,
  removeManagement,
  getManagement,
  listTrusted,
  addTrusted,
  removeTrusted,
  checkTrusted,
};

function createDb(): void {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS MANAGEMENT(
        USER TEXT PRIMARY KEY,
        MANAGER BOOLEAN
    )`
  ).run();
}

function manageMent(user: string): {
  MANAGE?: string | null | number;
} {
  createDb();
  let run: unknown = db
    .prepare(`SELECT MANAGER FROM MANAGEMENT WHERE USER = (?)`)
    .get(user);
  if (run) return run;
  else return { MANAGE: null };
}

function addManagement(user: string): boolean {
  createDb();
  let run = db
    .prepare(`INSERT INTO MANAGEMENT(USER,MANAGER) VALUES(?,TRUE)`)
    .run(user);
  if (run) return true;
  else return false;
}

function removeManagement(user: string): boolean {
  createDb();
  let run = db
    .prepare(`DELETE FROM MANAGEMENT WHERE USER = (?) AND MANAGER = TRUE`)
    .run(user);
  if (run) return true;
  else return false;
}

function getManagement(): string[] {
  createDb();
  let run = db
    .prepare(`SELECT USER FROM MANAGEMENT WHERE MANAGER = TRUE`)
    .all();
  let data: string[] = [];
  run.forEach((x: any) => data.push(x.USER));
  return data;
}

function createTrustedDb(): void {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS TRUSTED(
    USER TEXT
  )`
  ).run();
}

function checkTrusted(user: string): boolean {
  createTrustedDb();
  let run = db.prepare(`SELECT USER FROM TRUSTED WHERE USER = ?`).get(user);
  if (run) return true;
  else return false;
}

function addTrusted(user: string): boolean {
  createTrustedDb();
  db.prepare(`INSERT INTO TRUSTED(USER) VALUES(?)`).run(user);
  return true;
}

function removeTrusted(user: string): boolean {
  createTrustedDb();
  db.prepare(`DELETE FROM TRUSTED WHERE USER = ?`).run(user);
  return true;
}

function listTrusted() {
  createTrustedDb();
  let data: string[] = [];
  let run = db.prepare(`SELECT USER FROM TRUSTED`).all();
  run.forEach((x: any) => data.push(x.USER));
  return data;
}
