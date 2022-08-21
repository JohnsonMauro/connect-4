export type ScoreItemType = {
  playerName: string;
  victories: number;
};

export type ScoreboardStateType = {
  scores: ScoreItemType[];
};
