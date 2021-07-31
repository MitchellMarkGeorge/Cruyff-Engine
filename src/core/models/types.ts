import { SimTeam } from "./team";

export interface MatchStats {
    homeGoals: number,
    awayGoals: number,
    homeShots: number,
    awayShots: number,
    homePasses: number,
    awayPasses: number
}

export interface Logger {
    log(): void
}

// export interface MatchOptions {
//     homeTeam: SimTeam,
//     awayTeam: SimTeam,

// }

export interface MatchContext {
    
}