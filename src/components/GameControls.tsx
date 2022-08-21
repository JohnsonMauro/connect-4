import { Button } from "@chakra-ui/react";
import { useGameState } from "hooks";
import { FC } from "react";

const GameControls: FC = () => {
  const { handleResetGame, isGameStarted } = useGameState();

  return (
    <Button
      data-testid="reset-game-button"
      onClick={handleResetGame}
      isDisabled={!isGameStarted}
      background="blue1"
      p="0.5rem 1rem"
      mt="1rem"
      rounded={8}
      transition="all 200ms ease"
      _hover={{
        background: "blue2",
      }}
      textColor="white"
      fontSize="1.5rem"
    >
      Reset the game
    </Button>
  );
};

export { GameControls };
