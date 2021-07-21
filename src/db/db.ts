import { chain } from "lodash";
import path from 'path';
import os, { type } from "os";
import { LowSync, JSONFileSync } from 'lowdb'
import { Player } from "../types";

// Use JSON file for storage
const file = path.join(os.homedir(), ".cruyff-engine", 'db.json')
const adapter = new JSONFileSync<{players: Player[]}>(file)
const db = new LowSync<{players: Player[]}>(adapter)

// USE ASYNC

db.read();

if (!db.data) {
    db.data = { players: []};
}
const dbChain = chain(db.data)
export default dbChain;