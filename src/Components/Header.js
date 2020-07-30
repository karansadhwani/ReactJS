import React from 'react'
import Navigation from './Navigation'

function Header(){


        return(
                <header className="app-header flex justify-between items-center border-b p-3">
                    
                    <span className ="textalign-center text-color-white">
                        MX Player
                        
                    </span>
                    
                        <Navigation/>

                </header>

        )

}

export default Header