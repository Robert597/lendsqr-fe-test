import React, {createContext, useContext, useState, useEffect} from 'react';
import { fetchUserDetail, fetchUsers } from '../API/index';
import { ProviderProps, UserData, ErrorProps } from '../Props/index';


interface ContextProps{
loading?: boolean,
setLoading?: React.Dispatch<React.SetStateAction<boolean>>,
error?: ErrorProps,
data?: [] | UserData[],
setData?: React.Dispatch<React.SetStateAction<[] | UserData[]>>,
 changePage?: ({ selected }: {
    selected: number;
}) => void,
pageCount?: number,
paginatedData?: [] | UserData[],
pageNumber?: number,
usersPerPage?: number,
getDetail?: (id: string) => Promise<void>,
userDetail?: UserData,
setUserDetail?: React.Dispatch<React.SetStateAction<UserData>>,
setState?: React.Dispatch<React.SetStateAction<string>>,
state?: string,
auth?: {
    username: string;
    password: string;
},
setAuth?: React.Dispatch<React.SetStateAction<{
    username: string;
    password: string;
}>>
}


const UserContext = createContext<ContextProps>({});



export const UserContextProvider = ({children}: ProviderProps) => {
const[error, setError] = useState<ErrorProps>({isError: false,
        errorMessage: ''
 });

 const[loading, setLoading] = useState(true);

const[data, setData] = useState<UserData[] | []>([]);
const[userDetail, setUserDetail] = useState<UserData>({});
const[auth, setAuth] = React.useState({
    username: "",
    password: ""
});


const[paginatedData, setPaginatedData] = useState<UserData[] | []>([]);

const[pageNumber, setPageNumber] = useState<number>(0);
const[usersPerPage, setUsersPerPage]=useState<number>(10);

useEffect(() => {
//if screen is tablet above e.g desktop, set amount of users to be displayed
let width = window?.innerWidth;
width > 800 && setUsersPerPage(15);
}, []);

const pagesVisited = pageNumber + usersPerPage;

const pageCount:number = Math.ceil(data.length / usersPerPage);

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
}, [pageNumber, loading, data, pagesVisited]);


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
