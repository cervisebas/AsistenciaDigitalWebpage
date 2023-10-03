/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import Icon from './assets/icon.webp';
import './App.scss';

export default React.memo(function App() {
  return(<div id={'principal-content'}>
    <div className={'title'}>
      <img src={Icon} alt={'Icono'} className={'icon'} />
      <button>Empezar</button>
    </div>
  </div>);
})