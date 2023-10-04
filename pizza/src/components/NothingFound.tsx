import React from "react";
import style from "../libs/NotFound.module.css";

function NothingFound() {
  console.log(style.root);
  return (
    <div className={style.boss}>
      <div className={style.root}>
        <h1>
          <span>
            😔
            <br />
            Ничего не найдено
          </span>
        </h1>
        <p className={style.text}>К сожалению Данная Страница отсуствует</p>
        <button className={style.btn}>Назад</button>
      </div>
    </div>
  );
}

export default NothingFound;
