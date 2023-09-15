import { questTypes } from '../../const';

function FilterList(): JSX.Element {
  return (
    <ul className="filter__list">
      {Object.entries(questTypes).map(([key,value]) => (
        <li className="filter__item" key={key}>
          <input type="radio" name="type" id={key} defaultChecked />
          <label className="filter__label" htmlFor={key}>
            <svg
              className="filter__icon"
              width={26}
              height={30}
              aria-hidden="true"
            >
              <use xlinkHref={`#icon-${key}`} />
            </svg>
            <span className="filter__label-text">{value}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default FilterList;
