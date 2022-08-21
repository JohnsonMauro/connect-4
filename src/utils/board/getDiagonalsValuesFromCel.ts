import { getCellValue } from "./getCellValue";
import { isValidBoardCell } from "./isValidCell";

import { DirectionType, IGetDiagonalValuesFromCell } from "types";

const getDiagonalsValuesFromCell = ({
  cellCoordinates,
  boardState,
  player,
}: IGetDiagonalValuesFromCell) => {
  const directions: DirectionType[] = [
    {
      name: "leftBottom",
      x: -1,
      y: -1,
    },
    {
      name: "leftTop",
      x: -1,
      y: +1,
    },
    {
      name: "rightBottom",
      x: +1,
      y: -1,
    },

    {
      name: "rightTop",
      x: +1,
      y: +1,
    },
  ];

  const { x, y } = cellCoordinates;

  const diagonals = {
    leftTop: [] as number[],
    leftBottom: [] as number[],
    rightTop: [] as number[],
    rightBottom: [] as number[],
  };

  directions.forEach((directionItem) => {
    let iterations = 0;

    const initialCoordinates = {
      x,
      y,
    };

    const currentCoordinates = initialCoordinates;

    while (isValidBoardCell({ coordinates: currentCoordinates })) {
      const playerInCell = getCellValue({
        coordinates: currentCoordinates,
        boardState,
      });

      // Skip first iteration to avoid duplication;
      if (iterations !== 0) {
        diagonals[directionItem.name].push(playerInCell);
      }

      currentCoordinates.x += directionItem.x;
      currentCoordinates.y += directionItem.y;

      iterations++;
    }
  });

  const forwardDiagonal = [
    ...diagonals.leftBottom,
    player,
    ...diagonals.rightTop,
  ];

  const backwardDiagonal = [
    ...diagonals.leftTop,
    player,
    ...diagonals.rightBottom,
  ];

  return {
    backward: backwardDiagonal,
    forward: forwardDiagonal,
  };
};

export { getDiagonalsValuesFromCell };
