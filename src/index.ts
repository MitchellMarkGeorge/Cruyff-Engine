import { Engine } from "./core/engine";
import { loadTeam } from "./loadTeam";


const homeTeam = loadTeam("Armagon FC");
const awayTeam = loadTeam("Belton Knights");

Engine.simMatch(homeTeam, awayTeam);