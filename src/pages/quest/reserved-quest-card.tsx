
import { ReservedQuest } from '../../types/types';
import { useAppDispatch } from '../../hooks';
import { deleteReservedQuest } from '../../store/api-actions';

type ReservedQuestProps = {
  reservedQuest: ReservedQuest;
  handleReservedCardHover: (id: string | null) => void;
}

function ReservedQuestCard({reservedQuest, handleReservedCardHover}: ReservedQuestProps): JSX.Element {

  const { date, time, quest } = reservedQuest;
  const dispatch = useAppDispatch();

  const handleCardMouseEnter = () => {
    handleReservedCardHover(quest.id);
  };
  const handleCardMouseLeave = () => {
    handleReservedCardHover(null);
  };

  const handleResetButtonClick = () => {
    dispatch(deleteReservedQuest(quest.id));
  };

  return (
    <div className="quest-card"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={quest.previewImgWebp}
          />
          <img
            src={quest.previewImg}
            srcSet={quest.previewImg}
            width={344}
            height={232}
            alt="Мужчина в маске в тёмном переходе."
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <a className="quest-card__link" href="quest.html">
            {reservedQuest.quest.title}
          </a>
          <span className="quest-card__info">
            {date},&nbsp;{time}. {reservedQuest.location.address}
          </span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {reservedQuest.peopleCount}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {reservedQuest.quest.level}
          </li>
        </ul>
        <button
          className="btn btn--accent btn--secondary quest-card__btn"
          type="button"
          onClick={handleResetButtonClick()}
        >
          Отменить
        </button>
      </div>
    </div>
  );
}

export default ReservedQuestCard;
