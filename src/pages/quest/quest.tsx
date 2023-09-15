import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { TDetailedQuest } from '../../types/types';

type QuestProps ={
  detailedQuests: TDetailedQuest[];
}

function Quest({detailedQuests}: QuestProps): JSX.Element {
  const { id } = useParams();
  const detailedQuest = detailedQuests.find((quest) => quest.id === id);
  console.log('detailedQuest', detailedQuest);
  if(!detailedQuest){
    return (
      <Navigate to='/Page404'></Navigate>
    );
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape-room. Quest page</title>
      </Helmet>
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={detailedQuest.coverImgWebp}
            />
            <img
              src={detailedQuest.coverImg}
              srcSet={detailedQuest.coverImgWebp}
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {detailedQuest.title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>{detailedQuest.type}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {detailedQuest.peopleMinMax[0]}-{detailedQuest.peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {detailedQuest.level}
              </li>
            </ul>
            <p className="quest-page__description">
              {detailedQuest.description}
            </p>
            <a
              className="btn btn--accent btn--cta quest-page__btn"
              href="booking.html"
            >
              Забронировать
            </a>
          </div>
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

export default Quest;
