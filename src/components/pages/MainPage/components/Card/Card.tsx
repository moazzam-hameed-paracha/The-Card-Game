import { StudentResponseData } from "@src/pages/api/players";
import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

type CardProps = {
  player: StudentResponseData["playerList"][0];
};

const Card = ({ player }: CardProps) => {
  return (
    <div className={clsx(styles.container)}>
      <div className={clsx("card-text", styles["overflow-hidden"])}>
        Real Name: <b>{player.realName}</b>
      </div>
      <div className={clsx("card-text", styles["overflow-hidden"])}>
        Player Name: <b>{player.playerName}</b>
      </div>
      <div className={clsx("card-text", styles["overflow-hidden"])}>
        Asset: <b>{player.asset}</b>
      </div>
    </div>
  );
};

export default Card;
