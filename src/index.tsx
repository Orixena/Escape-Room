import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
//import quests from './mocks/quests';
import detailedQuests from './mocks/detailed-quests';
import { store } from './store';
import { fetchQuestsAction } from './store/api-actions';

store.dispatch(fetchQuestsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App detailedQuests={detailedQuests}/>
    </Provider>
  </React.StrictMode>
);
