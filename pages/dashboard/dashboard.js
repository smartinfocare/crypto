import Header from '../../components/Header/Header'
import DetailCard from '../../components/Details/DetailCard'
import Graph from '../../components/Graph/Graph'
import Table from '../../components/Table/Table'
import Tile from '../../components/Tiles/Tiles'
import DashboardForm from '../../components/DashboardForm/DashboardForm'
import TradingActivityTable from '../../components/TradingActivityTable/TradingActivityTable'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import SidebarView from '../../components/Sidebar/Sidebar'
export default function Dashoard() {
  return (
    
   < div className="allBody">
   <Header />   
   <div className="container text-white">
   <div className="row mt-5">
     <div className="col-md-8">
<h1 className="h1 dash_heading">Dashboard</h1>
     </div>
     <div className="col-md-2">

  <a className="btn btn-secondary form-control my-dash-drop  dropdown-toggle" href="#" role="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i className="fa fa-cloud" aria-hidden="true"></i> Medan-IND
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>

  </div>
     </div>
     <div className="col-md-2">

     <input type="date" className="form-control textbox-n" placeholder='yash' />  
     </div>
   </div>
   <DetailCard className="mt-5"/>
   <Graph />
   <Table />
   <DashboardForm />
   <Tile/>
   <TradingActivityTable/>
   <Contact/>
   </div>
   <Footer/>
   </div>
  )
}
