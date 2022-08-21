import { IGetCellValueProps } from "types";

const getCellValue = ({ coordinates, boardState }: IGetCellValueProps) => {
  const { x, y } = coordinates;

  if (x < 0 || y < 0) return 0;

  const column = boardState[x];

  const value = column[y] || 0;

  return value;
};

export { getCellValue };
