import { PlayerPieceType } from "state/types";

export const boardCols = 7;
export const boardRows = 6;

export const playerColor: Record<PlayerPieceType, string> = {
  1: "#f10000",
  2: "#ece100",
};

export const playerName: Record<PlayerPieceType, string> = {
  1: "Red",
  2: "Yellow",
};

export const boardStateStorageKey = "boardState";

export const gameStateStorageKey = "gameState";

export const playersSettingsStorageKey = "playersSettings";

export const scoreBoardStateStorageKey = "scoreBoard";
