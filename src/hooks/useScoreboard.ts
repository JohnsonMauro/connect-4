import { useRecoilState } from "recoil";

import { scoreboardState } from "state/scoreboard";
import { usePlayersSettings } from "./usePlayersSettings";

const useScoreboard = () => {
  const [scoreboard, setScoreboard] = useRecoilState(scoreboardState);

  const { firstPlayer, secondPlayer } = usePlayersSettings();

  const handleSaveVictory = ({ playerName }: { playerName: string }) => {
    const playerScoresIndex = scoreboard.scores.findIndex(
      (scoreItem) => scoreItem.playerName === playerName
    );

    if (playerScoresIndex !== -1) {
      const newScores = [...scoreboard.scores];
      const currentPlayerScore = newScores[playerScoresIndex];
      newScores[playerScoresIndex] = {
        playerName: currentPlayerScore.playerName,
        victories: currentPlayerScore.victories + 1,
      };

      setScoreboard({ scores: newScores });
    } else {
      setScoreboard((prevState) => ({
        scores: [...prevState.scores, { playerName, victories: 1 }],
      }));
    }
  };

  function getScoreByPlayer(player: string): number {
    return scoreboard.scores.find((scoreItem) => scoreItem.playerName === player)?.victories || 0
  }

  const firstPlayerScore = getScoreByPlayer(firstPlayer.name);
  const secondPlayerScore = getScoreByPlayer(secondPlayer.name);

  return {
    handleSaveVictory,
    firstPlayerScore,
    secondPlayerScore
  };
};

export { useScoreboard };
