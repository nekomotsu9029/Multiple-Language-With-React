import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './settings/reportWebVitals';

import AppCrud from './views/appCrud'

ReactDOM.render(
  <React.StrictMode>
    <AppCrud />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
