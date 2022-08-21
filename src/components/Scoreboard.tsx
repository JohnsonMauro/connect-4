import {
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

import { usePlayersSettings, useScoreboard } from "hooks";

const containerStyles = {
  background: "blue1",
  display: "flex",
  alignItems: "center",
  textColor: "white",
  padding: "1rem",
  rounded: 8,
  minWidth: "200px",
  maxWidth: "300px",
  width: "100%",
};

const Scoreboard = () => {
  const { firstPlayerScore, secondPlayerScore } = useScoreboard();
  const { firstPlayer, secondPlayer } = usePlayersSettings();

  return (
    <Box {...containerStyles} m="auto" flexDir="column">
      <Heading as="h4" fontSize="2rem" fontWeight={600}>
        Scoreboard
      </Heading>

      <Box
        display="flex"
        justifyContent="space-between"
        fontSize="1.35rem"
        marginTop="1rem"
        w="100%"
      >
        <Text data-testid="scoreboard-player-one-name" fontWeight={600}>
          {firstPlayer.name}
        </Text>
        <Text data-testid="scoreboard-player-one-wins">{firstPlayerScore}</Text>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        fontSize="1.35rem"
        w="100%"
      >
        <Text data-testid="scoreboard-player-two-name" fontWeight={600}>
          {secondPlayer.name}
        </Text>
        <Text data-testid="scoreboard-player-two-wins">{secondPlayerScore}</Text>
      </Box>
    </Box>
  );
};

export { Scoreboard };
