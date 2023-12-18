import React from 'react';
import TEL from '../assets/images/Phone + effect.png';


const Home = () => {
    return (
        <div className='container_home'>
            <div className="container_tel">

                <div className="container_tel_text">
                    <h1>Construisons ensemble votre <span>futur en ligne</span></h1>
                    <p>Découvrez nous au travers du digital</p>
                </div>

                <img src={TEL} alt="" />
            </div>
        </div>
    );
};

export default Home;