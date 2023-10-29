import { StudentResponseData } from "@src/pages/api/players";
import React, { useCallback } from "react";
import { ActionsContainer, CardOverview, DetailedOverview } from "./components";
import styles from "./styles.module.scss";

const MainPage = () => {
  const [selectedPlayer, setSelectedPlayer] =
    React.useState<StudentResponseData["playerList"][0]>();

  const [players, setPlayers] = React.useState<
    StudentResponseData["playerList"]
  >([]);

  const getPlayers = useCallback(async () => {
    const data = (await (
      await fetch("api/players")
    ).json()) as StudentResponseData;

    return data.playerList;
  }, []);

  React.useEffect(() => {
    getPlayers().then((playersList) => setPlayers(playersList));
  }, [getPlayers]);

  return (
    <div className={styles.container}>
      <div className={styles["row-1"]}>
        <DetailedOverview selectedPlayer={selectedPlayer} />
        <ActionsContainer
          setPlayers={setPlayers}
          selectedPlayer={selectedPlayer}
        />
      </div>
      <div className={styles["row-2"]}>
        <CardOverview
          playersList={players}
          setSelectedPlayer={setSelectedPlayer}
        />
      </div>
    </div>
  );
};

export default MainPage;
