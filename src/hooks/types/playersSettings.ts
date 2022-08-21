import type { PlayersKeysType, PlayerType } from "state/types";

export interface IHandleChangeSettingsProps {
  player: PlayersKeysType;
  newSettings: PlayerType;
}
