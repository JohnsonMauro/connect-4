import { boardCols, boardStateStorageKey } from "const";
import { atom, AtomEffect } from "recoil";
import { BoardType } from "./types";

const localStorageBoardEffect =
  (): AtomEffect<BoardType> =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(boardStateStorageKey);

    if (savedValue) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(boardStateStorageKey);
      } else {
        localStorage.setItem(boardStateStorageKey, JSON.stringify(newValue));
      }
    });
  };

export const boardState = atom<BoardType>({
  key: "boardState",
  default: Array(boardCols).fill([]),
  effects: [localStorageBoardEffect()],
});
