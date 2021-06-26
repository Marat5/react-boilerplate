import './styles/styles.css';
import './i18n';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from 'components/organisms/App/App';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
