import React from 'react';
import { Header } from '../components/Header';
import { MainPage } from '../components/Routes';
import { theme } from './theme';
import './app.css';
import './normalize.css';

export const App = ( ) => {
  console.log(theme)
  return (
    <div>
      <Header></Header>
      <MainPage/>
    </div>
  );
}

