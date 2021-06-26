import './App.css';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const App: FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.language === 'ru'
      ? i18n.changeLanguage('en')
      : i18n.changeLanguage('ru');
  };
  return (
    <div>
      <h1>{t('template')}</h1>
      <button onClick={changeLanguage}>{t('change_language')}</button>
    </div>
  );
};
export default App;
