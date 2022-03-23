//New farm data struct
export type TGFarm = {
  id: string;
  imageUrl: string;
  name: string;
  totalStaked: string;
  allocation: string;
  totalStakedByUser: string;
  eventStartDate: string;
  eventDuration: string;
  updateAuthority: string;
  rewardTokenName: string;
  farmAddress: string;
  bankAddress: string;
};

/// Dino Kingz Farm
// Dino bank = Dnijy2vbPZNvSyLm1de2vjCxsEwGjJHXoqub1dRPArJt
// Dino farm = EprGa9AxU7PW113kctorXY9kkJDmdooPHnNSRHB4eg7f
// update Auth = 9SFXr5PR12TXr8zVq9yajUSQtwQN21X7js52gta5ntyc
///Baby Dino Kingz Farm
// BDK farm = GA3FqVoGY1mL6JeTVm27i4cHoD9Ma6gusCcT8ndjff6y
// BDK bank = DxQbbroZDeTMp8be6qiRVVb7cBfPMebxjYRGbM5E6mT6
// update auth = e6JhrUkGTm1ts7F1LVAFmZ6s2Mnzjg6W4TYSgZRvRwN
///

export const newFarmCollections: TGFarm[] = [
  {
    id: "HNYVT",
    imageUrl:
      "https://i.imgflip.com/65u2do.gif",
    name: "Honey Genesis Bee v3",
    totalStaked: "???",
    allocation: "1",
    totalStakedByUser: "-",
    eventStartDate: "2022/3/11/18/50",
    eventDuration: "15",
    updateAuthority: "B2a66dokeqxGJoUqmtaRNn6JeQJZjatNL5ykZduLjFXY",
    rewardTokenName: "pHONEY",
    farmAddress: "7S4C6uABB5gxBxR9UGWq27qLPzFPs9hbzmWrfeaPRrcC",
    bankAddress: "B33Cvmgug1jgDmnkxRriTXVamZmnAqmui82aJt2t2VQc",
  },
  {
    id: "dinoK",
    imageUrl:
      "https://dl.airtable.com/.attachmentThumbnails/ab654b7db8bc5f861fe01e63d7defa5b/52855ea1",
    name: "Dino Kingz",
    totalStaked: "???",
    allocation: "50",
    totalStakedByUser: "-",
    eventStartDate: "2022/3/4/14/50",
    eventDuration: "30",
    updateAuthority: "9SFXr5PR12TXr8zVq9yajUSQtwQN21X7js52gta5ntyc",
    rewardTokenName: "DINO",
    farmAddress: "EprGa9AxU7PW113kctorXY9kkJDmdooPHnNSRHB4eg7f",
    bankAddress: "Dnijy2vbPZNvSyLm1de2vjCxsEwGjJHXoqub1dRPArJt",
  },
  {
    id: "BDK",
    imageUrl: "https://4njm3yz2f6j34gsagmsdoteegnfbqc5sxinqqot5rngvdw2e.arweave.net/41LN4z--ovk74aQDMkN0yEM0oYC7K6Gwg6fYtNUd-tE",
    name: "Baby Dino Kingz",
    totalStaked: "???",
    allocation: "5",
    totalStakedByUser: "-",
    eventStartDate: "2022/3/4/14/50",
    eventDuration: "30",
    updateAuthority: "e6JhrUkGTm1ts7F1LVAFmZ6s2Mnzjg6W4TYSgZRvRwN",
    rewardTokenName: "ZION",
    farmAddress: "GA3FqVoGY1mL6JeTVm27i4cHoD9Ma6gusCcT8ndjff6y",
    bankAddress: "DxQbbroZDeTMp8be6qiRVVb7cBfPMebxjYRGbM5E6mT6",
  },
  {
    id: "ATAD",
    imageUrl: "https://419390487-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FPvfBeReHNYKceCE1VoLw%2Fuploads%2FFh3bfPzf4oxSoo3qcXkv%2FAtadia_Twitter_Banner_Light.jpeg?alt=media&token=5ae8a8ad-d562-4e05-ade9-386ff23a7e1c",
    name: "Atadians",
    totalStaked: "???",
    allocation: "5",
    totalStakedByUser: "-",
    eventStartDate: "2022/3/4/14/50",
    eventDuration: "30",
    updateAuthority: "7FZDdgbyUv1gWQ89uV4NpnfpRBgr4S7zhKLC1BKdttZP",
    rewardTokenName: "ATA",
    farmAddress: "3yR4hroSjQqvCePRry2yJMPynLTfhK252yuCZBTk3Hvr",
    bankAddress: "ASdASL2X3jwGvLrgjyBZXVuwesSoNvtvts3S8s4Jmtcc",
  }
];
