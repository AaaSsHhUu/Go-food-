import React, { useState } from 'react'
import NavContext from "./NavContext";

function NavContextProvider({children}) {
    const [ searchVal, setSearchVal ] = useState("");
  return (
    <NavContext.Provider value={{searchVal,setSearchVal}}>
        {children}
    </NavContext.Provider>
  )
}


export default NavContextProvider
