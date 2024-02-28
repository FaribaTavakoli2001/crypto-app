import React from 'react'
import chartUp from '../../assets/chart-up.svg'
import chartDown from '../../assets/chart-down.svg'

import styles from './TableCoin.module.css'

function TableRow({
    coin : { 
    name , 
    image , 
    symbol , 
    current_price , 
    price_change_percentage_24h : price_change_24h , 
    total_volume
} ,
}) {
  return (
    
        <tr>
                    <td>
                        <div className={styles.symbol}>
                            <img src={image} alt='' />
                            <span>{symbol.toUpperCase()}</span>
                        </div>
                    </td>
                    <td>{name}</td>
                    <td>{current_price.toLocaleString()}</td>
                    <td className={price_change_24h > 0 ? styles.success : styles.error}>{price_change_24h.toFixed(2)}%</td>
                    <td>{total_volume.toLocaleString()}</td>
                    <td><img src={price_change_24h > 0 ? chartUp : chartDown} alt={name}/></td>
                </tr>
  )
}

export default TableRow