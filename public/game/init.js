import { range } from "../utils/utils.js";

import { size } from "./conf.js";
import { createTile } from "./tile.js";

export function init() {
  const dimension = range(size);
  return dimension.map(() => dimension.map(() => createTile()));
}
