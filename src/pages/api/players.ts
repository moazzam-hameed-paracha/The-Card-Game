import type { NextApiRequest, NextApiResponse } from "next";

export type StudentResponseData = {
  playerList: Array<{
    realName: string;
    playerName: string;
    asset: string;
  }>;
};

export type StudentRequestData = {
  selectedPlayer: StudentResponseData["playerList"][number];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StudentResponseData | { message: string }>
) {
  if (req.method === "GET") {
    const playerList: StudentResponseData["playerList"] = [
      {
        realName: "Brianna Forbes",
        playerName: "Dreamlurk The Unstoppable",
        asset: "Foghammer Lead",
      },
      {
        realName: "Darcy Candice Ball",
        playerName: "Crystaldash",
        asset: "Secret Glowquake Gold",
      },
      {
        realName: "Hillary Gibbs",
        playerName: "Speedsoul",
        asset: "Shifting Rainshadow Iron",
      },
      {
        realName: "Elva Becky Hammond",
        playerName: "Seekvenom The Mystic",
        asset: "Valkyries' Opal Adamant",
      },
      {
        realName: "Enid Rose",
        playerName: "Coincurse The Ghoul",
        asset: "Jewelevil Bronze Of Goddesses",
      },
      {
        realName: "Esmeralda Carrillo",
        playerName: "Skulldart",
        asset: "Yellow Orichalcum Of Paladins",
      },
    ];

    res.status(200).json({ playerList });
  } else if (req.method === "POST") {
    const { selectedPlayer } = req.body as StudentRequestData;

    res
      .status(200)
      .json({ message: `${selectedPlayer.realName} posted successfully!` });
  }
}
