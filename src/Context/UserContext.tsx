import React, {createContext, useContext} from 'react';

const UserContext = createContext<any>({});

interface providerProps {
    children: React.ReactNode;
}

export const UserContextProvider = ({children}: providerProps) => {

    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}

//custom hook
export const useThemeProvider = () => {
    return useContext(UserContext);
}

export default UserContext;
