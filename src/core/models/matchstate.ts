// shoulf

import ENGINE_CONSTANTS from "../constants";
import { MatchStats } from "./types";

export class MatchState {

    private homeGoals = 0;
    private awayGoals = 0;
    private homeShots = 0;
    private awayShots = 0;
    private homePasses = 0;
    private awayPasses = 0;
    private matchTime = 0;

    // should they be public

    inFirstHalf() {
        return this.matchTime <= ENGINE_CONSTANTS.halfDuration;
    }

    timeTick() {
        this.matchTime += ENGINE_CONSTANTS.tick;
    }

    getTime() {
        return this.matchTime
    }

    incrementHomeGoal() {
        this.homeGoals++;
    }



    incrementAwayGoal() {
        this.awayGoals++;
    }

    incrementHomeShot() {
        this.homeShots++;
    }
    incrementAwayShots() {
        this.awayShots++;
    }
    incrementHomePasses() {
        this.homePasses++;
    }
    incrementAwayPasses() {
        this.awayPasses++;
    }

    getCurrentMatchStats(): MatchStats {
        return {
            homeGoals: this.homeGoals,
            awayGoals: this.awayGoals,
            homeShots: this.homeShots,
            awayShots: this.awayShots,
            homePasses: this.homePasses,
            awayPasses: this.awayPasses
        }
    }
}