import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

// this is the logic of 
export const ContextProvider = ({ children }) => {
    const[ activeMenu, setActiveMenu ] = useState(true); 

// The most important part of this is the value you want it to pass
// second most important part is to have {children}
    return ( <StateContext.Provider 
                value={{ activeMenu, setActiveMenu }}
                >
                {children}
                </StateContext.Provider>

    )}

    export const useStateContext = () => useContext(StateContext)