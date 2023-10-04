import { useState } from 'react';
import { AddItems } from '../redux/slices/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzabyId } from '../redux/slices/Pizzas';
import React from 'react';
type PizzaBlockProps = {
  id: number;
  price: number;
  title: string;
  image: string;
  sizes: number[];
  type: string[];
};

const PizzaBLock: React.FC<PizzaBlockProps> = ({ id, price, title, image, sizes, type }) => {
  const [size, setSize] = useState<number>(0);
  const [style, SetStyle] = useState<number>(0);
  const typeNames: string[] = ['Традиционное', 'Тонкое'];
  const dispatch = useDispatch();
  function ChangeStyle(i) {
    SetStyle(i);
  }

  const CartItems = useSelector(getPizzabyId(id));

  const CartCount = CartItems ? CartItems.count : 0;
  function click1(i) {
    setSize(i);
  }

  function click() {
    AddCartItems();
  }
  const AddCartItems = () => {
    const items = {
      id,
      price,
      title,
      image,
      type: typeNames[style],
      size: sizes[size]
    };
    dispatch(AddItems(items));
  };

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={
          image
            ? image
            : 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
        }
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{title ? title : 'Не указана'}</h4>
      <div className="pizza-block__selector">
        <ul>
          {type.map((el, index) => {
            return (
              <li
                key={index}
                onClick={() => ChangeStyle(index)}
                className={style === index && type.length !== 1 ? 'active' : ''}
              >
                {type.length === 1 ? ` Tолько ${typeNames[index]}` : typeNames[index]}
              </li>
            );
          })}
        </ul>
        <ul>
          {sizes.map((el, index) => {
            return (
              <li
                key={index}
                onClick={() => click1(index)}
                className={size === index ? 'active' : ''}
              >{`${el}см.`}</li>
            );
          })}
          ;
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price ? price : 300} $</div>
        <button onClick={click} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {CartCount > 0 ? <i>{CartCount}</i> : ''}
        </button>
      </div>
    </div>
  );
};
export default PizzaBLock;
