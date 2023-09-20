import { useEffect, FormEvent, useState, ChangeEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import TodayQuestTime from '../../components/quest-time/today-quest-time';
import TomorrowQuestTime from '../../components/quest-time/tomorrow-quest-time';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchBookingAction, fetchReservedQuests, postFormData } from '../../store/api-actions';
import { getQuest, getBookingQuestInfo, getSelectedQuestPlace, getQuestFormTime, getQuestFormDate, getFormSendingStatus } from '../../store/quest-data/quest-data.selectors';
import { setFormPlaceId, setQuestPlaceId, dropFormSendingStatus } from '../../store/quest-data/quest-data.slice';
import { RequestStatus } from '../../const';

function Booking(): JSX.Element{

  const { id } = useParams();

  const dispatch = useAppDispatch();
  const detailedQuest = useAppSelector(getQuest);

  useEffect(() => {
    if (id) {
      dispatch(fetchBookingAction(id));
      dispatch(setQuestPlaceId(id));
      dispatch(setFormPlaceId(id));
    }
  }, [id, dispatch, detailedQuest.id]);

  const bookingQuestInfo = useAppSelector(getBookingQuestInfo);
  const selectedQuestPlace = useAppSelector(getSelectedQuestPlace);

  const [personName, setPersonName] = useState('');
  const [phone, setPhone] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [isWithChildren, setIsWithChildren] = useState(false);
  const formSendingStatus = useAppSelector(getFormSendingStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSetPersonName = (evt: ChangeEvent<HTMLInputElement>) => {
    setPersonName(evt.target.value);
  };

  const handleSetPhone = (evt: ChangeEvent<HTMLInputElement>) => {
    setPhone(evt.target.value);
  };

  const handleSetPeopleCount = (evt: ChangeEvent<HTMLInputElement>) => {
    setPeopleCount(evt.target.value);
  };

  const formDate = useAppSelector(getQuestFormDate);
  const questTime = useAppSelector(getQuestFormTime);
  const postId = detailedQuest.id;


  function handleFormSubmit(evt: FormEvent<HTMLFormElement>){
    evt.preventDefault();
    dispatch(
      postFormData({postData: {date: formDate, time: questTime, contactPerson: personName, phone: phone, withChildren: isWithChildren, peopleCount: Number(peopleCount), placeId: selectedQuestPlace.id}, id: postId})
    );
    dispatch(fetchReservedQuests());
  }

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      switch (formSendingStatus) {
        case RequestStatus.Success:
          setPersonName('');
          setPhone('');
          setPeopleCount('');
          setIsWithChildren(false);
          dispatch(dropFormSendingStatus());
          setIsSubmitting(false);
          break;
        case RequestStatus.Pending:
          setIsSubmitting(true);
          break;
        case RequestStatus.Error:
          setIsSubmitting(false);
          break;
        default:
          setIsSubmitting(false);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [formSendingStatus, dispatch]);

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape-room. Booking</title>
      </Helmet>
      <Header />
      <main className="page-content decorated-page">
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
              height={1959}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">
              Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">
              {detailedQuest.title}
            </p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container">
                  {bookingQuestInfo.length && <Map bookingInfo={bookingQuestInfo}/>}
                </div>
              </div>
              <p className="booking-map__address">
                {selectedQuestPlace?.location.address}
              </p>
            </div>
          </div>
          <form
            className="booking-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
            onSubmit={handleFormSubmit}
          >
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Выбор даты и времени</legend>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Сегодня</legend>
                {bookingQuestInfo.length && <TodayQuestTime bookingQuestInfo={selectedQuestPlace} isSubmitting={isSubmitting}/>}
              </fieldset>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Завтра</legend>
                {bookingQuestInfo.length && <TomorrowQuestTime bookingQuestInfo={selectedQuestPlace} isSubmitting={isSubmitting} />}
              </fieldset>
            </fieldset>
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Контактная информация</legend>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="name">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Имя"
                  required
                  pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
                  disabled={isSubmitting}
                  onChange={handleSetPersonName}
                />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="tel">
                  Контактный телефон
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Телефон"
                  required
                  pattern="[0-9]{10,}"
                  disabled={isSubmitting}
                  onChange={handleSetPhone}
                />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="person">
                  Количество участников
                </label>
                <input
                  type="number"
                  id="person"
                  name="person"
                  placeholder="Количество участников"
                  disabled={isSubmitting}
                  onChange={handleSetPeopleCount}
                  required
                />
              </div>
              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                <input
                  type="checkbox"
                  id="children"
                  name="children"
                  onChange={() => !isWithChildren}
                  checked={isWithChildren}
                  disabled={isSubmitting}
                />
                <span className="custom-checkbox__icon">
                  <svg width={20} height={17} aria-hidden="true">
                    <use xlinkHref="#icon-tick" />
                  </svg>
                </span>
                <span className="custom-checkbox__label">
                  Со&nbsp;мной будут дети
                </span>
              </label>
            </fieldset>
            <button
              className="btn btn--accent btn--cta booking-form__submit"
              type="submit"
            >
              Забронировать
            </button>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
              <input
                type="checkbox"
                id="id-order-agreement"
                name="user-agreement"
                required
                disabled={isSubmitting}
              />
              <span className="custom-checkbox__icon">
                <svg width={20} height={17} aria-hidden="true">
                  <use xlinkHref="#icon-tick" />
                </svg>
              </span>
              <span className="custom-checkbox__label">
                Я&nbsp;согласен с
                <a className="link link--active-silver link--underlined" href="#">
                  правилами обработки персональных данных
                </a>
                &nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>
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

export default Booking;
