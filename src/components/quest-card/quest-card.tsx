import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TQuest } from '../../types/types';
import { AppRoute } from '../../const';

type QuestCardProps = {
  quest: TQuest;
}

function QuestCard({quest}: QuestCardProps): JSX.Element {
  const {id, title, previewImg, previewImgWebp, level, type, peopleMinMax} = quest;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
      className="quest-card" key={id}
    >
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={previewImgWebp}
          />
          <img
            src={previewImg}
            srcSet={previewImg}
            width={344}
            height={232}
            alt="Мужчина в клетке в подземелье."
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link to={`${AppRoute.Quest}/${quest.id}`} className="quest-card__link" >
            {title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {peopleMinMax[0]}-{peopleMinMax[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {level}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestCard;
