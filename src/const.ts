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

export const questTypesNames = {
  'all': 'Все квесты',
  'adventure': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
};

export const enum QuestTypes {
  all = 'all',
  adventure = 'adventure',
  horror = 'horror',
  mystic = 'mystic',
  detective = 'detective',
  sciFi = 'sci-fi',
}

export const questDifficultyNames = {
  'any': 'любой',
  'easy': 'простой',
  'medium': 'средний',
  'hard': 'сложный'
};

export const enum QuestDifficulty {
  any = 'any',
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}

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
