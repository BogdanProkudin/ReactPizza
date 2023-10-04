import React from 'react';
import NothingFound from '../components/NothingFound.tsx';
import style from '../libs/NotFound.module.css';

function NotFound() {
  return (
    <div className={style.all}>
      <NothingFound />
    </div>
  );
}

export default NotFound;
