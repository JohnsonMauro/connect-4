import { FC } from "react";

import { Box, Circle, Heading } from "@chakra-ui/react";
import { FaGrinSquint } from "react-icons/fa";

import { useGameState, usePlayersSettings } from "hooks";

const GameProgress: FC = () => {
  const { currentPlayer, isGameOver } = useGameState();
  const { firstPlayer, secondPlayer } = usePlayersSettings();

  const playerDetails = currentPlayer === 1 ? firstPlayer : secondPlayer;

  return (

    <Box display="flex" flexDirection="column" alignItems="center">
      <Heading
        as="h3"
        fontSize="1.6rem"
        color="black"
        display="flex"
        gap="0.5ch"
      >
        {`${playerDetails.name}${isGameOver ? ' wins!' : `'s turn`}`}
      </Heading>

      <Circle
        marginTop="1rem"
        size="8rem"
        boxShadow="base"
        bg={playerDetails.color}
      >
        {isGameOver && (
          <Circle bg="background" size="7.2rem">
            <FaGrinSquint size="4em" color="#17ABE2" />
          </Circle>
        )}
      </Circle>
    </Box>
  );
};

export { GameProgress };
