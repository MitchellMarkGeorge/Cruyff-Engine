import { Player, TEAM_NAMES } from "./types";
import fse from "fs-extra";
import { distace } from "./utils";
export function loadTeam(teamName: string): Player[] {

    if (!TEAM_NAMES.includes(teamName)) {
        throw new Error("no team with that name");
    }
    const players = fse.readJSONSync("./data/players.json"); // should be cached

    return players[teamName]
}

// console.log(loadTeam("Southwold Warriors"));

// loadTeams??

// order of points dont matter
console.log(distace(
    { x: 3, y: 2},
    { x: 9, y: 7}
    
))