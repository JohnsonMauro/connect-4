import { atom, AtomEffect } from "recoil";

import { scoreBoardStateStorageKey } from "const";
import { ScoreboardStateType } from "./types";

const localStorageScoreboardEffect = (): AtomEffect<ScoreboardStateType> =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(scoreBoardStateStorageKey);

    if (savedValue) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(scoreBoardStateStorageKey);
      } else {
        localStorage.setItem(
          scoreBoardStateStorageKey,
          JSON.stringify(newValue)
        );
      }
    });
  };

export const scoreboardState = atom<ScoreboardStateType>({
  key: "scoreboard",
  default: {
    scores: [],
  },
  effects: [localStorageScoreboardEffect()],
});
