context("Game Settings tests", () => {
  const testData = {
    playerOneName: "Cypress One",
    playerTwoName: "Cypress Two",
  };

  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("should open settings and change players names name", () => {
    cy.findByTestId("settings-button").should("exist").click();

    cy.findByTestId("settings-panel").should("be.visible");

    cy.findByTestId("playerOne-name-input")
      .should("be.visible")
      .clear()
      .type(testData.playerOneName)
      .should("have.value", testData.playerOneName);

    cy.findByTestId("playerTwo-name-input")
      .should("be.visible")
      .clear()
      .type(testData.playerTwoName)
      .should("have.value", testData.playerTwoName);

    cy.findByTestId("save-settings-button").click();

    cy.findByTestId("scoreboard-player-one-name").should(
      "contain",
      testData.playerOneName
    );

    cy.findByTestId("scoreboard-player-two-name").should(
      "contain",
      testData.playerTwoName
    );
  });
});
