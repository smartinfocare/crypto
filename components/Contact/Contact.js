
export default function Contact() {
    return (
          <div className="row mt-5">
          <div className="col-md-12">
  <div className="card-body ">
  <div className="row">
<div className="col-md-9">
    <h6 className="my-heading">Quick Transfer</h6>
    <p className="my-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
<div className="col-md-3">
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
<form>
<div className="form-group">
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text ">Account BTC</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroup"  />
      </div>
      </div>
</form>
<div className="row">
<div className="col-md-9">
    <h6 className="my-heading">Recent Contacts</h6>
    </div>
<div className="col-md-3">
<a href="#">viewmore</a>
    </div>
      </div>

      <div className="row  mt-4 text-center text-lg-left">

<div className="col-lg-3 col-md-4 col-6">
  <a href="#" className="d-block mb-4 h-100">
        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
      </a>
</div>
<div className="col-lg-3 col-md-4 col-6">
  <a href="#" className="d-block mb-4 h-100">
        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/aob0ukAYfuI/400x300" alt="" />
      </a>
</div>
<div className="col-lg-3 col-md-4 col-6">
  <a href="#" className="d-block mb-4 h-100">
        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/EUfxH-pze7s/400x300" alt="" />
      </a>
</div>
<div className="col-lg-3 col-md-4 col-6">
  <a href="#" className="d-block mb-4 h-100">
        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/M185_qYH8vg/400x300" alt="" />
      </a>
</div>

</div>
<div className="row">
<div className="col-md-5">
    <p className="my-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
<div className="col-md-7">
  <button className="btn btn-voilet" type="button">Transfer Now</button>

    </div>
      </div>
 </div>

  </div>     
 </div>
    )
  }
  