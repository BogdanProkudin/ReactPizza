// import photo from "./211651_close_round_icon.svg";
import styles from './styles.module.scss';
import debounce from 'lodash.debounce';

import { useDispatch } from 'react-redux';
import { setSearchItems } from '../redux/slices/Pizzas';
import React, { useRef, useState } from 'react';
function Input() {
  const InputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  function inputDefault() {
    setValue('');
    dispatch(setSearchItems(''));
    if (InputRef.current) {
      InputRef.current.focus();
    }
  }

  const Change = React.useCallback(
    debounce(str => {
      dispatch(setSearchItems(str));
    }, 500),
    []
  );

  const ChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    Change(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        version="1.0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <g data-name="Layer 2" id="Layer_2">
          <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
        </g>
      </svg>
      {value && (
        <img
          onClick={() => inputDefault()}
          // src={photo}
          className={styles.icon2}
        ></img>
      )}
      <input
        ref={InputRef}
        value={value}
        onChange={event => ChangeInput(event)}
        className={styles.input}
        type="text"
        placeholder="Search Pizzas..."
      />
    </div>
  );
}

export default Input;
