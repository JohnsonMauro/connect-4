import { Box, Input, Text } from "@chakra-ui/react";

import { usePlayersSettings } from "hooks";
import { PlayersKeysType } from "state/types";

interface IPlayerSettingsProps {
  label: string;
  placeHolder: string;
  playerKey: PlayersKeysType;
  onChange?: () => any;
}

const PlayerSettings = ({ label, placeHolder, playerKey, onChange = () => { } }: IPlayerSettingsProps) => {
  const { handleChangeSettings, ...settingsState } = usePlayersSettings();

  const currentSettings = settingsState[playerKey];

  return (
    <Box w="100%" display="flex" flexDirection="column">
      <Text fontSize="1.5rem" fontWeight="600" mb="0.4rem" color="white">
        {label}
      </Text>
      <Box display="flex" gap="1rem">
        <Box display="flex" flexDirection="column" w="80%">
          <Input
            data-testid={`${playerKey}-name-input`}
            placeholder={placeHolder}
            fontSize="1.25rem"
            padding="0.5rem"
            flex={1}
            rounded="0.2rem"
            color="text"
            fontWeight="300"
            value={currentSettings.name}
            maxLength={14}
            onChange={(e) => {
              onChange();
              handleChangeSettings({
                player: playerKey,
                newSettings: {
                  ...currentSettings,
                  name: e.target.value,
                },
              });
            }}
          />
        </Box>
        <Box display="flex" flex={1} flexDir="column">

          <Box w="100%" flex={1}>
            <Input
              type="color"
              value={currentSettings.color}
              transition="filter 200ms ease"
              _hover={{
                filter: "brightness(0.8)",
              }}
              cursor="pointer"
              rounded="0.2rem"
              border="1px solid white"
              color="transparent"
              h="100%"
              w="100%"
              onChange={(e) => {
                handleChangeSettings({
                  player: playerKey,
                  newSettings: {
                    ...currentSettings,
                    color: e.target.value,
                  },
                });
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { PlayerSettings };
