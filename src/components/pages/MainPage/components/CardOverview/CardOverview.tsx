import { StudentResponseData } from "@src/pages/api/players";
import React from "react";
import styles from "./styles.module.scss";
import { Card } from "../Card";

type CardOverviewProps = {
  playersList: StudentResponseData["playerList"];
  setSelectedPlayer: React.Dispatch<
    React.SetStateAction<
      | {
          realName: string;
          playerName: string;
          asset: string;
        }
      | undefined
    >
  >;
};

const CardOverview = ({
  playersList,
  setSelectedPlayer,
}: CardOverviewProps) => {
  return (
    <>
      <h3 className={styles.heading}>Overview</h3>
      <div className={styles.container}>
        {playersList.map((player, idx) => (
          <div key={player.realName} onClick={() => setSelectedPlayer(player)}>
            <Card idx={idx} player={player} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardOverview;
