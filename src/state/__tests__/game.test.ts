import { cleanup } from "@testing-library/react";
import { BoardType } from "state/types";
import { customTestRender } from "utils";

describe("Game State persistence (localStorage)", () => {
  jest.spyOn(Storage.prototype, "setItem");
  Storage.prototype.setItem = jest.fn();

  jest.spyOn(Storage.prototype, "getItem");
  Storage.prototype.getItem = jest.fn();

  test("should save game state to localStorage after each move", () => {
    const { play } = customTestRender();

    play(0);

    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test("should load game state (board and player turn) from localStorage on start", () => {
    const { play, assertGame, resetGame } = customTestRender();

    const boardExpectedResult: BoardType = [[1], [], [], [], [], [], []];

    resetGame();

    play(0);

    assertGame(2, false, boardExpectedResult);

    cleanup();

    expect(localStorage.getItem).toHaveBeenCalled();

    assertGame(2, false, boardExpectedResult);
  });
});
