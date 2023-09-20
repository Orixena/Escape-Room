import { Helmet } from 'react-helmet-async';
import QuestList from '../../components/quests-list/quest-list';
import Header from '../../components/header/header';
import FilterTypeList from '../../components/filter-list/filter-type-list';
import FilterDifficultyList from '../../components/filter-list/filter-difficulty-list';
import { useAppSelector } from '../../hooks';
import { getQuests, getQuestDifficulty, getQuestType } from '../../store/quests-data/quests-data.selectors';
import { sortingDifficulty, sortingType } from '../../utils';

function Main(): JSX.Element{

  const quests = useAppSelector(getQuests);
  const questActiveType = useAppSelector(getQuestType);
  const questActiveDifficulty = useAppSelector(getQuestDifficulty);

  const sortedQuestsByType = sortingType[questActiveType](quests);
  const sortedQuests = sortingDifficulty[questActiveDifficulty](sortedQuestsByType);


  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape-room. Main page</title>
      </Helmet>
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
              квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
              Выберите тематику
            </h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <fieldset className="filter__section">
                <legend className="visually-hidden">Тематика</legend>
                <FilterTypeList />
              </fieldset>
              <fieldset className="filter__section">
                <legend className="visually-hidden">Сложность</legend>
                <FilterDifficultyList />
              </fieldset>
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <QuestList quests={sortedQuests}/>
        </div>
      </main>
      <footer className="footer">
        <div className="container container--size-l">
          <div className="socials">
            <ul className="socials__list">
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="#"
                  aria-label="Skype"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <svg
                    className="socials__icon socials__icon--default"
                    width={28}
                    height={28}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-skype-default" />
                  </svg>
                  <svg
                    className="socials__icon socials__icon--interactive"
                    width={28}
                    height={28}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-skype-interactive" />
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="#"
                  aria-label="ВКонтакте"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <svg
                    className="socials__icon socials__icon--default"
                    width={28}
                    height={28}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-vk-default" />
                  </svg>
                  <svg
                    className="socials__icon socials__icon--interactive"
                    width={28}
                    height={28}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-vk-interactive" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Main;
