import React from "react";
import {Link, NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';


const Navbar = (() =>{

    return(

        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div id="ur"></div>
                    <div class="navbar-nav">
                        <Link class="nav-item nav-link" to='/'>Fooldal</Link>
                    </div>
                    
                    <div id="ur2"></div>
                    <div class="navbar-nav">
                        <NavLink class="nav-item nav-link" to='/felvettek'>A felvettek</NavLink>
                    </div>
                    
               
                
            </nav>


        </div>
    )

})

export default Navbar