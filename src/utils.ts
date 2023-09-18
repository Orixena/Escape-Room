import { TQuest } from './types/types';
import { QuestDifficulty, QuestTypes} from './const';

export const sortingDifficulty: Record<string, (quests: TQuest[]) => TQuest[]> = {
  'any': (quests: TQuest[]) => quests.slice(),
  'easy': (quests: TQuest[]) => quests.slice().filter((item: TQuest) => item.level === QuestDifficulty.easy),
  'medium': (quests: TQuest[]) => quests.slice().filter((item: TQuest) => item.level === QuestDifficulty.medium),
  'hard': (quests: TQuest[]) => quests.slice().filter((item: TQuest) => item.level === QuestDifficulty.hard),
};

export const sortingType: Record<string, (quests: TQuest[]) => TQuest[]> = {
  'all': (quests: TQuest[]) => quests.slice(),
  'adventure': (quests: TQuest[]) => quests.slice().filter((item: TQuest) => item.type === QuestTypes.adventure),
  'detective': (quests: TQuest[]) => quests.slice().filter((item: TQuest) => item.type === QuestTypes.detective),
  'horror': (quests: TQuest[]) => quests.slice().filter((item: TQuest) => item.type === QuestTypes.horror),
  'mystic': (quests: TQuest[]) => quests.slice().filter((item: TQuest) => item.type === QuestTypes.mystic),
  'sci-fi': (quests: TQuest[]) => quests.slice().filter((item: TQuest) => item.type === QuestTypes.sciFi),
};
