import { AuthorizationStatus, RequestStatus } from '../const';

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

export type AuthorizedUser = {
  email: string;
  token: string;
}

export type UserData = {
  user: AuthorizedUser | null;
  authorizationStatus: AuthorizationStatus;
  sendingStatusLogin: RequestStatus;
}

export type AuthData = {
  email: string;
  password: string;
}

export type QuestsData = {
  quests: TQuest[];
  fetchingStatusQuests: RequestStatus;
  questTypes: string;
  questDifficulty: string;
}

export type QuestData = {
  quest: TDetailedQuest | null;
  fetchingStatusQuest: RequestStatus;
}
