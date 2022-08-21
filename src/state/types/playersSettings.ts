export type PlayerType = {
  name: string;
  color: string;
  pieceValue: number;
};

export type PlayersSettingsType = {
  firstPlayer: PlayerType;
  secondPlayer: PlayerType;
};

export type PlayersKeysType = "firstPlayer" | "secondPlayer";
