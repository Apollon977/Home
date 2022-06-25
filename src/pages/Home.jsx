import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import { setCategoryId } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Sceleton from '../components/PizzaBlock/Sceleton';
import PizzaBLock from '../components/PizzaBlock';
import Pagination from '../Pagination';
import { SearchContext } from '../App';

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filterSlice);
  const sortType = sort.sortProperty;

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const { searchValue } = React.createContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';

    // fetch(
    //   `https://62a3963b21232ff9b2229be6.mockapi.io/Items?page=${currentPage}&limit=4&${category}&${search}&sortBy=${sortBy}&order=${order}`,
    // )
    //   .then((res) => res.json())
    //   .then((arr) => {
    //     setItems(arr);
    //     console.log(arr);
    //     setIsLoading(false);
    //   });
    axios
      .get(
        `https://62a3963b21232ff9b2229be6.mockapi.io/Items?page=${currentPage}&limit=4&${category}&${search}&sortBy=${sortBy}&order=${order}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const sceletons = [...new Array(6)].map((_, index) => <Sceleton key={index} />);
  const pizzas = items.map((obj) => <PizzaBLock key={obj.id} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sceletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
