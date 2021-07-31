import { SimPlayer } from "./core/models/simplayer";
import { SimTeam } from "./core/models/team";
import { Coordinate } from "./types";

export class Pitch {
    // is this the best way to represent the pitch??
    private pitch: (SimPlayer | null)[][]; // for now
    constructor(width: number, length: number) {
        // should i just put the numbers in here
        this.pitch = this.generatePitch(width, length)
    }

    private generatePitch(width: number, length: number) {
        let arr: (SimPlayer | null)[][] = [];
        // techiniaclly emeelts are accesed using y, x coordinates
        for (let i = 0; i < length; i++) {


            arr[i] = [];
            for (let j = 0; j < width; j++) {
                arr[i][j] = null;
            }
        }
        // console.log(arr);
        return arr;
    }

    public getPlayerAt(coord: Coordinate) {
        return this.pitch[coord.y][coord.x];
    }

    getPitch() {
        return this.pitch;
    }

    movePlayerTo(player: SimPlayer, coordinate: Coordinate) {

    }

    placeTeamsOnPitch(startingTeam: SimTeam, secondTeam: SimTeam) {
        this.placeStartingTeam(startingTeam);
        this.placeSecondTeam(secondTeam);
    }

    private placeStartingTeam(startingTeam: SimTeam) {
        // should use player map -> see team.js
        const [lb] = startingTeam.getPlayerByPosition("LB");
        const [rb] = startingTeam.getPlayerByPosition("RB");
        const [cb1, cb2] = startingTeam.getPlayerByPosition("CB");
        const [rm] = startingTeam.getPlayerByPosition("RM");
        const [lm] = startingTeam.getPlayerByPosition("LM");
        const [cm1, cm2] = startingTeam.getPlayerByPosition("CM");
        const [cf1, cf2] = startingTeam.getPlayerByPosition("CF");
        for (let i = 0; i <= 7; i += 2) {
            switch (i) {
                case 0:
                    this.pitch[0][7] = startingTeam.getGoalkeeper();
                    break;
                case 2:
                    this.pitch[2][11] = lb;
                    this.pitch[2][8] = cb1;
                    this.pitch[2][5] = cb2;
                    this.pitch[2][2] = rb
                    break;

                case 4:
                    this.pitch[4][11] = lm;
                    this.pitch[4][8] = cm1;
                    this.pitch[4][5] = cm2;
                    this.pitch[4][2] = rm
                    break;

                case 6:
                    this.pitch[6][8] = cf1;
                    this.pitch[6][5] = cf2;
                    break

            }
        }
    }

    private placeSecondTeam(secondTeam: SimTeam) {
        // should use player map
        const [lb] = secondTeam.getPlayerByPosition("LB");
        const [rb] = secondTeam.getPlayerByPosition("RB");
        const [cb1, cb2] = secondTeam.getPlayerByPosition("CB");
        const [rm] = secondTeam.getPlayerByPosition("RM");
        const [lm] = secondTeam.getPlayerByPosition("LM");
        const [cm1, cm2] = secondTeam.getPlayerByPosition("CM");
        const [cf1, cf2] = secondTeam.getPlayerByPosition("CF");
        for (let i = 8; i <= 14; i+= 2) {
            switch (i) {
                case 8:
                    this.pitch[8][5] = cf1;
                    this.pitch[8][8] = cf2;
                    break;
                case 10:
                    this.pitch[10][2] = lm;
                    this.pitch[10][5] = cm1;
                    this.pitch[10][8] = cm2;
                    this.pitch[10][11] = rm
                    break;

                case 12:
                    this.pitch[12][2] = lb;
                    this.pitch[12][5] = cb1;
                    this.pitch[12][8] = cb2;
                    this.pitch[12][11] = rb
                    break;

                case 14:
                    this.pitch[14][7] = secondTeam.getGoalkeeper()
                    break

            }
        }
    }
}
