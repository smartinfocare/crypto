
import Image from 'next/image'

import {useEffect,useState} from 'react';
export default function DetailCard() {
  
 const [myData, setMyData] = useState("")
useEffect(() => {
  fetData();
 }, [])
 const fetData = async () => {
 const res = await fetch('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest', {
   method: 'get',
   headers: { 
     'X-CMC_PRO_API_KEY': '9737c94c-9839-4ab2-b161-616cefa64abf', 
     'Accept': 'application/json',
     'Access-Control-Allow-Origin': 'http://localhost:3000',
     "Access-Control-Allow-Headers": "x-requested-with, x-requested-by" 
 }
 })
 let resData = await res.json();
 setMyData(resData.data) 
 
 }
    return (
      <div className="mt-5">
    <div className="row">
    <div className="col-md-3">
      <div className="card-counter-for-icon">
        <div className="fa-icon-colom">
        <i aria-hidden="true"><img className="my-image" src="http://localhost:3000/bitcoin.png"/></i>
        </div>

        <h6 className="count-numbers-icon">Total Active Crypto Currency</h6>
        <h6 className="count-numbers-icon my-heading text-success">{myData.active_cryptocurrencies}</h6>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter-for-icon">
        <div className="fa-icon-colom">
        <i aria-hidden="true"><img className="my-image" src="http://localhost:3000/bitcoin.png"/></i>
        </div>

        <h6 className="count-numbers-icon">Total Crypto Currency</h6>
        <h6 className="count-numbers-icon my-heading text-success">{myData.total_cryptocurrencies}</h6>
        {/* <span className="text-center"><i aria-hidden="true"><img className="line_img" src="http://localhost:3000/Greenline.png"/></i><i className="text-success">45%</i> this week</span> */}
      </div>
    </div>
    <div className="col-md-3">
      <div className="card-counter-for-icon">
        <div className="fa-icon-colom">
        <i aria-hidden="true"><img className="my-image" src="http://localhost:3000/bitcoin.png"/></i>
        </div>
        <h6 className="count-numbers-icon">Active Market Caps</h6>
        <h6 className="count-numbers-icon my-heading text-success">{myData.active_market_pairs}</h6>
        {/* <span className="text-center"><i aria-hidden="true"><img className="line_img" src="http://localhost:3000/Redline.png"/></i><i className="text-danger">45%</i> this week</span> */}
      </div>
    </div>
    <div className="col-md-3">
      <div className="card-counter-for-icon">
        <div className="fa-icon-colom">
        <i aria-hidden="true"><img className="my-image" src="http://localhost:3000/bitcoin.png"/></i>
        </div>
        <h6 className="count-numbers-icon">Coin Volume</h6>
        <h6 className="count-numbers-icon my-heading text-success">{myData.defi_24h_percentage_change.toFixed(2)}</h6>
        {/* <span className="text-center"><i aria-hidden="true"><img className="line_img" src="http://localhost:3000/Greenline.png"/></i><i className="text-success">45%</i> this week</span> */}
      </div>
    </div>
  </div>

      </div>
    )
  }
  