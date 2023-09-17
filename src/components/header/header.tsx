import Logo from '../logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUser, getAuthorizationStatus } from '../../store/user-data/user-data.selectors';
import { logoutAction } from '../../store/api-actions';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

function Header(): JSX.Element {

  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const isAuthorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo />
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="link active" to={AppRoute.Main}>
                Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to={AppRoute.Contacts}>
                Контакты
              </Link>
            </li>
            {isAuthorizationStatus === AuthorizationStatus.Auth &&
            <li className="main-nav__item">
              <Link className="link" to={AppRoute.MyQuests}>
                Мои бронирования
              </Link>
            </li>}
          </ul>
        </nav>
        <div className="header__side-nav">
          {isAuthorizationStatus === AuthorizationStatus.Auth
            ?
            <Link className="btn btn--accent header__side-item" to="#"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
            >
              Выйти
            </Link>
            :
            <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>
              Вход
            </Link>}

          <Link
            className="link header__side-item header__phone-link"
            to="tel:88003335599"
          >
            8 (000) 111-11-11
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
