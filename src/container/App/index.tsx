import React from 'react';
import { Header } from '../../components/Header';
import { MainPage } from '../../components/Routes';

import './app.css';
import './normalize.css';

export const App = ( ) => {
  return (
    <div className=''>
      <Header></Header>
      <MainPage/>
    </div>
  );
}

