import { StudentResponseData } from "@src/pages/api/players";
import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

type CardProps = {
  idx: number;
  player: StudentResponseData["playerList"][0];
};

const Card = ({ player, idx }: CardProps) => {
  return (
    <div className={clsx(styles.container)} style={{
      animationDuration: `${idx * 0.4}s`,
    }}>
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
