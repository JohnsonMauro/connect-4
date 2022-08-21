import { useRecoilState } from "recoil";

import { PlayersSettingsState } from "state";
import { IHandleChangeSettingsProps } from "./types";

const usePlayersSettings = () => {
  const [settings, setSettings] = useRecoilState(PlayersSettingsState);

  const { firstPlayer, secondPlayer } = settings;

  const handleChangeSettings = ({ player, newSettings }: IHandleChangeSettingsProps) => {
    setSettings((oldState) => ({ ...oldState, [player]: newSettings }));
  };

  return {
    firstPlayer,
    secondPlayer,
    handleChangeSettings,
  };
};

export { usePlayersSettings };
