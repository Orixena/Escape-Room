import QuestCard from '../quest-card/quest-card';

function QuestList(): JSX.Element{
  return (
    <div className="cards-grid">
      <QuestCard />
      <QuestCard />
      <QuestCard />
      <QuestCard />
      <QuestCard />
    </div>
  );
}

export default QuestList;
