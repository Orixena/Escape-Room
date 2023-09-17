export enum AppRoute {
  Main = '/',
  Login = '/login',
  Quest = '/quest',
  Contacts = '/contacts',
  MyQuests = '/my-quests',
  Booking = '/booking',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const questTypes = {
  'all-quests': 'Все квесты',
  'adventure': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
};

export const questDifficulty = {
  'any': 'любой',
  'easy': 'простой',
  'middle': 'средний',
  'hard': 'сложный'
};

export enum ApiRoute {
  GetQuests = '/quest',
  GetDetailedQuest = '/quest',
  Login = '/login',
  Logout = '/logout',
  Booking = '/quest/{questId}/booking',
  MyQuests = '/reservation',
}

export const enum FetchingNameSpace {
  Quests = 'QUESTS',
  Quest = 'QUEST',
  Reservation = 'RESERVATION',
  User = 'USER'
}

export const enum RequestStatus {
  Unsent = 'UNSENT',
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Error = 'ERROR'
}
