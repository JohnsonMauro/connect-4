import { useState, useEffect } from "react";

import { Box, Button, Fade, Text } from "@chakra-ui/react";

import { usePlayersSettings } from "hooks";
import { PlayerSettings } from "./PlayerSettings";

const containerStyles = {
  background: "blue1",

  minWidth: "500px",

  padding: "2rem",

  borderRadius: "0.4rem",

  display: "flex",
  alignItems: "center",

  fontFamily: "Poppins",
};

interface ISettingsPanelProps {
  togglePanel: () => void;
  onSettingsChange: ({ hasNameChanges }: { hasNameChanges: boolean }) => any;
}

const SettingsPanel = ({ togglePanel, onSettingsChange, }: ISettingsPanelProps) => {
  const [playersNames, setPlayersNames] = useState({
    firstPlayerName: "",
    secondPlayerName: "",
  });

  const { firstPlayer, secondPlayer } = usePlayersSettings();

  useEffect(() =>
    setPlayersNames({ firstPlayerName: firstPlayer.name, secondPlayerName: secondPlayer.name })
  );

  function hasNameChanges() {
    return firstPlayer.name !== playersNames.firstPlayerName || secondPlayer.name !== playersNames.secondPlayerName
  };

  return (
    <Fade in>
      <Box
        {...containerStyles}
        flexDirection="column"
        gap="1rem"
        data-testid="settings-panel"
      >
        <Text fontWeight="600" color="white">Settings</Text>

        <PlayerSettings
          label="First player:"
          placeHolder="first player name"
          playerKey="firstPlayer"
          onChange={() =>
            onSettingsChange({ hasNameChanges: hasNameChanges() })
          }
        />
        <PlayerSettings
          label="Second player:"
          placeHolder="second player name"
          playerKey="secondPlayer"
          onChange={() =>
            onSettingsChange({ hasNameChanges: hasNameChanges() })
          }
        />

        <Text as="label" fontSize="1.2rem" color="white">
          Any changes will reset the current match.
        </Text>

        <Button
          background="white"
          data-testid="save-settings-button"
          py={5}
          px={20}
          rounded={8}
          textColor="text"
          w="100%"
          transition="all 200ms ease"
          _hover={{ background: "gray" }}
          onClick={() => {
            togglePanel();
          }}
        >
          Save
        </Button>
      </Box>
    </Fade>
  );
};

export { SettingsPanel };
