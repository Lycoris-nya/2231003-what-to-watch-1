import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store';
import {fetchFilmsAction, checkAuthAction} from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App comments={[]}/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
