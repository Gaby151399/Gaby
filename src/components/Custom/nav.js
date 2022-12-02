import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import Navprofile from "./nav-profile";
import Sociaux from "./sociaux";
import Zoom from 'react-reveal/Zoom';

function Nav() {

    const [hover,setHover]=useState(false)
    const mouseEnter=()=>{
        setHover(true)
    }
    const mouseLeave=()=>{
        setHover(false)
    }
    return ( <div>
        <div className="menu">
            <div className="card-menu">
                <div>
                    <img src="gaby.png" alt="Gaby" width="100%" className=" rounded-top"/>
                    <div className=" d-flex flex-column bg-light mt-2">
                        <Link to="/" className="lien d-flex flex-row">
                            <img src="house-door.svg" alt="icon"/>
                            <h6 className=" ps-5 m-0 text-dark">GABY'S WEB</h6>
                        </Link>
                        <Link to="/profile" className="lien d-flex flex-column"  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                            <div className=" d-flex flex-row">
                                <img src="person.svg" alt="icon"/>
                                <h6 className=" ps-5 m-0 text-dark">PROJETS PERSONNELS</h6>
                            </div>
                            {hover && (
                                <Zoom top><Navprofile className="nav-profile"/></Zoom>
                            )}
                        </Link>
                    </div>
                    <div className="sociaux-card mt-2">
                        <Sociaux/>
                    </div>
                    <div className=" logo mt-2 text-center pt-3">
                        <Logo/>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}

export default Nav;