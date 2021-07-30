import { Coordinate } from "./types";

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