import React from 'react';
import debounce from 'lodash';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();
  const testBounce = React.useCallback(
    debounce(() => {
      console.log('Hello');
    }, 1000),
    [],
  );

  const OnClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        id="Layer_1_1_"
        version="1.1"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M11,0C8.243,0,6,2.243,6,5c0,1.198,0.441,2.284,1.146,3.147l-7,7l0.707,0.707l7-7C8.716,9.559,9.802,10,11,10  c2.757,0,5-2.243,5-5S13.757,0,11,0z M11,9C8.791,9,7,7.209,7,5c0-2.209,1.791-4,4-4s4,1.791,4,4C15,7.209,13.209,9,11,9z" />
      </svg>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <svg
          onClick={() => OnClickClear()}
          version="1.1"
          className={styles.clearIcon}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <g id="grid_system" />
          <g id="_icons">
            <path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
