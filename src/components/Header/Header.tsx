import { useState } from "react";

import { Box, Button, Container, Image, Text, Popover, PopoverTrigger, PopoverContent, useDisclosure, Portal } from "@chakra-ui/react";
import { BsGearFill } from "react-icons/bs";

import { useGameState } from "hooks";
import { SettingsPanel } from "./SettingsPanel";

const containerStyles = {
  background: "blue1",
  maxW: "100vw",
  w: "100vw",
  display: "flex",
  alignItems: "center",
  h: "80px",
  padding: "1rem 2rem",
  color: "white",
  fontFamily: "Carter one",
  fontSize: "2rem",
};

const settingsButtonStyles = {
  color: "white",
  transition: "color 200ms ease",
  _hover: {
    button: {
      color: "background",
    },
  },
};

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [resetMatchOnClose, setResetMatchOnClose] = useState(false);

  const { handleResetGame } = useGameState();

  const handleClose = () => {
    if (resetMatchOnClose) {
      handleResetGame();
      setResetMatchOnClose(false);
    }
  };

  return (
    <Container {...containerStyles}>
      <Image src="/images/tickxLogo.png" w="150" h="80%" />

      <Text m="auto">Connect4</Text>

      <Popover
        isOpen={isOpen}
        onClose={() => {
          onClose();
          handleClose();
        }}
      >
        <PopoverTrigger>
          <Button
            data-testid="settings-button"
            {...settingsButtonStyles}
          >
            <BsGearFill onClick={onToggle} />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent zIndex="popover">
            <SettingsPanel
              togglePanel={() => {
                handleClose();
                onToggle();
              }}
              onSettingsChange={({ hasNameChanges }) => {
                if (hasNameChanges) setResetMatchOnClose(true);
              }}
            />
          </PopoverContent>
        </Portal>
      </Popover>
    </Container>
  );
};

export { Header };
