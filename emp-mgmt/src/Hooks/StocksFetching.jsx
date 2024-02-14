import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Fetching } from './Fetching';

export const StocksFetching = () => {



    const [stockList, setStockList] = useState([]);
    const [stockName, setStockName] = useState("");


    function AddStock (){
        setStockList([...stockList, stockName]);
        setStockName("")
    }

    function RemoveStock(){
        setStockList([]);
    }


  return (
    <div>
        <input type="text" value={stockName} onChange={(event) => {setStockName(event.target.value)}} />
        <input type="button" value="Add Stock" onClick={AddStock}/>
        <input type="button" value="Remove All Stocks" onClick={RemoveStock}/>


        {stockList.map((stock) =>{
            return (
                <Fetching stockURL ={stock} />
                // <div>{stock}</div>
            )
        })}
    </div>
  )
}
