import React, { useState } from 'react'
import NavContext from "./NavContext";

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
