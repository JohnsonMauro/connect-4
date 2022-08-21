import { useRecoilState } from "recoil";

import { boardRows } from "const";
import { boardState } from "state";

import { useGameState } from "./useGameState";

const testWin = (str: string): boolean => /([12])(\1{3}|(.{5}\1){3}|(.{6}\1){3}|(.{7}\1){3})/.test(str);

const COLUMNS_NUMBERS = 6

const usePlayPiece = () => {
  const [board, setBoard] = useRecoilState(boardState);

  const {
    currentPlayer,
    isGameOver,
    handleFinishMatch,
    handleCurrentPlayerToggle,
  } = useGameState();

  return (col: number) => {
    // Prevent adding a piece when the game is over
    if (isGameOver) {
      return;
    }

    // Prevent adding a piece when the column is full
    if (board[col].length === boardRows) {
      return;
    }

    // Play piece (non mutating)
    const newBoard = board.map((column, i) =>
      i === col ? [...column, currentPlayer] : column
    );

    /*
      Solution obtained from the link: https://stackoverflow.com/questions/66295225/checking-for-diagonals-in-game
      * A vertical four-in-a-row will have four occurrences of "1" (or "2") next to each other.
      * A horizontal four-in-a-row will have four occurrences of "1" (or "2"), where each pair is separated by 6 characters -- which can be anything (one will be a ":")
      * A diagonal four-in-a-row will have such pairs separated by 7 characters (if slanted downward) or by 5 characters (if slanted upwards).
    */
    function patternBoardToString(column: number[]): string {
      return '0'.repeat(COLUMNS_NUMBERS - column.length) + column.map((slot) => slot).reverse().join("")
    }

    const patternVictory = newBoard.map(col => patternBoardToString(col)).join(":")

    if (testWin(patternVictory)) {
      handleFinishMatch();
    } else {
      handleCurrentPlayerToggle();
    }

    setBoard(newBoard);
  };
};

export { usePlayPiece };
