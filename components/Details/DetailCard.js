
import Image from 'next/image'
export default function DetailCard() {
    return (
      <div className="mt-5">
    <div className="row">
    <div className="col-md-3">
      <div className="card-counter-for-icon">
        <div className="fa-icon-colom">
        <i aria-hidden="true"><img className="my-image" src="http://localhost:3000/etherum.png"/></i>
        </div>
        <h6 className="count-numbers-icon my-heading">$4745,12</h6>
        <span className="text-center"><i aria-hidden="true"><img className="line_img" src="http://localhost:3000/Greenline.png"/></i><i className="text-success">45%</i> this week</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter-for-icon">
        <div className="fa-icon-colom">
        <i aria-hidden="true"><img className="my-image" src="http://localhost:3000/bitcoin.png"/></i>
        </div>
        <h6 className="count-numbers-icon my-heading">$4745,12</h6>
        <span className="text-center"><i aria-hidden="true"><img className="line_img" src="http://localhost:3000/Greenline.png"/></i><i className="text-success">45%</i> this week</span>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card-counter-for-icon">
        <div className="fa-icon-colom">
        <i aria-hidden="true"><img className="my-image" src="http://localhost:3000/litecoin.png"/></i>
        </div>
        <h6 className="count-numbers-icon my-heading">$4745,12</h6>
        <span className="text-center"><i aria-hidden="true"><img className="line_img" src="http://localhost:3000/Redline.png"/></i><i className="text-danger">45%</i> this week</span>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card-counter-for-icon">
        <div className="fa-icon-colom">
        <i aria-hidden="true"><img className="my-image" src="http://localhost:3000/monero.png"/></i>
        </div>
        <h6 className="count-numbers-icon my-heading">$4745,12</h6>
        <span className="text-center"><i aria-hidden="true"><img className="line_img" src="http://localhost:3000/Greenline.png"/></i><i className="text-success">45%</i> this week</span>
      </div>
    </div>
  </div>

      </div>
    )
  }
  