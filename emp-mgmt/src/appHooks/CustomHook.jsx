import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const CustomHook = () => {

    var SBIPrice = useStockData("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI");
    var NLCPrice = useStockData("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC");

  return (
    <div>
        <h1>SBI Price is: {SBIPrice}</h1>
        <h1>NLC Price is: {NLCPrice}</h1>
    </div>
  )
}



// this is a custom hook it needs to named using "use" keyword as suffix
function useStockData(stockURL){
    const [stockPrice, setStockPrice] = useState(0);

    useEffect(() => {

        setInterval( async () => {
            var res = await axios.get(stockURL);
            setStockPrice(res.data.data.pricecurrent);
        },1000)
    
    },[])

    console.log(stockPrice)
    return stockPrice;
}
