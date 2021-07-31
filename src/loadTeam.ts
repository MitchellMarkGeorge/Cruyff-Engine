import { Player, TEAM_NAMES } from "./types";
import fse from "fs-extra";
import { distace } from "./utils";
import { SimPlayer } from "./core/models/simplayer";
import { SimTeam } from "./core/models/team";
export function loadTeam(teamName: string): SimTeam {

    if (!TEAM_NAMES.includes(teamName)) {
        throw new Error("no team with that name");
    }
    const playerDB: { [teamName: string]: Player[] } = fse.readJSONSync("./data/players.json"); // should be cached

    const players = playerDB[teamName].map(player => new SimPlayer(player))

    return new SimTeam(players);

    // return (players[teamName] as Player[]).map(player => new SimPlayer(player))
}

// console.log(loadTeam("Southwold Warriors"));

// loadTeams??

// order of points dont matter
// console.log(distace(
//     { x: 3, y: 2 },
//     { x: 9, y: 7 }

// ))