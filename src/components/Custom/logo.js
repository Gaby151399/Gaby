import { Link } from "react-router-dom";

function Logo() {
    return ( <div>
        <Link to="/">
        <img src="house-fill.svg" alt="logo" width={20}/>
        </Link>
    </div> );
}

export default Logo;