import { questDifficultyNames } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeQuestDifficulty } from '../../store/quests-data/quests-data-slice';

function FilterDifficultyList(): React.JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <ul className="filter__list">
      {Object.entries(questDifficultyNames).map(([key, value]) => (
        <li className="filter__item" key={key}>
          <input type="radio" name="level" id={key}
            onChange={(evt) => {
              evt.preventDefault();
              dispatch(changeQuestDifficulty(key));
            }}
          />
          <label className="filter__label" htmlFor={key}>
            <span className="filter__label-text">{value}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default FilterDifficultyList;
