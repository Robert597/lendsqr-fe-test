import React from 'react'
import { dashboardDetails } from '../Utils/index';
import DashboardDetail from '../Components/DashboardDetail';
import DashboardTable from '../Components/DashboardTable';
import ReactPaginate from 'react-paginate';
import { useDataProvider } from '../Context/UserContext';
import FilterModal from '../Components/FilterModal';
import Loader from '../Components/Loader';
import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
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
        <div>
          <p>{error?.errorMessage}</p>
        </div>
      )}
      {!loading && !error?.isError &&( <> 
        <h1>Users</h1>
        {
            dashboardDetails.map((detail, i) => (
                <DashboardDetail details={detail} key={i}/>
            ))
        }

        {
          showModal && (
            <FilterModal offset={offset}/>
          )
        }

        <DashboardTable 
        setShowModal={setShowModal} 
        setOffset={setOffset}/>

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