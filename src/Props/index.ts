import { IconType } from "react-icons/lib";

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