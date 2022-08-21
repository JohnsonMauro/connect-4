import { act, renderHook } from "@testing-library/react";

import { RecoilRoot, useRecoilValue } from "recoil";

import { usePlayPiece, useGameState } from "hooks";

import { boardState } from "state";
import { BoardType, PlayerPieceType } from "state/types";

const customTestRender = () => {
  const { result } = renderHook(
    () => ({
      play: usePlayPiece(),
      board: useRecoilValue(boardState),
      gameState: useGameState(),
    }),
    {
      wrapper: RecoilRoot,
    }
  );

  return {
    result,
    play: (col: number) => {
      act(() => {
        result.current.play(col);
      });
    },
    resetGame: () => {
      act(() => {
        result.current.gameState.handleResetGame();
      });
    },
    assertGame: (
      player: PlayerPieceType,
      gameOver: boolean,
      board: BoardType
    ) => {
      expect(result.current.board).toEqual(board);
      expect(result.current.gameState.currentPlayer).toEqual(player);
      expect(result.current.gameState.isGameOver).toEqual(gameOver);
    },
  };
};

export { customTestRender };
