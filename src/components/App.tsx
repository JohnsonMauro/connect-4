import { FC } from "react";

import { RecoilRoot } from "recoil";

import { Flex, ChakraProvider, Box, Container, VStack } from "@chakra-ui/react";

import { GameProgress, Header, Scoreboard } from "components";
import { Board, GameControls } from "components";

import { mainTheme } from "styles/themes"

const App: FC = () => (
  <ChakraProvider theme={mainTheme}>
    <RecoilRoot>
      <Container
        w="100vw"
        maxW="100vw"
        h="100vh"
        maxH="100vh"
        p={0}
        as={VStack}
        background="background"
        fontFamily="Poppins, sans-serif"
      >
        <Header />

        <Flex
          direction={{ base: "row", md: "column" }}
          w="100%"
          maxW="1920px"
          alignItems="center"
          p="2rem"
        >
          <Box m="auto" display="flex">
            <Board />
          </Box>

          <Box m="auto" display="flex" flexDirection="column" gap="2rem" w="30%">
            <Scoreboard />
            <Box display="flex" justifyContent="center">
              <GameControls />
            </Box>
            <GameProgress />
          </Box>

        </Flex>
      </Container>
    </RecoilRoot>
  </ChakraProvider>
);

export { App };
