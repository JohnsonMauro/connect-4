import { boardCols, boardRows } from "const";
import { IIsValidBoardCellProps } from "types";

const isValidBoardCell = ({ coordinates }: IIsValidBoardCellProps) => {
  const { x, y } = coordinates;

  const maxRow = boardRows - 1;
  const maxCol = boardCols - 1;

  let isValid = true;

  // Check for negative coordinates;
  if (x < 0 || y < 0) isValid = false;

  // Check if coordinates are greater than board rows and columns;
  if (x > maxCol || y > maxRow) isValid = false;

  return isValid;
};

export { isValidBoardCell };
