
export default function TradingActivityTable() {

  const demoData=[{ 
  id:1,
  name:"Bitcoin",
  time:"12:41pm",
  price:"+$50000",
  status:"completed"
},{
  id:2,
  name:"Etherum",
  time:"12:41pm",
  price:"+$50000",
  status:"Pending"
},{
  id:3,
  name:"Monero",
  time:"12:41pm",
  price:"-$912",
  status:"Canceled"
},{
  id:4,
  name:"Litecoin",
  time:"12:41pm",
  price:"+$50000",
  status:"completed"
},{
  id:5,
  name:"Bitcoin",
  time:"12:41pm",
  price:"+$50000",
  status:"completed"
},{
  id:6,
  name:"Monero",
  time:"12:41pm",
  price:"-$912",
  status:"Canceled"
},
{
  id:7,
  name:"Litecoin",
  time:"12:41pm",
  price:"-$912",
  status:"Canceled"
},]


    return (
          <div className="row mt-5">
          <div className="col-md-12">
  <div className="card-body ">
  <div className="row">
<div className="col-md-9">
    <h6 className="my-heading">Recent Tranding Activities</h6>
    <p className="my-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
<div className="col-md-3">
<div className="btn-group btn-group-toggle" data-toggle="buttons">
  <label className="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Monthly
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option2" autoComplete="off" /> Weekly
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option3" autoComplete="off" /> Today
  </label>
</div>
    </div>
      </div>
<div className="my-table">
      <table className="table" >
        {demoData.map(element=>
  <tbody key={element.id}>
    <tr>
      {element.status=="completed"? <td ><button type="submit" className="btn btn-success"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-right" viewBox="0 0 16 16">
     <path fillRule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
    </svg> </button></td>:('')}
{element.status=="Pending"?<td ><button type="submit" className="btn btn-secondary"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"/>
</svg></button></td> :('')}
{element.status=="Canceled"?<td ><button type="submit" className="btn btn-danger"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"/>
</svg></button></td>:('')}
   {element.name=="Bitcoin" ?  <td>
        <i aria-hidden="true"><img className="currency " src="http://localhost:3000/bitcoin.png"/></i>
    {element.name}</td>: ('')}
    {element.name=="Litecoin" ?  <td>
        <i aria-hidden="true"><img className="currency " src="http://localhost:3000/litecoin.png"/></i>
    {element.name}</td>: ('')}
    {element.name=="Monero" ?  <td>
        <i aria-hidden="true"><img className="currency " src="http://localhost:3000/monero.png"/></i>
    {element.name}</td>: ('')}
    {element.name=="Etherum" ?  <td>
        <i aria-hidden="true"><img className="currency " src="http://localhost:3000/etherum.png"/></i>
    {element.name}</td>: ('')}
    
      <td>{element.time}</td>
      <td>{element.price}</td>
      {element.status == "completed"? 
      <td><span className="badge rounded-pill bg-success">Completed</span></td>:('')}
      {element.status == "Pending"? 
      <td><span className="badge rounded-pill bg-secondary">Pending</span></td> :('')}
      {element.status == "Canceled"? 
     <td><span className="badge rounded-pill bg-danger">Canceled</span></td> :('')}
    </tr>
  </tbody>
    )}
    <tbody>
      <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>  
 </div>

<button className="btn mt-button btn-warning"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
</svg></button>
  </div>     
  
 </div>
    )
  }
  