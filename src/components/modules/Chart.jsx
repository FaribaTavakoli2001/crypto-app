import React, { useState } from 'react'
import styles from './Chart.module.css'
import { convertData } from '../../helpers/converData'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';



function Chart({chart , setChart  }) {
    // console.log(chart)
    const [ type , setType ] = useState('prices')
    // console.log(convertData(chart , type))

    const typeHandler = (event) => {
        if (event.target.tagName === "BUTTON"){
            const type = event.target.innerText.toLowerCase().replace(' ' , '_');
            setType(type)
        }
    }

  return (
    <div className={styles.container}>
        <span className={styles.cross} onClick={() => setChart(null)}>X</span>
        <div className={styles.chart}>
            <div className={styles.name}>
                <img src={chart.coin.image} alt="" />
                <p>{chart.coin.name}</p>
            </div>
            <div className={styles.graph}>
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart width={400} height={400} data={convertData(chart , type)}>
                       <Line 
                         type='monotone' 
                         dataKey={type} 
                         stroke='#3874ff' 
                         strokeWidth='2px'
                        />
                        <CartesianGrid stroke='#404042'/>
                        <YAxis dataKey={type} domain={['auto' , 'auto']}/>
                        <XAxis dataKey='date' hide  />
                        <Legend /> 
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div >
            <div 
            onClick={typeHandler}
            className={styles.types}>
                <button className={type === 'prices' ? styles.selected : null}>Prices</button>
                <button className={type === 'market_caps' ? styles.selected : null}>Market Caps</button>
                <button className={type === 'total_volumes' ? styles.selected : null}>Total Volumes</button>
            </div>
            <div className={styles.detailes}>
                <div>
                    <p>Prices:</p>
                    <span>${chart.coin.current_price}</span>
                </div>
                <div>
                    <p>ATH:</p>
                    <span>${chart.coin.ath}</span>
                </div>
                <div>
                    <p>Market cap:</p>
                    <span>{chart.coin.market_cap}</span>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Chart ;