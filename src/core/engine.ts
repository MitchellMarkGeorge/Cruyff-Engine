import { Pitch } from "../pitch";
import ENGINE_CONSTANTS from "./constants";
import { Match } from "./models/match";
import { MatchLogger } from "./models/matchlogger";
import { SimTeam } from "./models/team";


export class Engine {

    static simMatch(homeTeam: SimTeam, awayTeam: SimTeam) {
        const { pitchDimensions } = ENGINE_CONSTANTS
        const pitch = new Pitch(pitchDimensions.width, pitchDimensions.length);
        const matchLogger = new MatchLogger();
        const match = new Match(homeTeam, awayTeam, pitch, matchLogger);

        match.start();
    }
}