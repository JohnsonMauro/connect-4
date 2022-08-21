import { FC } from "react";

import { useRecoilValue } from "recoil";
import { boardState } from "state";

import { Circle, Flex } from "@chakra-ui/react";

import { boardRows } from "const";
import { useGameState, usePlayersSettings, usePlayPiece } from "hooks";

const getColumnCells = (col: number[]): number[] => {
  const columnJoin = col.join("");
  const columnFilledWithEmptyCells = columnJoin.padEnd(boardRows, "0");
  const cellsArray = columnFilledWithEmptyCells.split("");
  const cellsNumberArray = cellsArray.map(Number);

  return cellsNumberArray;
};

const Board: FC = () => {
  const play = usePlayPiece();
  const board = useRecoilValue(boardState);

  const { currentPlayer, isGameOver } = useGameState();

  const { firstPlayer, secondPlayer } = usePlayersSettings();

  function getPieceColor(pieceValue: number) {
    if (pieceValue === 1) return firstPlayer.color;

    if (pieceValue === 2) return secondPlayer.color;

    return null;
  };

  function getCellClassName(pieceValue: number) {
    if (pieceValue === 1) return "playerOne";

    if (pieceValue === 2) return "playerTwo";

    return "empty";
  };

  return (
    <Flex justify="center">
      {board.map((col, colIndex) => (
        <Flex
          key={`board-col-${colIndex}`}
          role="group"
          onClick={() => play(colIndex)}
          flexDirection="column-reverse"
          cursor={isGameOver ? "auto" : "pointer"}
          data-testid={`board-col-${colIndex}`}
          className="board-col"
        >
          {getColumnCells(col).map((pieceValue, index) => (
            <Circle
              m={8}
              size="4rem"
              key={`board-col-${colIndex}-slot-${index}`}
              data-testid={`board-col-${colIndex}-slot-${index}`}
              boxShadow="inner"
              bg={getPieceColor(pieceValue) || "transparent"}
              border={getPieceColor(pieceValue) ? "none" : "1px solid black"}
              className={getCellClassName(pieceValue)}
              transition="background-color 200ms ease"
            />
          ))}
          <Circle
            m={8}
            size="4rem"
            boxShadow="base"
            visibility="hidden"
            bg={getPieceColor(currentPlayer) || "transparent"}
            transition="all 100ms ease"
            _groupHover={{
              visibility: isGameOver ? "hidden" : "visible",
            }}
          />
        </Flex>
      ))}
    </Flex>
  );
};

export { Board };
