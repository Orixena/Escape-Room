import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Main from '../../pages/main/main';
import Booking from '../../pages/booking/booking';
import Contacts from '../../pages/contacts/contacts';
import Login from '../../pages/login/login';
import MyQuests from '../../pages/my-quests/my-quests';
import Quest from '../../pages/quest/quest';
import Page404 from '../../pages/page404/page404';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { TQuest, TDetailedQuest } from '../../types';

type AppProps = {
  quests: TQuest[];
  detailedQuests: TDetailedQuest[];
}

function App({quests, detailedQuests}: AppProps): JSX.Element{
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Main quests={quests}/>}/>
          <Route path={AppRoute.Login} element={<Login />}/>
          <Route path={AppRoute.Contacts} element={<Contacts />}/>
          <Route path={AppRoute.Quest}>
            <Route path=':id' element={<Quest detailedQuests={detailedQuests}/>}/>
            <Route path=':id/booking' element={<Booking />} />
          </Route>
          <Route path={AppRoute.MyQuests}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <MyQuests />
              </PrivateRoute>
            }
          />
          <Route path='not-found' element={<Page404 />}/>
          <Route path='*' element={<Page404 />}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
