import React from "react";
import { useNavigate } from "react-router-dom";
import './Womenshoe.css';
const Womenshoe = () => {
    const navigate = useNavigate();

    const shoes = [
        {
            id: 1,
            name: 'Leather ankle boots',
            color: 'Black',
            image: "/Images/w_shoe_1.png"
        },
        {
            id: 2,
            name: 'Stiletto pumps',
            color: 'Navy blue',
            image: "/Images/w_shoe_2.png"
        },
        {
            id: 3,
            name: 'White sneakers',
            color: 'White',
            image: "/Images/w_shoe_3.png"
        },
        {
            id: 4,
            name: 'Tassel loafers',
            color: 'Brown',
            image: "/Images/w_shoe_4.png"
        },
        {
            id: 5,
            name: 'Slide sandals',
            color: 'Tan',
            image: "/Images/w_shoe_5.png"
        },
        {
            id: 6,
            name: 'Combat boots',
            color: 'Black',
            image: "/Images/w_shoe_6.png"
        },
        {
            id: 7,
            name: 'Ballet flats',
            color: 'Blush pink',
            image: "/Images/w_shoe_7.png"
        },
        {
            id: 8,
            name: 'Open-back mules',
            color: 'Cream',
            image: "/Images/w_shoe_8.png"
        },
        {
            id: 9,
            name: 'Wedge sandals',
            color: 'Natural',
            image: "/Images/w_shoe_9.png"
        },
        {
            id: 10,
            name: 'Chunky sneakers',
            color: 'White',
            image: "/Images/w_shoe_10.png"
        },
        {
            id: 11,
            name: 'Pointed flats',
            color: 'Metallic gold',
            image: "/Images/w_shoe_11.png"
        },
        {
            id: 12,
            name: 'Knee high boots',
            color: 'Black',
            image: "/Images/w_shoe_12.png"
        }
    ];

    return (
        <>
        <div className="womenshoe-page">
            <div className="collection-header">
                <h1>WOMEN'S SHOES</h1>
                <p>Contemporary designs with premium craftsmanship</p>
            </div>

            <div className="shoe-container">
                {shoes.map((shoe) => (
                    <div
                        key={shoe.id}
                        className="shoe-item"
                    >
                        <div className="shoe-image-wrapper">
                            <img
                                src={shoe.image}
                                alt={shoe.name}
                                className="shoe-img"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/300x400?text=Shoe+Image';
                                }}
                            />
                        </div>
                        <div className="shoe-details">
                            <h3>{shoe.name}</h3>
                            <p className="shoe-color">{shoe.color}</p>
                            <p className="shoe-price">{shoe.price}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
            </>
    );
};

export default Womenshoe;