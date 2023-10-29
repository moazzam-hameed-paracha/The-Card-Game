import { StudentResponseData } from "@src/pages/api/players";
import React from "react";
import styles from "./styles.module.scss";

type DetailedOverviewProps = {
  selectedPlayer?: StudentResponseData["playerList"][0];
};

const DetailedOverview = ({ selectedPlayer }: DetailedOverviewProps) => {
  return (
    <div className={styles.container}>
      <h4 className="card-title mb-2">Details</h4>
      <hr />
      <div className="card-text">
        <div>
          Real Name: <b>{selectedPlayer?.realName}</b>
        </div>
      </div>
      <div className="card-text">
        <div>
          Player Name: <b>{selectedPlayer?.playerName}</b>
        </div>
      </div>
      <div className="card-text">
        <div>
          Asset: <b>{selectedPlayer?.asset}</b>
        </div>
      </div>
    </div>
  );
};

export default DetailedOverview;
