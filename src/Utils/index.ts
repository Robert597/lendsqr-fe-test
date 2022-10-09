import { FaBriefcase,  FaUsers, FaRegHandshake, FaUserCheck, FaUserTimes, FaPiggyBank, FaCoins, FaUserCog, FaRegFileAlt, FaModx, FaHandHoldingUsd, FaSignal } from 'react-icons/fa';
import {VscSettings} from "react-icons/vsc";
import {AiFillSlackCircle} from "react-icons/ai";
import { MdSendToMobile } from 'react-icons/md';
import {HiOutlineUsers} from "react-icons/hi";
import {GiCash, GiBank} from "react-icons/gi";
import { RiFilePaper2Line} from "react-icons/ri";



export const NavData1 = {
    title: "Customers",
    lists: [
        {name: "users",
        icon: FaUsers
    },
        {name: "Guarantors",
        icon: HiOutlineUsers
    },
        {name: "Loans",
        icon: GiCash
    },
        {name: "Decision Model",
        icon: FaRegHandshake
    },
        {name: "Savings",
        icon: FaPiggyBank
    },
        {name: "Loan Requests",
        icon: FaHandHoldingUsd
    },
        {name: "Whitelist",
        icon: FaUserCheck
    },
        {name: "Karma",
        icon: FaUserTimes
    },
   
    ]
}

export const NavData2 = {
    title: "Businesses",
    lists: [
        {name: "Organization",
        icon: FaBriefcase
    },
        {name: "Loan Products",
        icon:  FaHandHoldingUsd
    },
        {name: "Savings Products",
        icon: GiBank
    },
        {name: "Fees and Charges",
        icon: FaCoins
    },
        {name: "Transactions",
        icon: MdSendToMobile
    },
        {name: "Services",
        icon: FaModx
    },
        {name: "Service Account",
        icon: FaUserCog
    },
        {name: "Settlements",
        icon: RiFilePaper2Line
    },
   
        {name: "Reports",
        icon: FaSignal
    },
   
    ]
}

export const NavData3 = {
    title: "Settings",
    lists: [
        {name: "Preferences",
        icon: VscSettings
    },
        {name: "Fees and Pricing",
        icon: AiFillSlackCircle
    },
        {name: "Audit Logs",
        icon: FaRegFileAlt
    }
]
}

export const dashboardDetails = [
    {
        icon: HiOutlineUsers,
        title: "Users",
        figure: "2,453",
        iconClassName: "iconUser"
    },
    {
        icon: FaUsers,
        title: "Active Users",
        figure: "2,453",
        iconClassName: "iconActive"
    },
    {
        icon: FaRegFileAlt,
        title: "Users with loans",
        figure: "12,453",
        iconClassName: "iconLoan"
    },
    {
        icon: FaCoins,
        title: "Users with savings",
        figure: "102,453",
        iconClassName: "iconSavings"
    }
]