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
  quest: TDetailedQuest;
  fetchingStatusQuest: RequestStatus;
  bookingInfo: BookingQuest[];
  isBookingInfoLoaded: boolean;
  selectedQuestPlaceId: string;
  selectedQuestPlace: BookingQuest;
}

export type Location = {
  address: string;
  coords: number[];
}

export type QuestTime = {
  time: string;
  isAvailable: boolean;
}

export type Slots = {
  today: QuestTime[];
  tomorrow: QuestTime[];
}

export type BookingQuest = {
  id: string;
  location: Location;
  slots: Slots;
}

export type QuestFormData = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
};

