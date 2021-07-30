import { GeneratedPlayerResults, Player, PLAYER_LEVEL, PLAYER_POSITION, TEAM_NAMES } from "../types";
import { PlayerFactory } from "./playerFactory";
import fse from "fs-extra";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

import { Chance } from "chance";

const chance = new Chance();

const POSITIONS: PLAYER_POSITION[] = [
    "GK",
    "CB",
    "LB",
    "RB",
    "CM",
    "RM",
    "LM",
    "CF",
  ];

function generatePlayers(
  numberOfTeams: number = 24,
  squadSize: number = 11
): GeneratedPlayerResults {
  // const numberOfPlayers = numberOfTeams * squadSize;

  const siglePositionNumber = numberOfTeams; // this is for players/positions that only appear once in the team
  const doublePositionNumber = siglePositionNumber * 2; // for positions that appear twice in a team

  const players: GeneratedPlayerResults = {
    GK: [],
    CB: [],
    LB: [],
    RB: [],
    CM: [],
    LM: [],
    RM: [],
    CF: [],
  };

  const LEVELS: PLAYER_LEVEL[] = ["LEGEND", "PRO", "ROOKIE"];

  
  
  const SINGLE_POSITION_PER_LEVEL = siglePositionNumber / 3; // 8
  const DOUBLE_POSITION_PER_LEVEL = doublePositionNumber / 3; // 16

 
  const POSITION_TO_LEVEL_MAP = {
    GK: SINGLE_POSITION_PER_LEVEL,
    CB: DOUBLE_POSITION_PER_LEVEL,
    LB: SINGLE_POSITION_PER_LEVEL,
    RB: SINGLE_POSITION_PER_LEVEL,
    CM: DOUBLE_POSITION_PER_LEVEL,
    LM: SINGLE_POSITION_PER_LEVEL,
    RM: SINGLE_POSITION_PER_LEVEL,
    CF: DOUBLE_POSITION_PER_LEVEL,
  };

  // for each player position, create a player for each level

  POSITIONS.forEach((position) => {
    const position_per_level = POSITION_TO_LEVEL_MAP[position];

    LEVELS.forEach((level) => {
      for (let i = 0; i < position_per_level; i++) {
        const newPlayer = PlayerFactory.createPlayer(position, level);
        players[position].push(newPlayer);
      }
    });
  });

  return players;
}

const generated_players = generatePlayers();

Object.entries(generated_players).forEach((entry) => {
  const [position, players] = entry;
  console.log(`${players.length} ${position} generated`);
});



const final_player_map: { [team: string]: Player[]} = {};


// for (let i = 0; i < TEAM_NAMES.length; i++) {
//     const current_team = TEAM_NAMES[i];

//     POSITIONS.forEach(position => {
//        const players = generated_players[position]

//         if (["GK", "LB", "RB", "RM", "LM"].includes(position)) {
//             let player = chance.pickone(generated_players[position]);
      
//             player.team = current_team;
//               // players are removed from array to make sure there is no repeating players in teams
          
      
//             if (!final_player_map[current_team]) {
//               final_player_map[current_team] = []
//             }
      
//             final_player_map[current_team].push(player);
      
//               let index = players.indexOf(player);
      
//             players.splice(index);
      
//           } else if (["CB", "CM", "CF"].includes(position) && players.length) {
//             let selected_players = chance.pickset(players, 2);
      
//             selected_players.forEach((player) => {
//               player.team = team;
              
      
//               if (!final_player_map[team]) {
//                   final_player_map[team] = []
//                 }
//                final_player_map[team].push(player);
      
//               //  let index = players.indexOf(player);
//               // players are removed from array to make sure there is no repeating players in teams
//               // players.splice(index);
//             });
//           }
//     })

// }

// should i try and 
TEAM_NAMES.forEach(team => {
  // for each team randomly pick
  // 1gk
  // 2cb
  // 1lb
  //1rb
  //2cm
  //1lm
  //1rm
  //2cf

 


  Object.entries(generated_players).forEach((entry) => {
    const [position, players] = entry;
    // console.log(entry)
    if (["GK", "LB", "RB", "RM", "LM"].includes(position) && players.length) {
      let player = chance.pickone(players);

      player.team = team;
        // players are removed from array to make sure there is no repeating players in teams
    

      if (!final_player_map[team]) {
        final_player_map[team] = []
      }

      final_player_map[team].push(player);

        let index = players.indexOf(player);

      players.splice(index, 1);

    } else if (["CB", "CM", "CF"].includes(position) && players.length) {
      let selected_players = chance.pickset(players, 2);

      selected_players.forEach((player) => {
        player.team = team;
        

        if (!final_player_map[team]) {
            final_player_map[team] = []
          }
         final_player_map[team].push(player);

         let index = players.indexOf(player);
        // players are removed from array to make sure there is no repeating players in teams
        players.splice(index, 1);
      });
    }
    
  });
});

Object.entries(final_player_map).forEach((entry) => {
    const [team, players] = entry;
    console.log(`${team} has ${players.length} players`);
  });

  fse.outputJSON("./data/players.json", final_player_map).catch((err) => {
  console.log(err);
});
 


