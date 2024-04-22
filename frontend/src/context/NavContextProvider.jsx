import React, { createContext, useState } from 'react'

export const NavContext = createContext();
function NavContextProvider({children}) {
    const [ searchVal, setSearchVal ] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavContext.Provider value={{searchVal,setSearchVal,isLoggedIn,setIsLoggedIn}}>
        {children}
    </NavContext.Provider>
  )
}


export default NavContextProvider
