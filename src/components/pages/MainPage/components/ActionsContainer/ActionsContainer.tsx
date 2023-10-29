import { StudentResponseData } from "@src/pages/api/players";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./styles.module.scss";

type ActionsContainerProps = {
  setPlayers: React.Dispatch<
    React.SetStateAction<
      {
        realName: string;
        playerName: string;
        asset: string;
      }[]
    >
  >;
  selectedPlayer?: StudentResponseData["playerList"][0];
};

const ActionsContainer = ({
  setPlayers,
  selectedPlayer,
}: ActionsContainerProps) => {
  const handleSortAsc = () => {
    setPlayers((prev) =>
      [...prev].sort((a, b) => a.realName.localeCompare(b.realName))
    );
  };

  const handleSortDesc = () => {
    setPlayers((prev) =>
      [...prev].sort((a, b) => b.realName.localeCompare(a.realName))
    );
  };

  const handleSubmit = () => {
    if (!selectedPlayer) {
      alert("Please select a player first!");
      return;
    }

    fetch("/api/players", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ selectedPlayer }),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message));
  };

  return (
    <div className={styles.container}>
      <h4 className="card-title mb-2">Controls</h4>
      <hr />
      <div className="d-flex gap-3 mb-5">
        <Button
          className="w-100 bg-transparent border-white w-50"
          onClick={handleSortAsc}
        >
          SORT ASC
        </Button>
        <Button
          className="w-100 bg-transparent border-white w-50"
          onClick={handleSortDesc}
        >
          SORT DESC
        </Button>
      </div>
      <Button
        className="w-100 bg-transparent border-white"
        onClick={handleSubmit}
      >
        SUBMIT
      </Button>
    </div>
  );
};

export default ActionsContainer;
