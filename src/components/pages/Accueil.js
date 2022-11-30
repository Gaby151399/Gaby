import React from 'react'
import { Link } from 'react-router-dom'

export default function Accueil() {
    return ( 
    <>
        <div className='accueil text-center'>
            <h1 className='titre text-light fw-bolder fs-3'>GABY'S WEB</h1>
            <div className='my-box container-lg d-flex flex-column text-start '>
                <h3 className='sous-titre fs-1 text-light'>DEVELOPPEUR WEB</h3>
                <p className="paragraphe text-light">
                    Je suis un jeune garçon âgé de tout juste 22ans.
                    Passionné par le monde numérique et les nouvelles technologies, j’ai entamé une carrière 
                    d’autodidacte depuis plus d’un an déjà. Ayant également la chance d’avoir été aidé par des 
                    collègues développeurs, j’ai rapidement pu développer mes compétances dans le domaine telles 
                    que la maîtrise du framework React ou encore les CMS comme Wordpress. Je suis également très 
                    serieux dans tout ce que j’entreprend et les challenges me poussent d’autant plus à me depasser.
                </p>
                <Link  to="Profile" className='btn-link'>
                    <button className=' btn btn-light'>Mes expériences</button>
                </Link>
            </div>
        </div>
    </>
    )
};