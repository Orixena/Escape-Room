import QuestCard from '../quest-card/quest-card';
import { TQuest } from '../../types/types';

type QuestsListProps = {
  quests: TQuest[];
}
function QuestList({quests}: QuestsListProps): JSX.Element{
  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <QuestCard
          key={quest.id}
          quest={quest}
        />
      ))}
    </div>
  );
}

export default QuestList;
