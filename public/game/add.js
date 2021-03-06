import { fourProbability } from "./conf.js";
import { createTile } from "./tile.js";

import { flatten } from "../utils/utils.js";

export function chooseRandomTile(board) {
  const emptyCells = flatten(
    board.map((row, rowIndex) => {
      return row.map((tile, columnIndex) => {
        return { rowIndex, columnIndex, value: tile.value };
      });
    })
  ).filter(tile => tile.value === 0);
  const index = ~~(Math.random() * emptyCells.length);
  const cell = emptyCells[index];
  const value = Math.random() < fourProbability ? 4 : 2;
  return {
    row: cell.rowIndex,
    column: cell.columnIndex,
    value
  };
}

export function addTile(board, rowIndex, columnIndex, value) {
  return board.map((row, r) => {
    return row.map((tile, c) => {
      if (r === rowIndex && c === columnIndex) {
        tile = createTile(value);
      }
      return tile;
    });
  });
}
