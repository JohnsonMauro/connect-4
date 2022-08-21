import { gameStateStorageKey } from "const";
import { atom, AtomEffect } from "recoil";
import { PlayerPieceType } from "state/types";

const localStorageGameStateEffect =
  (): AtomEffect<GameStateType> =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(gameStateStorageKey);

    if (savedValue) {
      const parsedSavedValue = JSON.parse(savedValue);

      setSelf(parsedSavedValue);
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(gameStateStorageKey);
      } else {
        localStorage.setItem(gameStateStorageKey, JSON.stringify(newValue));
      }
    });
  };

type GameStateType = {
  turn: PlayerPieceType;
  gameOver: boolean;
};

const defaultGameState: GameStateType = {
  turn: 1,
  gameOver: false,
};

export const gameState = atom<GameStateType>({
  key: "gameState",
  default: defaultGameState,
  effects: [localStorageGameStateEffect()],
});
