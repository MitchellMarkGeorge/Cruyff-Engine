export type PLAYER_POSITION = FORWARD | MIDFIELDER | DEFENDER | GOALKEEPER
export type FORWARD = "CF";
export type MIDFIELDER = "LM" | "CM" | "RM";
export type DEFENDER = "LB" | "CB" | "RB";
export type GOALKEEPER = "GK";

export type PLAYER_LEVEL = "LEGEND" | "PRO" | "ROOKIE";


// type TEAM_
export interface Player {
    id: string,
    name: string,
    team: string // might create type for this
    overall_rating: number
    skill: SkillAttributes,
    position: PLAYER_POSITION,
    level?: PLAYER_LEVEL

}

export interface SkillAttributes {
    // should i still use null or use 0
    speed: number | null,
    dribbling: number | null,
    passing: number | null,
    shooting: number | null,
    tackling: number | null,
    strength: number | null,
    // health: number, // do i need this now? use in-game
    // mentality
    gk_saving: number | null,
    gk_reactions: number | null

    
}

export type GeneratedPlayerResults = {
    GK: Player[];
    CB: Player[];
    LB: Player[];
    RB: Player[];
    CM: Player[];
    LM: Player[];
    RM: Player[];
    CF: Player[];
  };

  export const TEAM_NAMES = [
    "Lockinge FC",
  
    "Penrith United",
  
    "Chester FC",
  
    "Southwold Warriors",
  
    "Guthram FC",
  
    "Warlington Knights",
  
    "MillerVille FC",
  
    "Timberwolf FC",
  
    "Lancaster United",
  
    "Wellspring Thunder",
  
    "Landow FC",
  
    "Kingsmen United",
  
    "Banderland United",
  
    "Armagon FC",
  
    "Ruthorham Crusaders",
  
    "Belton Knights",
  
    "Aerilon FC",
  
    "Malta United",
  
    "Frostford Eagles",
  
    "Garmsby Blazers",
  
    "Hardersfield United",
  
    "Dalmerlington Knights",
  
    "Blue Field FC",
  
    "Queenstown United",
  ];