import { useAppDispatch } from '../../hooks';
import { setFormDate, setFormTime } from '../../store/quest-data/quest-data.slice';
import { BookingQuest } from '../../types/types';

type TodayQuestTimeProps = {
  bookingQuestInfo: BookingQuest;
  isSubmitting: boolean;
}

function TodayQuestTime({bookingQuestInfo, isSubmitting}: TodayQuestTimeProps): JSX.Element {

  const dispatch = useAppDispatch();
  const todayHours = bookingQuestInfo.slots.today;

  const handleSetFormDateTime = (data: string) => {
    dispatch(setFormTime(data));
    dispatch(setFormDate('today'));
  };


  return (
    <div className="booking-form__date-inner-wrapper">
      {todayHours.map(({time, isAvailable}) => (
        <label className="custom-radio booking-form__date" key={time}>
          <input
            type="radio"
            id="today9h45m"
            name="date"
            required
            defaultValue="today9h45m"
            disabled={!isAvailable || isSubmitting}
            onChange={() => handleSetFormDateTime(time)}
          />
          <span className="custom-radio__label">{time}</span>
        </label>
      ))}
    </div>
  );
}

export default TodayQuestTime;
