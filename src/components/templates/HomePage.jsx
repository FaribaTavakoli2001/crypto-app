import React, { useEffect, useState } from 'react'
import TableCoin from '../modules/TableCoin'
import { getCoinList } from '../../services/cryoptiApi'
import Pagination from '../modules/Pagination';
import Search from '../modules/Search';
function HomePage() {
    const [coins , setCoins] = useState([]);
    const [isLoding , setIsLoding] = useState(true);
    const [page , setPage] = useState(1);
    const [currency , setCurrency] = useState('usd')


    useEffect(() => {
        const getData = async () => {
        try {
          setIsLoding(true)
          const res = await fetch(getCoinList(page , currency));
          const json = await res.json();
          setCoins(json);
          setIsLoding(false)
        }
        catch (error) {
          console.log(error)
        }
        };

        getData();
    }, [page , currency])  
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency}/>
      <TableCoin coins={coins} isLoding={isLoding}/>
      <Pagination page={page} setPage={setPage}/>
      </div>
  )
}

export default HomePage ;