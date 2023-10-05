/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import Icon from './assets/icon.webp';
import './App.scss';
import Button from './components/Button';
import { MdArrowForward } from "react-icons/md";

export default React.memo(function App() {
  function _start() {
    const root = document.getElementById('root');
    root?.classList.add('enter');
  }

  return(<div id={'principal-content'}>
    <div className={'title'}>
      <img id={'ImgStart'} src={Icon} alt={'Icono'} className={'icon'} />
      <Button
        title={'Comenzar'}
        className={'button-start'}
        right={<MdArrowForward />}
        style={{ marginTop: 32 }}
        onPress={_start}
      />
    </div>
  </div>);
})