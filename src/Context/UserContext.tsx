import React, {createContext, useContext, useState, useEffect} from 'react';
import { fetchUserDetail, fetchUsers } from '../API/api';
import { ProviderProps, UserData, ErrorProps, ContextProps } from '../Props/index';





const UserContext = createContext<ContextProps>({});



export const UserContextProvider = ({children}: ProviderProps) => {
const[error, setError] = useState<ErrorProps>({isError: false,
        errorMessage: ''
 });

 //a state to monitor if the api has returned a data or not, we set loading true if we haven't gotten any response from the api and falseif we've gotten a response
 const[loading, setLoading] = useState(true);

 //data gotten from the api is stored in this state
const[data, setData] = useState<UserData[] | []>([]);

//single user data for user detail page is stored here
const[userDetail, setUserDetail] = useState<UserData>({});

//login info, users input will automatically be stored in this state and we can use it in other components instead of hardcoding user's name.
const[auth, setAuth] = React.useState({
    username: "",
    password: ""
});

//we cant display all the data at once, so we paginate them, each page data is stored here.
const[paginatedData, setPaginatedData] = useState<UserData[] | []>([]);

//current page we are on
const[pageNumber, setPageNumber] = useState<number>(0);

//number of data to show per page.
const[usersPerPage, setUsersPerPage]=useState<number>(10);

useEffect(() => {
//if screen is tablet above e.g desktop and above, we want 15 user details displayed per page.
let width = window?.innerWidth;
width > 800 && setUsersPerPage(15);
}, []);


const pagesVisited = pageNumber + usersPerPage;

//number of pages we will have
const pageCount:number = Math.ceil(data.length / usersPerPage);

//function for switching page
const changePage = ({ selected }: {selected: number}) => {
    setPageNumber(selected);
}

useEffect(() => {
    const getUsersData = async() => {
      try{
        setLoading(true);
        //check if data is stored in local storage
        if(localStorage.getItem('userDatas')){
            setData(JSON.parse(localStorage.getItem('userDatas') as string));
        }else{
            //call api
          const users = await fetchUsers();
          setData(users?.data);
          //store data in the local storage
            localStorage.setItem('userDatas', JSON.stringify(users?.data));
        }
      }catch(err){
          setError({
              isError: true,
              errorMessage: (err as Error)?.message
          });
      }finally{
          setLoading(false);
      }
  
    }
  
    getUsersData(); 
  }, []);

useEffect(() => {
    if(!loading){
        setPaginatedData(data.slice(pagesVisited, pagesVisited + usersPerPage));
        
    }
}, [pageNumber, loading, data, pagesVisited, usersPerPage]);


//function for fetching user detail
const getDetail = async (id:string) => {
    try{
        setLoading(true);
        if(localStorage.getItem('userDatas')){
           let detail =  data?.filter(data => data?.id == id);
           setUserDetail(detail[0]);
        } else {
        const detail = await fetchUserDetail(id);
        setUserDetail(detail?.data);
        }
    }catch(err) {
        setError({
            isError: true,
            errorMessage: (err as Error)?.message
        });
    }finally{
       setLoading(false);
    }
}

//nav control for detail dashboard page
const[state, setState] = React.useState<string>("General Details");


    return (
        <UserContext.Provider value={{loading, setLoading, error, data, setData, changePage, pageCount, paginatedData, pageNumber, usersPerPage, getDetail, userDetail, setUserDetail, state, setState, auth, setAuth}}>
            {children}
        </UserContext.Provider>
    )
}

//custom hook
export const useDataProvider = () => {
    return useContext(UserContext);
}

export default UserContext;
