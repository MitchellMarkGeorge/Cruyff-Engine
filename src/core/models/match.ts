import { Pitch } from "../../pitch";
import { MatchState } from "./matchstate";
import { SimTeam } from "./team";
import { Logger } from "./types";
import Chance from "chance";
import ENGINE_CONSTANTS from "../constants";
const chance = new Chance();
export class Match {

    private matchState: MatchState;
    constructor(private homeTeam: SimTeam, private awayTeam: SimTeam, private pitch: Pitch, private logger: Logger) {

        this.matchState = new MatchState();


    }

    public start() {

        // randomly pick a starting team (either home or away), and based on the result/choice , get the oposing team
        const startingTeam = this.pickStartingTeam();
        const secondTeam = this.getOtherTeam(startingTeam);
        this.pitch.placeTeamsOnPitch(startingTeam, secondTeam) // for second half, switch argument positions
        const [cf1] = startingTeam.getForwards();
        // how do i handle possession
        // cf1.hasPossession = true; // kickoff
        console.log(this.pitch.getPitch());

        // const { tick, halfDuration } = ENGINE_CONSTANTS

        // first half
        this.playMatchHalf()

        // second half
        // switch half
        this.pitch.placeTeamsOnPitch(secondTeam, startingTeam);

        this.playMatchHalf();
        // for (let i = 0; i < halfDuration; i += tick) {
        //     this.playTeamTurn(startingTeam);
        //     this.playTeamTurn(secondTeam);
        // }


    }



    private pickStartingTeam() {
        return chance.pickone([this.homeTeam, this.awayTeam]);
    }




    private getOtherTeam(team: SimTeam) {
        // essentially if the hometeam is given, it should return the awayteam and vice versa

        if (team !== this.homeTeam && team !== this.awayTeam) {
            throw new Error("Illegal team object given");
        }

        if (team === this.homeTeam) {
            return this.awayTeam
        } else {
            return this.homeTeam;
        }
    }


    private playMatchHalf() {
        const { tick, halfDuration } = ENGINE_CONSTANTS;
        for (let i = 0; i < halfDuration; i += tick) {
            this.playTeamTurn(this.homeTeam);
            this.playTeamTurn(this.awayTeam);
            this.matchState.timeTick();// do i need this
        }

        // while loop?
    }

    private playTeamTurn(team: SimTeam) {
        const players = team.getPlayers();

        players.forEach(player => {
            player.makeDecision(this.pitch, this.matchState);
        })
    }
}