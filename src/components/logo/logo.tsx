import { Link } from 'react-router-dom';

function Logo(): JSX.Element {
  return (
    <Link to={'/'} className="logo header__logo">
      <svg width={134} height={52} aria-hidden="true">
        <use xlinkHref="#logo" />
      </svg>
    </Link>
  );
}

export default Logo;

