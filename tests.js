import { SubterraneanMaze } from "./SubterraneanMaze.js";

const s1 = new SubterraneanMaze([
  ["#", "", "", "", "", "#", ""],
  ["", "S", "", "", "#", "", ""],
  ["", "", "#", "", "", "#", ""],
  ["", "#", "", "", "", "#", "E"],
  ["", "", "", "", "", "", ""],
  ["#", "#", "", "", "", "#", ""],
  ["", "", "", "", "", "", ""],
])

s1.createGraph()
s1.showRoute()

const s2 = new SubterraneanMaze([
  ["E", "", "", ""],
  ["#", "", "#", ""],
  ["", "", "", ""],
  ["", "#", "#", ""],
  ["", "", "#", ""],
  ["#", "", "#", ""],
  ["", "", "#", ""],
  ["", "", "", "S"],
])

s2.createGraph()
s2.showRoute()

const s3 = new SubterraneanMaze([
  ["", "", "", "", ""],
  ["", "", "S", "", ""],
  ["", "#", "#", "", ""],
  ["", "#", "E", "#", ""],
  ["", "#", "", "#", ""],
  ["", "", "", "#", ""],
  ["", "", "", "", ""],
])

s3.createGraph()
s3.showRoute()

const s4 = new SubterraneanMaze([
  ["", "#", "#", "S", "#", "#", "#"],
  ["#", "#", "", "", "", "", "#"],
  ["#", "", "", "#", "#", "", "#"],
  ["#", "", "", "", "", "", "#"],
  ["#", "", "#", "", "#", "", "#"],
  ["#", "", "", "", "#", "", "#"],
  ["#", "#", "", "#", "", "", "#"],
  ["#", "#", "", "", "", "#", "#"],
  ["#", "", "", "", "#", "", "#"],
  ["#", "", "#", "", "", "#", "#"],
  ["#", "", "", "#", "#", "#", "#"],
  ["#", "", "", "", "", "", "#"],
  ["#", "#", "", "", "#", "", "#"],
  ["#", "#", "#", "#", "#", "E", "#"],
])

s4.createGraph()
s4.showRoute()