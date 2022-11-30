import "./App.css";
import "./css/bootstrap.css";
import "./style/style.css"
import "./style/style-m.css"
import "./style/style-t.css"
import "./style/stylecoffee/style-m-coffee.css"
import "./style/stylecoffee/style-coffee.css"
import "./style/styleburger/style-burger.css"
import "./style/stylecalcul/style-calcul.css"
import "./style/styletodo/todo.css"
import { Routes, Route, Link } from "react-router-dom";
import Accueil from "./components/pages/Accueil"
import Propos from "./components/pages/Profile";
import Nav from "./components/Custom/nav";
import Footer from "./components/Custom/Footer"
import { useState } from "react";
import Burger from "./components/pages/Experiences/site-vitrine/Burger";
import Coffee from "./components/pages/Experiences/Coffee/body/Coffee";
import Calcul from "./components/pages/Experiences/calculator/Calcul";
import Todo from "./components/pages/Experiences/todo/Todo";
import Fade from "react-reveal/Fade"

function App() {

    const [menu, setMenu]=useState(false)
    const [menuIcon,setMenuIcom]=useState(false)

    const voirMenu=()=>{
        setMenuIcom(!menuIcon)
        setMenu(!menu)
    }

    const fermeMenu=()=>{
        setMenu(false)
        setMenuIcom(false)
    }
    

    return ( <div className="App-container m-0 p-0">
        <button onClick={voirMenu} className="btn-menu ">{menuIcon?<img src="menu-app-fill.svg" alt="menu" />:<img src="menu-app.svg" alt="menu"/>}</button>
        <div className=" d-flex flex-row" id="menuBtn">
            <Link to="/" className="a col-12 text-decoration-none"><p className=" gaby text-end m-0 pe-2 align-self-center fw-bold">Accueil</p></Link>
        </div>
            { menu?<Fade left><div className="menu col-2 p-1 m-0">
                <Nav/>
            </div></Fade>:""}
        <div className = "App row m-0 p-0 mb-4 ">
            <div className="pages/Experiences/ col p-0 m-0" onClick={fermeMenu}>
                <Routes >
                    <Route path = "/" element = { < Accueil /> }/>
                    <Route path="/profile" element={< Propos/>}/>
                    <Route path="/burger" element={<Burger/>} />
                    <Route path="/coffee" element={<Coffee/>}/>
                    <Route path="/calculatrice" element={<Calcul/>} />
                    <Route path="/todo" element={<Todo/>} />
                </Routes> 
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default App;