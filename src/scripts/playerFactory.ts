import {
    DEFENDER,
    FORWARD,
  GOALKEEPER,
  MIDFIELDER,
  Player,
  PLAYER_LEVEL,
  PLAYER_POSITION,
  SkillAttributes,
} from "../types";
import { randomNumber } from "../utils";
import { nanoid } from "nanoid";
import { Chance } from "chance";

const chance = new Chance();

// chance.first({ nationality: })

export class PlayerFactory {
  private static randomPlayerName(): string {
    const nationality: "en" | "it" = chance.pickone(["en", "it"]);
    return chance.name({ gender: "male", nationality }); // should i use first and last to generate randome natonalityh for both names?
  }

  private static generateStats(level: PLAYER_LEVEL): number {
    switch (level) {
      case "LEGEND":
        return randomNumber(85, 95); //100
      case "PRO":
        return randomNumber(75, 85);

      case "ROOKIE":
        return randomNumber(60, 65);

      default:
        return randomNumber(60, 100);
    }
  }

  private static claculateOverallRating(skills: SkillAttributes): number {
    // overall rating should showcase best of player baserd on their position

    // for gk, remove some skills to get a fair score

    let attributes = Object.values(skills);
    attributes = attributes.filter(Boolean); // this also works because no one will have an attributeof 0
    // attributes.filter((x) => x !== null)
    // in case of players thast have null for goalkeeping
    // this makes sure things are not complely skewed because there are less points to
    // create an average on
    let sum: number = attributes.reduce((prev, next) => prev + next, 0);

    return Math.floor(sum / attributes.length); //length should be
  }

  // position-based attributes use the generateStats  / level dependent
  // rest are completley random
  private static generateForward(position: FORWARD, level: PLAYER_LEVEL): Player {
    // CF attributes
    // better at skills like
    //  speed, dribbling, shooting
    // bad at tackling, strenght

    let skill: SkillAttributes = {
      dribbling: this.generateStats(level),
      speed: this.generateStats(level),
      shooting: this.generateStats(level),
      // play around with these variables
      tackling: randomNumber(60, 100), // can use pickone
      passing: this.generateStats(level), // can use pickone
      strength: randomNumber(60, 80), //  an use pickone,
      gk_saving: null,
      gk_reactions: null,
    };

    let player: Player = {
      id: nanoid(),
      name: this.randomPlayerName(),
      overall_rating: 0, // DEFAULT
      skill,
      team: "", // will be set later
      position,
      level
    };

    const overall_rating = this.claculateOverallRating(skill);
    player.overall_rating = overall_rating;

    return player;
  }

  private static generateGoalKeeper(position: GOALKEEPER, level: PLAYER_LEVEL): Player {
    // what other attributes should a gk have
    let skill: SkillAttributes = {
      // gk might not need these other
      // maybe strength or tackling, passing
      dribbling: null,
      speed: null,
      shooting: null,
      // play around with these variables
      tackling: null, // can use pickone
      passing: this.generateStats(level), // pass to other players
      strength: this.generateStats(level), //  might not be needed
      // look at these stats again
      gk_saving: this.generateStats(level),
      gk_reactions: this.generateStats(level),
    
    };

    let player: Player = {
      id: nanoid(),
      name: this.randomPlayerName(),
      overall_rating: 0, // DEFAULT
      skill,
      team: "", // will be set later
      position,
      level
    };

    const overall_rating = this.claculateOverallRating(skill);
    player.overall_rating = overall_rating;

    return player;
  }

  private static generateMidfielder(position: MIDFIELDER, level: PLAYER_LEVEL): Player {
    // Midfielders
    // good at most things
    // good at passing
    // some might be better at defending or attaching

    let skill: SkillAttributes = {
      dribbling: this.generateStats(level),
      speed: this.generateStats(level),
      shooting: this.generateStats(level),
      // play around with these variables
      tackling: chance.pickone([
        randomNumber(60, 100),
        this.generateStats(level),
      ]), // can use pickone
      passing: chance.pickone([
        randomNumber(70, 85),
        this.generateStats(level),
      ]), // should be better at passing
      strength: chance.pickone([
        randomNumber(60, 100),
        this.generateStats(level),
      ]), //  an use pickone,
      gk_saving: null,
      gk_reactions: null,
    };

    let player: Player = {
      id: nanoid(),
      name: this.randomPlayerName(),
      overall_rating: 0, // DEFAULT
      skill,
      team: "", // will be set later
      position,
      level
    };

    const overall_rating = this.claculateOverallRating(skill);
    player.overall_rating = overall_rating;

    return player;
  }

  private static generateDefender(position: DEFENDER, level: PLAYER_LEVEL): Player {
    // Defenders
    // bad at speed, dirbbling, shooting
    let skill: SkillAttributes = {
      dribbling: randomNumber(65, 100),
      speed: randomNumber(65, 100),
      shooting: randomNumber(60, 100),
      // play around with these variables
      tackling: this.generateStats(level), 
      passing: this.generateStats(level), 
      strength: this.generateStats(level), 
      gk_saving: null,
      gk_reactions: null,
    };

    let player: Player = {
      id: nanoid(),
      name: this.randomPlayerName(),
      overall_rating: 0, // DEFAULT
      skill,
      team: "", // will be set later
      position,
      level
    };

    const overall_rating = this.claculateOverallRating(skill);
    player.overall_rating = overall_rating;

    return player;
  }

  static createPlayer(position: PLAYER_POSITION, level: PLAYER_LEVEL): Player {
    switch (position) {
      case "CB":
      case "RB":
      case "LB":
        return this.generateDefender(position, level);

      case "CM":
      case "LM":
      case "RM":
        return this.generateMidfielder(position, level);

      case "CF":
        return this.generateForward(position, level);

      case "GK":
        return this.generateGoalKeeper(position, level);
      default:
        throw new Error("Unssuported player position.");
    }
  }
}
