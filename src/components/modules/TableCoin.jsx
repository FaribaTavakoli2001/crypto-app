import React from 'react'
import TableRow from './TableRow'
import { RotatingLines } from 'react-loader-spinner'

import styles from './TableCoin.module.css'

function TableCoin({coins , isLoding}) {

  return (
    <div className={styles.container}>
        { isLoding ? ( <RotatingLines strokeColor='#3874ff' strokeWidth='2'
  /> ) : 
         ( <table className={styles.table}>
         <thead>
             <tr>
                 <th>Coin</th>
                 <th>Name</th>
                 <th>Price</th>
                 <th>24h</th>
                 <th>Total Volume</th>
                 <th></th>
             </tr>
         </thead>
         <tbody>
             {coins.map( coin => <TableRow coin={coin} key={coin.id}/>)}
         </tbody>
     </table> )}
       
    </div>
  )
}

export default TableCoin