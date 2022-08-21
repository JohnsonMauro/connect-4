context("Play a full game", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("play a piece and reset game", () => {
    const columns = cy.get(".board-col");
    columns.should("have.length", 7);

    cy.findByTestId("board-col-0").click();

    cy.findByTestId("board-col-0-slot-0")
      .should("not.have.class", "empty")
      .should("have.class", "playerOne");

    cy.findByTestId("reset-game-button").click();

    cy.findByTestId("board-col-0-slot-0")
      .should("have.class", "empty")
      .should("not.have.class", "playerOne");
  });

  it("play a game where player one will win vertically and horizontally", () => {
    Array(4)
      .fill("0")
      .forEach(() => {
        cy.findByTestId("board-col-0").click();
        cy.findByTestId("board-col-1").click();
      });

    cy.findByTestId("scoreboard-player-one-wins").should("contain", "1");

    cy.findByTestId("reset-game-button").click();

    Array(4)
      .fill("0")
      .forEach((_, index) => {
        cy.findByTestId(`board-col-${index}`).click();
        cy.findByTestId(`board-col-${index}`).click();
      });

    cy.findByTestId("scoreboard-player-one-wins").should("contain", "2");
  });

  it("play a game where player two will win diagonally", () => {
    cy.findByTestId("board-col-0").click();

    const plays = [6, 5, 5, 4, 3, 4, 4, 3, 6, 3, 3];

    plays.forEach((col) => {
      cy.findByTestId(`board-col-${col}`).click();
    });

    cy.findByTestId("scoreboard-player-two-wins").should("contain", "1");
  });
});
