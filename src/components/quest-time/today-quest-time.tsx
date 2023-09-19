import { useAppDispatch } from '../../hooks';
import { BookingQuest } from '../../types/types';

type TodayQuestTimeProps = {
  bookingQuestInfo: BookingQuest;
}

function TodayQuestTime({bookingQuestInfo}: TodayQuestTimeProps): JSX.Element {

  const dispatch = useAppDispatch();
  const todayHours = bookingQuestInfo.slots.today;

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
            disabled={!isAvailable}
          />
          <span className="custom-radio__label">{time}</span>
        </label>
      ))}
    </div>
  );
}

export default TodayQuestTime;
