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
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { AppRoute, RequestStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-data/user-data.selectors';
import { getFetchingStatusQuests } from '../../store/quests-data/quests-data.selectors';

function App(): JSX.Element{

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getFetchingStatusQuests);

  if(isOffersDataLoading === RequestStatus.Pending) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<Main />}/>
          <Route path={AppRoute.Login} element={<Login />}/>
          <Route path={AppRoute.Contacts} element={<Contacts />}/>
          <Route path={AppRoute.Quest}>
            <Route path=':id' element={<Quest />}/>
          </Route>
          <Route path={`${AppRoute.Quest}/:id/booking`}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <Booking />
              </PrivateRoute>
            }
          />
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
