import { questDifficulty } from '../../const';

function FilterDifficultyList(): React.JSX.Element {
  return (
    <ul className="filter__list">
      {Object.entries(questDifficulty).map(([key, value]) => (
        <li className="filter__item" key={key}>
          <input type="radio" name="level" id={key} defaultChecked />
          <label className="filter__label" htmlFor={key}>
            <span className="filter__label-text">{value}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default FilterDifficultyList;
