// should have all
// track if player has the ball (instamce of ball object)
// should take Player object and "copy" all its info

import { Player, PLAYER_LEVEL, PLAYER_POSITION, SkillAttributes } from "../../types";

export class SimPlayer implements Player {
    id: string;
    name: string;
    overall_rating: number;
    position: PLAYER_POSITION;
    skill: SkillAttributes;
    team: string;
    level: PLAYER_LEVEL;
    hasPossession: boolean = false;
    
    constructor(player: Player) {
        this.id = player.id
        this.name = player.name;
        this.overall_rating = player.overall_rating;
        this.position = player.position;
        this.skill = player.skill;
        this.team = player.team;
        this.level = player.level;
        
    }

    // use methofs to switch possession

    // hasPossession() {
    //     return hs
    // }

    // gainPossession(ball: Ball) {
    //     if (this.inPossession()) {
    //         throw new Error("Player already in possession");
    //     }
    //     this.ball = ball;
    // }

    // loosePossession() {
    //     this.ball
    // }
}