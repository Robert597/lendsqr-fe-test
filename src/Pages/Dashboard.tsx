import React from 'react'
import { dashboardDetails } from '../Utils/index';
import DashboardDetail from '../Components/Dashboard/DashboardDetail';
import DashboardTable from '../Components/Dashboard/DashboardTable';
import ReactPaginate from 'react-paginate';
import { useDataProvider } from '../Context/UserContext';
import FilterModal from '../Components/Dashboard/FilterModal';
import Loader from '../Components/Loader';
import Header from '../Components/Header/Header';
import SideNav from '../Components/SideNav/SideNav';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import "../Styles/Pages/dashboard.scss";

const Dashboard = () => {
  const {pageCount, changePage, data, pageNumber, usersPerPage, loading, error} = useDataProvider();

  const[offset, setOffset] = React.useState(0)
  const[showModal, setShowModal] = React.useState<boolean>(false);

  const[showIcon, setShowIcon] = React.useState<boolean>(false);
  
  return (
    <div className='dashboard'>
        <div className="dashboardHeader">
          <Header/>
        </div>
        
        <div className="dashboardSplitView">
        <div className="dashboardSideNav">
          <SideNav/>
        </div>
        <div className="dashboardContent">
        {loading && (<Loader/>)}
        {!loading && error?.isError && (
        <div className="errorMessage">
          <p>Error: {error?.errorMessage}</p>
          <p onClick={() => {
            window.location.reload();
          }}>Click Here To Reload</p>
        </div>
      )}
      {!loading && !error?.isError &&( <> 
        <h1>Users</h1>
        <div className="dashboard_top">
        {
            dashboardDetails.map((detail, i) => (
             
                <DashboardDetail details={detail} key={i}/>
               
            ))
        }
 </div>
      
      <div className="tablecontainer">
        <DashboardTable 
        setShowModal={setShowModal} 
        setOffset={setOffset}
        offset={offset}
        showModal={showModal}/>

{
          showModal && (
            <FilterModal offset={offset}/>
          )
        }
</div>

        <div className="dashboardBottom">
          
          <div className='show_details'>
            <p>Showing  
               <span className='show_detail_icon'>
              <span>{(pageNumber as number) * (usersPerPage as number) + (usersPerPage as number)}</span>  <span style={{cursor: "pointer",
            marginTop: "5px"}} onClick={() => setShowIcon(prev => !prev)}>{showIcon ? <FiChevronUp/> : <FiChevronDown/>}</span></span> out of {data?.length}</p>
          </div>

          <ReactPaginate
          pageCount={pageCount as number}
          onPageChange={changePage}
          nextLabel={">"}
          previousLabel={"<"}
          containerClassName={"pagination"}
          previousLinkClassName={"page-prev"}
          nextLinkClassName={"page-next"}
          disabledClassName={"pagination-disabled"}
          activeClassName={"page-active"}
          />
        </div>
        </>
      )}
        </div>
        </div>
    </div>
  )
}

export default Dashboard;