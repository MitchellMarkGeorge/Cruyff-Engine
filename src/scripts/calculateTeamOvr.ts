import fse from "fs-extra";
import { Player } from "../types";

const teams = fse.readJSONSync("./players.json");

Object.entries(teams).forEach((entry) => {
   const [ teamName, players ] = entry;
    
   const player_ovr = (players as Player[]).map(player => player.overall_rating);

   const teamOVR = Math.round(sum(player_ovr) / player_ovr.length);

   console.log(`${teamName} OVR: ${teamOVR}`)
})
function sum(array: number[]) {
    return array.reduce((a, b) => a + b, 0);
}


 