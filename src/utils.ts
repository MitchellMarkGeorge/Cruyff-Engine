import { AI } from "./core/playerAI/types";
import { Coordinate, PLAYER_POSITION } from "./types";

export function randomNumber(min: number, max: number) {

  if (min >= max) {
    throw new Error("min must be less than max")
  }
  return Math.floor(Math.random() * (max - min) + min);
}

export function distace(a: Coordinate, b: Coordinate) {
  //  square((a.x - b.x)) + square((a.y - b.y))
  // https://www.mathsisfun.com/algebra/distance-2-points.html
  const result = Math.sqrt(square((a.x - b.x)) + square((a.y - b.y)))
  return Math.round(result);
}

function square(x: number) {
  return Math.pow(x, 2);
}

export const playerUtils = {

  isGK(position: PLAYER_POSITION) {
    return position === "GK";
  },

  isDefender(position: PLAYER_POSITION) {
    return ["LB", "CB", "RB"].includes(position);
  },

  isMidfielder(position: PLAYER_POSITION) {
    return ["LM", "CM", "RM"].includes(position);
  },

  isForward(position: PLAYER_POSITION) {
    return position === "CF";
  },

  getAI(position: PLAYER_POSITION): AI {
    // for now
    return {
      evaluate() {}
    }
  }

  
}