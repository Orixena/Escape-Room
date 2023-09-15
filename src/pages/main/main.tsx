import { Helmet } from 'react-helmet-async';
import QuestList from '../../components/quests-list/quest-list';
import Header from '../../components/header/header';
import FilterList from '../../components/filter-list/filter-list';
import { TQuest } from '../../types/types';

type MainProps = {
  quests: TQuest[];
}

function Main({quests}: MainProps): JSX.Element{
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
                <FilterList />
              </fieldset>
              <fieldset className="filter__section">
                <legend className="visually-hidden">Сложность</legend>
                <ul className="filter__list">
                  <li className="filter__item">
                    <input type="radio" name="level" id="any" defaultChecked />
                    <label className="filter__label" htmlFor="any">
                      <span className="filter__label-text">Любой</span>
                    </label>
                  </li>
                  <li className="filter__item">
                    <input type="radio" name="level" id="easy" />
                    <label className="filter__label" htmlFor="easy">
                      <span className="filter__label-text">Лёгкий</span>
                    </label>
                  </li>
                  <li className="filter__item">
                    <input type="radio" name="level" id="middle" />
                    <label className="filter__label" htmlFor="middle">
                      <span className="filter__label-text">Средний</span>
                    </label>
                  </li>
                  <li className="filter__item">
                    <input type="radio" name="level" id="hard" />
                    <label className="filter__label" htmlFor="hard">
                      <span className="filter__label-text">Сложный</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <QuestList quests={quests}/>
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
