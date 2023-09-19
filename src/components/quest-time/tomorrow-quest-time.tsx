import { BookingQuest } from '../../types/types';

type TomorrowQuestTimeProps = {
  bookingQuestInfo: BookingQuest[];
}

function TomorrowQuestTime({bookingQuestInfo}: TomorrowQuestTimeProps): JSX.Element {

  const todayHours = bookingQuestInfo[0].slots.tomorrow;

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

export default TomorrowQuestTime;
