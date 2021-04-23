
export default function DashboardForm() {
    return (
          <div className="row mt-5">
          <div className="col-md-12">
  <div className="card-body ">
  <div className="row">
<div className="col-md-10">
    <h6 className="my-heading">Quick trade</h6>
    <p className="my-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
<div className="col-md-2">
<div className="form-row align-items-center">
    <div className="col-auto my-1">
      <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Preference</label>
      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option defaultChecked>Yearly(2021)</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    </div>
    </div>
      </div>
  <form >
  <div className="form-group">
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text ">Account BTC</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroup"  />
      </div>
      </div>
      <div className="form-group">
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">Price BPL</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroup"  />
      </div>
      </div>
      <div className="form-group">
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">Fee (1%)</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroup"  />
      </div>
      </div>
      <div className="form-group">
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">Total BPL</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroup"  />
      </div>
      </div>
      <div className="row">
<div className="col-md-10">
    <p className="my-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
</div>
<div className="col-md-1">
<button type="submit" class="btn btn-success">buy <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
</svg>  </button></div>
<div className="col-md-1">
<button type="submit" class="btn btn-danger">sell   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"/>
</svg></button></div>
      </div>
    
</form>
</div>

      </div>
     
</div>
    )
  }
  