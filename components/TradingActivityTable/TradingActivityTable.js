
export default function TradingActivityTable() {
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
    <input type="radio" name="options" id="option1" autocomplete="off" defaultChecked /> Monthly
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off" /> Weekly
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option3" autocomplete="off" /> Today
  </label>
</div>
    </div>
      </div>

      <table className="table">
  <tbody>
    <tr>
     <td >1</td>
      <td ><button type="submit" class="btn btn-success"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
</svg> </button></td>
      <td><span class="iconify" data-icon="cryptocurrency-btc" data-inline="false"></span> Bitcoin</td>
      <td>12:41 pm</td>
      <td>+$5,000</td>
      <td><span class="badge rounded-pill bg-success">Completed</span></td>
    </tr>
    <tr>
      <td >2</td>
      <td ><button type="submit" class="btn btn-secondary"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"/>
</svg></button></td>
      <td><span class="iconify" data-icon="cryptocurrency-btc" data-inline="false"></span> Etherum</td>
      <td>12:41 pm</td>
      <td>+$5,000</td>
      <td><span class="badge rounded-pill bg-secondary">Pending</span></td>
    </tr>
    <tr>
      <td>3</td>
      <td ><button type="submit" class="btn btn-danger"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"/>
</svg></button></td>
      <td><span class="iconify" data-icon="cryptocurrency-btc" data-inline="false"></span> Monero</td>
      <td>12:41 pm</td>
      <td>-$912</td>
      <td><span class="badge rounded-pill bg-danger">Canceled</span></td>
    </tr>
    <tr>
      <td>4</td>
      <td ><button type="submit" class="btn btn-success"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"/>
</svg></button></td>
      <td><span class="iconify" data-icon="cryptocurrency-btc" data-inline="false"></span> Litecoin</td>
      <td>12:41 pm</td>
      <td>+$5,000</td>
      <td><span class="badge rounded-pill bg-success">Completed</span></td>
    </tr>
    <tr>
      <td>5</td>
      <td ><button type="submit" class="btn btn-success"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"/>
</svg></button></td>
      <td><span class="iconify" data-icon="cryptocurrency-btc" data-inline="false"></span> Bitcoin</td>
      <td>12:41 pm</td>
      <td>+$5,000</td>
      <td><span class="badge rounded-pill bg-success">Completed</span></td>
    </tr>
    <tr>
      <td>6</td>
      <td ><button type="submit" class="btn btn-danger"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"/>
</svg></button></td>
      <td><span class="iconify" data-icon="cryptocurrency-btc" data-inline="false"></span> Monero</td>
      <td>12:41 pm</td>
      <td>-$912</td>
      <td><span class="badge rounded-pill bg-danger">Canceled</span></td>
    </tr>
    <tr>
      <td></td>
      <td ></td>
      <td></td>
      <td>  </td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
 </div>

<button className="btn mt-button btn-warning"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
</svg></button>
  </div>     
 </div>
    )
  }
  