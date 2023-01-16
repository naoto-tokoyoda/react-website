import React from 'react';
// to use carditem tag
import CardItem  from './CardItem';
// to use Cards.css
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destination!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon jungle"
                            label="Adventure"
                            path="/services"
                        />

                        <CardItem 
                            src="images/img-2.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label="Adventure"
                            path="/services"
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-4.jpg"
                            text="Lorem ipsum"
                            label="Adventure"
                            path="/services"
                        />

                        <CardItem 
                            src="images/img-3.jpg"
                            text="Lorem imsum"
                            label="Adventure"
                            path="/services"
                        />

                        <CardItem 
                            src="images/img-5.jpg"
                            text="Lorem imsum"
                            label="Adventure"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
