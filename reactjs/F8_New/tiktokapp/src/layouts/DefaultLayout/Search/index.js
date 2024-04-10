import {
  faCircleXmark,
  faMagnifyingGlass,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PoperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const debounded = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounded.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchiApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debounded);
      setSearchResult(result);

      setLoading(false);
    };
    fetchiApi();
  }, [debounded]);

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
    setSearchResult([]);
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (searchValue.startsWith(' ')) {
      return;
    }
    setSearchValue(searchValue);
  };

  return (
    <HeadlessTippy
      interactive
      appendTo={() => document.body}
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1">
          <PoperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PoperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          onFocus={() => setShowResult(true)}
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and vidoes"
          spellCheck={false}
          onChange={handleChange}
        />

        {!!searchValue && !loading && (
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} onClick={handleClear} />
          </button>
        )}

        {loading && (
          <FontAwesomeIcon className={cx('loading')} icon={faRotateRight} />
        )}
        <HeadlessTippy content="Tìm Kiếm" placement="right">
          <button
            className={cx('search-btn')}
            onMouseDown={(e) => e.preventDefault()}
          >
            {' '}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </HeadlessTippy>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
