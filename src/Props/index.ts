import { IconType } from "react-icons/lib";


export interface ContextProps{
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
    
export interface UserData{
    accountBalance?: string,
    accountNumber?: string,
    createdAt?: string,
    education?: {
        duration: string,
        employmentStatus: string,
        level: string,
        loanRepayment: string,
        monthlyIncome: string[],
        officeEmail: string,
        sector: string
    },
    email?: string,
    guarantor?: {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        gender: string,
        address: string
    },
    id?: string,
    lastActiveDate?: string,
    orgName?: string,
    phoneNumber?: string,
    profile?: {
       address: string,
       avatar: string,
       bvn: string,
       currency: string,
       firstName: string,
       gender: string,
       lastName: string,
       phoneNumber: string, 
    },
    socials?: {
        facebook: string,
        instagram: string,
        twitter: string,
    },
    userName?: string
}

export interface ProviderProps {
    children: React.ReactNode;
}

export interface ErrorProps{
    isError: boolean,
    errorMessage: string
}

 export interface List{
    title: string,
    lists: {name: string
     icon: IconType;
    }[]
 }

 export interface DetailInterfaceProps {
   details: { 
    icon: IconType,
    title: string,
    figure: string,
    iconClassName: string
   }
}

export interface DashboardTableProps {setShowModal: React.Dispatch<React.SetStateAction<boolean>>, 
setOffset: React.Dispatch<React.SetStateAction<number>>, 
offset: number, showModal: boolean};

export interface TableMenuProps {
    data: UserData, 
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>, 
    setOffset: React.Dispatch<React.SetStateAction<number>>}