import { useState } from 'react'

export default function Information(data) {
  const [cryptoData, setCryptoData] = useState(data.myData.data);
  const [isLoad, setIsLoad] = useState(true);
const showAll =() =>{
  isLoad == true ? setIsLoad(false) :setIsLoad(true);
}
      return (
            <div className="row mt-5">
            <div className="col-md-12">
    <div className="card-body ">
    <div className="row">
<div className="col-md-9">
    <h6 className="my-heading">Crypto Information</h6>
    <p className="my-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
      </div>
  <div className="my-table">
  <table className="table mt-3 my-table">
<tbody>
   <tr>
      <td><h6 className="my-heading">Logo</h6></td>
      <td><h6 className="my-heading">Name</h6></td>
      <td><h6 className="my-heading">Rank</h6></td>
      <td><h6 className="my-heading">Price</h6></td>
      <td><h6 className="my-heading">Hourly change</h6></td>
      <td><h6 className="my-heading">Created At </h6></td>
      <td><h6 className="my-heading">Last Updated</h6></td>

    </tr>
</tbody>
{isLoad == true ?  cryptoData.slice(0, 10).map(element=>
  <tbody key={element.id}>
  <tr>
      <td><img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${element.id}.png`} className="cryptoLogo" /></td>
      <td>{element.name}</td>
      <td>{element.cmc_rank}</td>
      <td>${element.quote.USD.price.toFixed(2)}</td>
      <td>{element.quote.USD.percent_change_1h.toFixed(2)}</td>
      <td>{`${element.date_added.substring(8, 10)}-${element.date_added.substring(5, 7)}-${element.date_added.substring(0, 4)}`}</td>
      <td>{`${element.last_updated.substring(8, 10)}-${element.last_updated.substring(5, 7)}-${element.last_updated.substring(0, 4)}`}</td>
    </tr>
  </tbody>

)
 :(cryptoData.map(element=>
    <tbody key={element.id}>
    <tr>
        <td><img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${element.id}.png`} className="cryptoLogo" /></td>
        <td>{element.name}</td>
        <td>{element.cmc_rank}</td>
        <td>${element.quote.USD.price.toFixed(2)}</td>
        <td>{element.quote.USD.percent_change_1h.toFixed(2)}</td>
        <td>{`${element.date_added.substring(8, 10)}-${element.date_added.substring(5, 7)}-${element.date_added.substring(0, 4)}`}</td>
        <td>{`${element.last_updated.substring(8, 10)}-${element.last_updated.substring(5, 7)}-${element.last_updated.substring(0, 4)}`}</td>
      </tr>
    </tbody>
  
  ))}
</table>
  </div>  
   </div>
{isLoad == true ?
   <button className="btn mt-button btn-warning" onClick={() => showAll()} > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
</svg></button>:( <button className="btn mt-button btn-warning" onClick={() => showAll()} > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
</svg></button>)}
  </div>     
    
   </div>
      )
    }
    