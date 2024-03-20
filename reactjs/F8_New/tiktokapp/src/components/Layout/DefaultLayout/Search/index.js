import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PoperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { useEffect, useState, useRef } from 'react';


const cx = classNames.bind(styles)



function Search() {

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();



    useEffect(() => {
        setTimeout(() => {
            setResult([1, 2, 3, 1]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        searchResult([]);
    }

    const handleHideResult = () => {
        setShowResult(false);
    }

    return (<HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1">
                <PoperWrapper>
                    <h4 className={cx('search-title')}>Accounts</h4>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
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
                onChange={e => setSearchValue(e.target.value)} />

            {!!searchValue && (
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} onClick={handleClear
                    } />
                </button>)}


            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
            <HeadlessTippy content="Tìm Kiếm" placement="right">
                <button className={cx('search-btn')}>
                    {' '}
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </HeadlessTippy>
        </div>
    </HeadlessTippy>);
}

export default Search;