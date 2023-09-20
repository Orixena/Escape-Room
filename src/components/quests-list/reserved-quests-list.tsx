import ReservedQuestCard from '../../pages/quest/reserved-quest-card';
import { ReservedQuest} from '../../types/types';

type ReservedQuestsListProps = {
  quests: ReservedQuest[];
  onListItemHover: (id: string | null) => void;
}
function ReservedQuestList({quests, onListItemHover}: ReservedQuestsListProps): JSX.Element{

  const handleReservedCardHover = (id: string | null) => {
    onListItemHover(id);
  };

  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <ReservedQuestCard
          key={quest.id}
          reservedQuest={quest}
          handleReservedCardHover={handleReservedCardHover}
        />
      ))}
    </div>
  );
}

export default ReservedQuestList;
