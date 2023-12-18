import React from 'react';
import TEL from '../assets/images/Phone + effect.png';
import MEHDI from '../assets/images/homme_chemise-removebg-preview 1.png';


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

            {/* Mot du PDG */}
            <div className="container_pdg">
                <div className="container_pdg_img">
                    <img src={MEHDI} alt="" />
                </div>

                <div className="container_pdg_text">
                    <p>“Nous sommes passionnés par le succès de nos clients, et nous sommes fiers de leur fournir des résultats qui ont un impact positif sur leur entreprise. Que vous cherchiez à augmenter vos ventes, à attirer plus de trafic sur votre site web, ou à améliorer votre présence en ligne, DIGITALY est là pour vous aider.”</p>
                    <div className="container_pdg_text_fonction">
                        <span>FORHRANI Mehdi</span>
                        <span><i>Président-directeur général</i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;