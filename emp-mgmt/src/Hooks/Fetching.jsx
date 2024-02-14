import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Fetching = (props) => {

    const [apidata, setApidata] = useState([]);
    const [stockdata, setStockdata] = useState([]);
    const [stockColor, setStockColor] = useState("green");

    useEffect(() => {

        const getData = async () =>{
            var response = await axios.get("https://reqres.in/api/users/");
            setApidata(response.data);
        }
        getData();
    },[])



    useEffect(() => {

        setInterval(async() =>{
            var response = await axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/"+props.stockURL);

            // *Very Imp* here new stock price is compared/depended om old one therefore we used this way of setting data in state (*This is must*)
            setStockdata((oldData) =>{
                setStockColor(response.data.data.pricecurrent >= oldData.pricecurrent ? "green" : "red");
                return response.data.data;
            })

            // setStockdata(response.data.data.pricecurrent) *NOT This one*
            

        },2000)

        // this is done when u need data from api for only one time and not updating every 2 second
        // const getData = async () =>{
        //     var response = await axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI");
        //     setPricedata(response.data.data.pricecurrent);
        // }
        // getData();
        
    },[])


    console.log(stockdata);

  return (

        <>
            <h1>Data for Stock: {props.stockURL}</h1>
            <h2>Day Price: <span style={{color: stockColor}}>{stockdata.pricecurrent}</span> </h2>
            <h2>Previous Price: {stockdata.priceprevclose}</h2>

            
            <hr/>
            
            {/* <h1>Data from other API</h1>
            {apidata?.data?.map((res, i) => 
                    <div>{res.id}:- Email: {res.email} Name: {res.first_name} {res.last_name} <img src={res.avatar} alt="" /> </div> 
            )} */}
        </>
  )
}
