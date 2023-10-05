/// <reference types="vite-plugin-svgr/client" />
import React, { useState } from 'react';
import Icon from './assets/icon.webp';
import './App.scss';
import Button from './components/Button';
import { MdArrowForward } from "react-icons/md";
import SlidersContent from './SlidersContent';

export default React.memo(function App() {
  const [mount, setMount] = useState(false);

  function _start() {
    const root = document.getElementById('root');
    root?.classList.add('enter');
    setMount(true);
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
    {/*<Sliders />*/}
    {(mount)&&<SlidersContent />}
  </div>);
})