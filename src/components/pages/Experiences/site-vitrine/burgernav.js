import { Link } from "react-router-dom";

function Burgernav() {
    return ( <>
                <nav>
                    <h1>Pizza Gold</h1>
                    <div className="onglets">
                        <Link to="/" >Home</Link>
                        <a href="#produits">Nos produits</a>
                        <a href="#contact">Contact</a>
                    </div>
                </nav>
        </> );
}

export default Burgernav;