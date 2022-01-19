import React from 'react';
import { Header } from '../../components/Header';
import { MainPage } from '../../components/MainPage';
import './app.css';
import './normalize.css';

export const App = ( ) => {
  return (
    <div className=''>
      <Header></Header>
      <MainPage></MainPage>
    </div>
  );
}

