import Categories from '../components/Categories.tsx';
import Header from '../components/Header.tsx';
import PizzaBLock from '../components/PizzaBlock.tsx';
import Skeleton from '../components/Skeleton.jsx';
import Sort from '../components/Sort.tsx';
import '../libs/app.scss';
import '../libs/style.css';

import React, { useState, useEffect } from 'react';
import Pagination from '../components/Pagination.tsx';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { setCurrentPage } from '../redux/slices/filter.js';
import { useSelector, useDispatch } from 'react-redux';

import { getPizzas } from '../redux/slices/Pizzas.js';
function Home() {
  const { Items, status, SearchItems } = useSelector(state => state.Pizzas);

  const categoryId = useSelector(state => state.filter.categoryId);
  const currentPage = useSelector(state => state.filter.countPage);
  let pizzaCount = 0;
  const [findedPizzas, setFindedPizzas] = useState(true);
  const navigate = useNavigate();
  const sortName = useSelector(state => state.filter.sort);
  const dispatch = useDispatch();
  const sortBy = sortName.sortProperty;
  async function fetchPizzas() {
    dispatch(getPizzas({ currentPage, categoryId, sortBy }));
  }

  useEffect(() => {
    fetchPizzas();
  }, [categoryId, sortName, currentPage]);

  useEffect(() => {
    const string = qs.stringify({
      sortProperty: sortName.sortProperty,
      categoryId,
      currentPage
    });
    console.log(string);
    navigate(`?${string}`);
  }, [categoryId, sortName.sortProperty, currentPage]);

  function setCurrentPag(number) {
    dispatch(setCurrentPage(number));
  }

  useEffect(() => {
    function PizzasNotFound() {
      Items.forEach(obj => {
        if (SearchItems.length === 0) {
          pizzaCount = null;
        }

        if (
          obj.title.toLowerCase().includes(SearchItems.toLowerCase()) &&
          SearchItems.length !== 0
        ) {
          pizzaCount++;
        }
        if (pizzaCount === 0) {
          setFindedPizzas(false);
        }
        if (pizzaCount !== 0) {
          setFindedPizzas(true);
        }
      });
    }
    PizzasNotFound();
  }, [SearchItems]);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === 'loading'
          ? [...new Array(6)].map((el, index) => {
              return <Skeleton key={index} />;
            })
          : Items.map(obj => {
              if (obj.title.toLowerCase().includes(SearchItems.toLowerCase())) {
                return (
                  <PizzaBLock
                    id={obj.id}
                    key={obj.id}
                    title={obj.title}
                    price={obj.price}
                    image={obj.imageUrl}
                    sizes={obj.sizes}
                    type={obj.types}
                  />
                );
              }
            })}

        {findedPizzas === false && <h1>Пиццы не найдены</h1>}
      </div>
      <Pagination onChange={setCurrentPag} />
    </>
  );
}
export default Home;
