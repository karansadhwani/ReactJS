import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Navigation(){

    const [showMenu , setShowMenu]= useState(false)


     let menu 
     let menuMask

     if(showMenu){
        menu=<div className="fixed bg-gray-800 top-0 left-0 w-3/5 h-full z-50 shadow textalign-center vertical-align-center ">
            
            Here's Your Menu !</div>

            menuMask=
                        <div
                        className="bg-gray-300 fixed top-0 left-0 w-full h-full z-50 p-3"
                        onClick={() => setShowMenu(false)}
                   
                       >
                     menu=<div className="text-color-white">
            
            Here's Your Menu !</div>      
                        </div>

     }

        return(
                <nav>
                    <span className="text-xt">
                         <FontAwesomeIcon
                         icon={faBars} 
                         onClick = {() => setShowMenu(!showMenu)}
 
                         />

                      

                    </span>

                   

                    {menuMask}
                    {menu}

                    </nav>

                    

        )
        }


export default Navigation