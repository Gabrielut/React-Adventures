import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/ship.jpg"
                            text="Explore the hidden waterfall deep
                        inside the sea"
                            label="Adventure"
                            path="/services"></CardItem>
                        <CardItem src="images/father.jpg"
                            text="Epic Adventure holding your father´s hand"
                            label="Family"
                            path="/services"></CardItem>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/ship.jpg"
                            text="Explore the hidden waterfall deep
                        inside the sea"
                            label="Adventure"
                            path="/services"></CardItem>
                        <CardItem src="images/father.jpg"
                            text="Epic Adventure holding your father´s hand"
                            label="Family"
                            path="/services"></CardItem>
                        <CardItem src="images/ship.jpg"
                            text="Explore the hidden waterfall deep
                        inside the sea"
                            label="Adventure"
                            path="/services"></CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards
