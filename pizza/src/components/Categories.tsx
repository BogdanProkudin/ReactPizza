import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filter';
type CategoriesProps = {
  value: number;
};
const Categories: React.FC<CategoriesProps> = ({ value }) => {
  const dispatch = useDispatch();
  const categories: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  function onChangeId(id: number): void {
    dispatch(setCategoryId(id));
  }
  return (
    <div className="categories">
      <ul>
        {categories.map((NameCategories, index) => {
          return (
            <li
              key={NameCategories}
              onClick={() => onChangeId(index)}
              className={value === index ? 'active' : ''}
            >
              {NameCategories}
            </li>
          );
        })}

        {/* <li onClick={() => click(0)} class={ActiveState === 0 ? "active" : ""}>
          Все
        </li> */}
      </ul>
    </div>
  );
};

export default Categories;
