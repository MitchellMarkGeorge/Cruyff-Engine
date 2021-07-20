import { PlayerFactory } from "./playerFactory";
// faker.de

// for dtatbase, use lowdb and lodash fornow
// after mach sim is up and running, make own database

console.log(PlayerFactory.createPlayer("CF", "ROOKIE"));
console.log(PlayerFactory.createPlayer("CM", "ROOKIE"));
console.log(PlayerFactory.createPlayer("CB", "ROOKIE"));
console.log(PlayerFactory.createPlayer("GK", "ROOKIE"));



// faker.name.
// for (let i = 0; i < 10; i++) {
//     console.log(faker.name.firstName(0) + " " + faker.name.lastName(0))
// }

// generate 264 players (24 teams)
// support only 4-4-2
/**
 * generate by teams
 * 20 players
 *
 * starting (11)
 * 1 gk
 * 4 defenders (2 cb, 1 lb, 1 rb)
 * 4 midfielders (2 cm, 1lm, 1 rm)
 * 2 cf
 *
 * substitutes (5) // do i need this? should ai teams be able to substitute players?
 * 1gk
 * 2 defenders,
 * 1 mid
 * 1 cf
 */


// the skill attributes of a player depends on two things
// 1) the level of a player
// 2) the position of the player
//
// 1) a rookie player (indendent of the position thry play) would have
// lower skill attributes (and a lower overall rating) compared to pro and legend players
// (indepenedt of the position they play)

// 2) a cf would be better at shooting and dribbling compared to a defender (who mwould be better at defending and passing)

// CF attributes
// better at skills like
//  speed, dribbling, shooting
// bad at tackling, strenght

// Midfielders
// good at most things
// good at passing
// some might be better at defending or attaching

// Defenders
// bad at speed, dirbbling

// let players: Player[] = [];

// function generatePlayers() {

//     // generate gk
// }

// function createPlayer(position: PLAYER_POSITION, level: PLAYER_LEVEL) {
//     let player: Player = {}
// }

// function buildSkillAttributes() {

// }

// function generateStats(level: PLAYER_LEVEL): number {
//     switch (level) {
//         case "LEGEND":

//             return randomNumber(85, 95)
//         case "PRO":
//             return randomNumber(75, 85)

//         case "ROOKIE":
//             return randomNumber(60, 65)

//         default:
//             return randomNumber(60, 100);

//     }
// }
