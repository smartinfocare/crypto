
import Image from 'next/image'
export default function DetailCard() {
    return (
      <div className="mt-5">
    <div className="row">
    <div className="col-md-3">
      <div className="card-counter-for-icon">
        <div className="fa-icon-colom">
        <i aria-hidden="true"><img className="my-image" src="http://localhost:3000/bitcoin.png"/></i>
        </div>
        <h6 className="count-numbers-icon my-heading">$4745,12</h6>
        <span className="count-name-icon">Flowz</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter-for-icon">
        <div className="fa-icon-colom">
        <i aria-hidden="true"><img className="my-image" src="http://localhost:3000/etherum.png"/></i>
        </div>
        <h6 className="count-numbers-icon my-heading">$4745,12</h6>
        <span className="count-name-icon">Flowz</span>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card-counter-for-icon">
        <div className="fa-icon-colom">
        <i aria-hidden="true"><img className="my-image" src="http://localhost:3000/litecoin.png"/></i>
        </div>
        <h6 className="count-numbers-icon my-heading">$4745,12</h6>
        <span className="count-name-icon">Flowz</span>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card-counter-for-icon">
        <div className="fa-icon-colom">
        <i aria-hidden="true"><img className="my-image" src="http://localhost:3000/monero.png"/></i>
        </div>
        <h6 className="count-numbers-icon my-heading">$4745,12</h6>
        <span className="count-name-icon">Flowz</span>
      </div>
    </div>
  </div>

      </div>
    )
  }
  