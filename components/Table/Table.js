
export default function Table() {
  const data =[{
    id:1,
    price:"1500",
    amount:"52000",
    total:"$53500"
},{
  id:2,
    price:"1500",
    amount:"52000",
    total:"$53500"
},{
  id:3,
    price:"1500",
    amount:"52000",
    total:"$53500"
},{
  id:4,
    price:"1500",
    amount:"52000",
    total:"$53500"
},{
  id:8,
    price:"1500",
    amount:"52000",
    total:"$53500"
},{
  id:9,
    price:"1500",
    amount:"52000",
    total:"$53500"
},{
  id:10,
    price:"1500",
    amount:"52000",
    total:"$53500"
},{
  id:11,
    price:"1500",
    amount:"52000",
    total:"$53500"
},]
    return (
      <div className="mt-5">
      <div className="row text-white">
      <div className="col-md-6">
      <div className="card-body my-table-card">
        <div className="row">
          <div className="col-md-11">
            <h6 className="my-heading">Sell Order</h6>
          </div>
          <div className="col-md-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
</div>
        </div>
        <div className="row mt-2">
        <div className="col-md-12">
        <div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i aria-hidden="true"><img className="my-image-white-table  " src="http://localhost:3000/whitelitecoin.png"/></i><span className="t-text">Lite coin</span>
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
  </div>
</div>
        </div> 
    <table className="table mt-3 my-table">
    <tbody>
<tr>
      <td><h6 className="my-heading">Price</h6></td>
      <td><h6 className="my-heading">Amount</h6></td>
      <td><h6 className="my-heading">Total</h6></td>
    </tr>
</tbody>
  {data.map(element=>
  <tbody key={element.id}>
  <tr>
      <td>{element.price}</td>
      <td>{element.amount}</td>
      <td>{element.total}</td>
    </tr>
  </tbody>
)}
</table>
</div>
<div></div>
<button className="btn mt-button-table"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi my-ico bi-arrow-down-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
</svg></button>
</div>
      <div className="col-md-6">
  <div className="card-body my-table-card">
  <div className="row">
          <div className="col-md-11">
            <h6 className="my-heading">Buy Order</h6>
          </div>
          <div className="col-md-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
          </div>
        </div>
        <div className="row mt-2">
        <div className="col-md-12">
        <div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i aria-hidden="true"><img className="my-image-white-table" src="http://localhost:3000/whitemonero.png"/></i><span className="t-text">Monero</span>
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
  </div>
</div>
        </div> 
<table className="table mt-3 my-table">
<tbody>
   <tr>
      <td><h6 className="my-heading">Price</h6></td>
      <td><h6 className="my-heading">Amount</h6></td>
      <td><h6 className="my-heading">Total</h6></td>
    </tr>
</tbody>
  {data.map(element=>
  <tbody key={element.id}>
  <tr>
      <td>{element.price}</td>
      <td>{element.amount}</td>
      <td>{element.total}</td>
    </tr>
  </tbody>

)}
</table></div>

<button className="btn mt-button-table"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill my-ico" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
</svg></button>
 </div>
</div>
      </div>
    )
  }
  