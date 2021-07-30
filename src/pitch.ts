import { Coordinate } from "./types";

class Pitch {
    // is this the best way to represent the pitch??
    private pitch: null[][]; // for now
    constructor(width: number, length: number) {
        this.pitch = this.generatePitch(width, length)
    }

    private generatePitch(width: number, length: number) {
        let arr: null[][] = [];

        for (let i = 0; i < length; i++) {
            arr[i] = [];
            for (let j = 0; j < width; j++) {
                arr[i][j] = null;
            }
        }
        console.log(arr);
        return arr;
    }

    public getEntityAt(coord: Coordinate) {
        return this.pitch[coord.x][coord.y];
    }

    // public placeEntityAt(entity,)
}

new Pitch(14, 15);