import { SimPlayer } from "./simplayer";
import { DEFENDER, PLAYER_POSITION } from "../../types";
import { playerUtils } from "../../utils";

export class SimTeam {

    // players: SimPlayer[]
    // playerMap: {
    //     "GK": SimPlayer,
    //     "LB": SimPlayer,
    //     "CB": SimPlayer[],
    //     "RB": SimPlayer,
    //     "LM": SimPlayer,
    //     "CM": SimPlayer[],
    //     "RM": SimPlayer,
    //     "CF": SimPlayer
    // }

    
    constructor(private players: SimPlayer[]) {
        // this.playerMap = {
        //     GK: 
        // };
    }

    getPlayers(): SimPlayer[] {
        return this.players;
    }

    getPlayerByPosition(position: PLAYER_POSITION) {
        return this.players.filter(({ position }) => playerUtils.isGK(position));
    }

    getGoalkeeper() {
        const gk = this.players.find(player => player.position === "GK");
        if (!gk) {
            throw new Error("Team has no goalkeeper") // technically not possib;le
        }

        return gk

    }

    getDefenders() {
        return this.players.filter(({ position }) => playerUtils.isDefender(position));
    }

    getMidfielders() {
        return this.players.filter(({ position }) => playerUtils.isMidfielder(position));
    }

    getForwards() {
        return this.players.filter(({ position }) => playerUtils.isForward(position));
    }
}