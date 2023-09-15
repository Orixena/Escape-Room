export type TQuest ={
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax:number[];
};

export type TDetailedQuest = {
  description: string;
  coverImg: string;
  coverImgWebp: string;
} & TQuest;

export type UserData = {
  email: string;
  token: string;
}

export type AuthData = {
  email: string;
  password: string;
}
