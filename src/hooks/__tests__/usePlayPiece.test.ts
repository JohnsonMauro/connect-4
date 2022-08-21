import { customTestRender } from "utils";

// Player movements validations;

describe("Player movements", () => {
  test("should not play a piece when the column is full", () => {
    const { play, assertGame } = customTestRender();

    [0, 0, 0, 0, 0, 0].forEach(play);

    assertGame(1, false, [[1, 2, 1, 2, 1, 2], [], [], [], [], [], []]);

    play(0);
    // No change because column is full
    assertGame(1, false, [[1, 2, 1, 2, 1, 2], [], [], [], [], [], []]);
  });
});
