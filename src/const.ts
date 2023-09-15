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
