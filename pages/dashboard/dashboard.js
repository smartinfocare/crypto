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
   
   <DetailCard />
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
