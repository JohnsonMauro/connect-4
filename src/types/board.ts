import type {
  BoardCellCoordinatesType,
  BoardType,
  PlayerPieceType,
} from "state/types";

export interface IGetCellValueProps {
  coordinates: BoardCellCoordinatesType;
  boardState: BoardType;
}

export interface DirectionType extends BoardCellCoordinatesType {
  name: "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
}

export interface IGetDiagonalValuesFromCell {
  cellCoordinates: BoardCellCoordinatesType;
  boardState: BoardType;
  player: PlayerPieceType;
}

export interface IIsValidBoardCellProps {
  coordinates: BoardCellCoordinatesType;
}
