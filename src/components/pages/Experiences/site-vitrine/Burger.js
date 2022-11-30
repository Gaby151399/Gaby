import Burgernav from "./burgernav";
import Footer from "./footer";
import Section from "./section";

function Burger() {
    return ( <div className="body-burger">
                <Burgernav/>
                <header className="header-burger">
                    <h1>Pizza Gold</h1>
                    <h4>LE MEILLEUR RESTAURANT DE PIZZA</h4>
                    <a href="#produits"><button>Parcourir</button></a>
                </header>
                <Section/>
                <Footer/>
    </div> );
}

export default Burger;