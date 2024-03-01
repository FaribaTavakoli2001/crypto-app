import React, { useEffect, useState } from 'react'
import { searchCoin } from '../../services/cryoptiApi'
import { RotatingLines } from 'react-loader-spinner';

import styles from './Search.module.css';

function Search({currency , setCurrency}) {
    const [text , setText] = useState('');
    const [coins , setCoins] = useState([]);
    const [isLoding , setIsLoding] = useState(false);


    useEffect(() => {
        const controller = new AbortController();

        setCoins([])
        if ( !text ) {
            setIsLoding(false);
            return;
        };

     const search = async() => {
        try {
        const res = await fetch(searchCoin(text) , 
        { signal : controller.signal,
        });
        const json = await res.json();
        console.log(json)
        if (json.coins) 
        {
            setCoins(json.coins)
            setIsLoding(false)
        } else {
            alert(json.status.error_message)
        }
      } catch (error){
        if (error.name !== 'AbortError') {
             alert(error.message) 
        }
    }
};
    setIsLoding(true)
    search();

    return () => controller.abort();
    } , [text]);

  return (
    <div className={styles.searchBox}>
        <input type='text' 
        placeholder='Search'
        value={text}
        onChange={(e) => setText(e.target.value)} />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value='usd'>USD</option>
            <option value='eur'>EUR</option>
            <option value='jpy'>JPY</option>
        </select>
        { (!!coins.length || isLoding )&& (
            <div className={styles.searcResult}>
            {isLoding && <RotatingLines 
            width='50px' 
            height='50px' 
            strokeColor='#3874ff' 
            strokeWidth='2' />}
            <ul>
                {coins.map ( coin => <li key={coin.id}>
                    <img src={coin.thumb} alt={coin.name} />
                    <p>{coin.name}</p>
                </li>)}
            </ul>
        </div>
        )}
    </div>
  )
}

export default Search