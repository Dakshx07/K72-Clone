import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavBarContext=createContext()

export const NavColorContext=createContext()
const NavContext = ({children}) => {


    const [navColor,setNavColor]=useState('white')
    const [navOpen,setNavOpen]=useState(false)

    const locate=useLocation().pathname
    useEffect(function() {
      if(locate == '/projects' || locate == '/agnece'){
        setNavColor('black')
      }else{
        setNavColor('white')
      }
    },[locate])
    
  return (
    <div>
        <NavBarContext.Provider value={[navOpen,setNavOpen]}>
            <NavColorContext.Provider value={[navColor,setNavColor]}>
              {children}
            </NavColorContext.Provider>
        </NavBarContext.Provider>
    </div>
  )
}

export default NavContext