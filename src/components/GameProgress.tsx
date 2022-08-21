import { FC } from "react";

import { Box, Circle, Heading } from "@chakra-ui/react";
import { FaGrinSquint } from "react-icons/fa";

import { useGameState, usePlayersSettings } from "hooks";

const GameProgress: FC = () => {
  const { currentPlayer, isGameOver } = useGameState();
  const { firstPlayer, secondPlayer } = usePlayersSettings();

  const playerDetails = currentPlayer === 1 ? firstPlayer : secondPlayer;

  return (

    <Box display="flex" flexDirection="column" alignItems="center" w="250px">
      <Heading
        as="h3"
        fontSize="1.1rem"
        fontWeight="bold"
        color="black"
        display="flex"
      >
        {`${playerDetails.name}${isGameOver ? ' wins!' : `'s turn`}`}
      </Heading>

      <Circle
        marginTop="1rem"
        size="6rem"
        boxShadow="base"
        bg={playerDetails.color}
      >
        {isGameOver && (
          <Circle bg="background" size="6rem">
            <FaGrinSquint size="3.7em" color="#17ABE2" />
          </Circle>
        )}
      </Circle>
    </Box>
  );
};

export { GameProgress };
