import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import ReservedQuestList from '../../components/quests-list/reserved-quests-list';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getReservedQuests } from '../../store/quest-data/quest-data.selectors';
import { useEffect, useState } from 'react';
import { fetchReservedQuests } from '../../store/api-actions';
import { ReservedQuest } from '../../types/types';

function MyQuests(): JSX.Element {

  const reservedQuests = useAppSelector(getReservedQuests);
  const dispatch = useAppDispatch();

  const [selectedPoint, setSelectedPoint] = useState<ReservedQuest | undefined>(
    undefined
  );

  const handleListItemHover = (id: string | null) => {
    const currentPoint = reservedQuests.find((item) => item.quest.id === id);
    setSelectedPoint(currentPoint);
  };

  useEffect(() => {
    dispatch(fetchReservedQuests());
  },[dispatch]);

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape-room. My quests</title>
      </Helmet>
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-bg-size-m.jpg"
              srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
              width={1366}
              height={1959}
              alt=""
            />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">
              Мои бронирования
            </h1>
          </div>
          <ReservedQuestList quests={reservedQuests} onListItemHover={handleListItemHover}/>
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

export default MyQuests;
