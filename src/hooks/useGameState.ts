import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

import { boardState, gameState } from "state";

import { usePlayersSettings } from "./usePlayersSettings";
import { useScoreboard } from "./useScoreboard";

const useGameState = () => {
  const board = useRecoilValue(boardState);
  const [gameStateValue, setGameState] = useRecoilState(gameState);
  const resetBoard = useResetRecoilState(boardState);
  const resetGameState = useResetRecoilState(gameState);

  const { handleSaveVictory } = useScoreboard();
  const { firstPlayer, secondPlayer } = usePlayersSettings();

  const { turn, gameOver } = gameStateValue;

  const handleResetGame = () => {
    resetBoard();
    resetGameState();
  };

  const handleFinishMatch = () => {
    handleSaveVictory({
      playerName: turn === 1 ? firstPlayer.name : secondPlayer.name,
    });

    setGameState({
      turn,
      gameOver: true,
    });
  };

  const handleCurrentPlayerToggle = () => {
    setGameState((prevState) => ({
      turn: prevState.turn === 1 ? 2 : 1,
      gameOver: false,
    }));
  };

  const isGameStarted = board.some((col) => col.length);

  return {
    currentPlayer: turn,
    isGameOver: gameOver,
    isGameStarted,
    handleResetGame,
    handleFinishMatch,
    handleCurrentPlayerToggle,
  };
};

export { useGameState };
