import React from 'react';
import cardsData from '../data/CardData';

const CardService = () => {
    return (
        <div className="card-list">
            {cardsData.map((card) => (
                <div className="card" key={card.id}>
                    <img src={card.img} alt={card.desc} />
                    <div className="card-body">
                        <p>{card.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardService;