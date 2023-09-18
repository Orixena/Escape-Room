import { questTypesNames } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeQuestType } from '../../store/quests-data/quests-data-slice';

type FilterTypeListProps ={
  questActiveType: string;
}

function FilterTypeList({questActiveType}: FilterTypeListProps): JSX.Element {

  const dispatch = useAppDispatch();
  console.log('questType: ',questActiveType);


  return (
    <ul className="filter__list">
      {Object.entries(questTypesNames).map(([key,value]) => (
        <li className="filter__item" key={key}>
          <input type="radio" name="type" id={key}
            onChange={(evt) => {
              evt.preventDefault();
              dispatch(changeQuestType(key));
            }}
          />
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

export default FilterTypeList;
