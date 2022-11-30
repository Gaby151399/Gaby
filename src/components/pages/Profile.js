import Competence from "./pages-components/conmpetence";
import Exp from "./pages-components/experience";

function Profile () {
    return ( <>
    <div className="Profile container-lg">
        <h1 className=" text-light fs-3 fw-bold pt-5 pb-2">Bonjour, je suis Gaby Arson BINA.</h1>
        <div className="card-info row pt-5 pb-5" id="competence">
            <Competence/>
        </div>
        <div className="card-info row pt-5 pb-5" id="experience">
            <Exp/>
        </div>
    </div>
    </> );
}

export default Profile ;