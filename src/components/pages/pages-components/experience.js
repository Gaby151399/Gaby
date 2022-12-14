import { Link } from "react-router-dom";

function Exp() {
    return ( <>
        <div className=" col-6 text-start ">
                <h2 className=" text-light text-start text-uppercase">
                PROJETS PERSONNELS
                </h2>
            </div>
            <div className=" col-6 text-start d-flex flex-column">
                <div>
                <p className=" text-light">
                    <span className=" fw-bold text-decoration-underline text-light">
                        Aout 2021 : 
                    </span>
                     Réalisation d'un site vitrine restaurant avec HTML, CSS <br/>
                     <Link to="/burger"><button className="btn btn-sm btn-light w-25">voir</button></Link>
                </p>
                </div>
                <div>
                <p className=" text-light">
                    <span className=" text-light fw-bold text-decoration-underline">
                        Janvier 2022 : 
                    </span>
                     Réalisation d'une calculatrice avec HTML, CSS et JavaScript<br/>
                     <a href="https://luminous-narwhal-61c758.netlify.app/"><button className="btn btn-sm btn-light w-25">voir</button></a>
                </p>
                </div>
                <div>
                <p className=" text-light">
                    <span className=" text-light fw-bold text-decoration-underline">
                        Mars 2022 : 
                    </span>
                     Réalisation d'une calculatrice avec React.js<br/>
                     <Link to="/calculatrice"><button className="btn btn-sm btn-light w-25">voir</button></Link>
                </p>
                </div>
               <div>
               <p className=" text-light">
                    <span className=" text-light fw-bold text-decoration-underline">
                        Juin 2022 : 
                    </span>
                     Réalisation d'un site vitrine COCA-COFFEE avec React.js<br/>
                     <Link to="/coffee"><button className="btn btn-sm btn-light w-25">voir</button></Link>
                </p>
               </div>
                <div>
                <p className=" text-light">
                    <span className=" text-light fw-bold text-decoration-underline">
                        Septembre 2022 : 
                    </span>
                    Réalisation d'une TODOLIST avec React.js<br/>
                    <Link to="/todo"><button className="btn btn-sm btn-light w-25">voir</button></Link>
                </p>
                </div>
            </div>
    </> );
}

export default Exp;