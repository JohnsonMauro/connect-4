import { atom, AtomEffect } from "recoil";

import { playersSettingsStorageKey } from "const";
import { PlayersSettingsType } from "./types";

const defaultValue: PlayersSettingsType = {
  firstPlayer: {
    name: "Player One",
    color: "#FF4343",
    pieceValue: 1,
  },
  secondPlayer: {
    name: "Player Two",
    color: "#F2E340",
    pieceValue: 2,
  },
};

const localStorageEffect = (): AtomEffect<PlayersSettingsType> => ({ setSelf, onSet }) => {
  const savedValue = localStorage.getItem(playersSettingsStorageKey);

  if (savedValue) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue, _, isReset) => {
    if (isReset) {
      localStorage.removeItem(playersSettingsStorageKey);
    } else {
      localStorage.setItem(
        playersSettingsStorageKey,
        JSON.stringify(newValue)
      );
    }
  });
};

export const PlayersSettingsState = atom<PlayersSettingsType>({
  key: "playerSettingsState",
  default: defaultValue,
  effects: [localStorageEffect()],
});
