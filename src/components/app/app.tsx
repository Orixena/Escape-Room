import {Route, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Main from '../../pages/main/main';
import Booking from '../../pages/booking/booking';
import Contacts from '../../pages/contacts/contacts';
import Login from '../../pages/login/login';
import MyQuests from '../../pages/my-quests/my-quests';
import Quest from '../../pages/quest/quest';
import Page404 from '../../pages/page404/page404';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-data/user-data.selectors';

function App(): JSX.Element{

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<Main />}/>
          <Route path={AppRoute.Login} element={<Login />}/>
          <Route path={AppRoute.Contacts} element={<Contacts />}/>
          <Route path={AppRoute.Quest}>
            <Route path=':id' element={<Quest />}/>
            <Route path=':id/booking' element={<Booking />} />
          </Route>
          <Route path={AppRoute.MyQuests}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <MyQuests />
              </PrivateRoute>
            }
          />
          <Route path='not-found' element={<Page404 />}/>
          <Route path='*' element={<Page404 />}/>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
