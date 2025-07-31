import React from "react";
import { useNavigate } from "react-router-dom";
import "./Kidhshoe.css"
const Kidshoe = () => {
    const navigate = useNavigate();

    const shoes = [
        {
            id: 1,
            name: 'Canvas Sneakers',
            color: 'Blue/White',
            image: "/Images/k_shoe_1.webp"
        },
        {
            id: 2,
            name: 'Water Play Sandals',
            color: 'Red',
            image: "/Images/k_shoe_2.webp"
        },
        {
            id: 3,
            name: 'Classic Boot',
            color: 'Black',
            image: "/Images/k_shoe_3.webp"
        },
        {
            id: 4,
            name: 'School Shoes',
            color: 'Black',
            image: "/Images/k_shoe_4.webp"
        },
        {
            id: 5,
            name: 'Water Shoes',
            color: 'Neon Green',
            image: "/Images/k_shoe_5.webp"
        },
        {
            id: 6,
            name: 'Winter Boots',
            color: 'Pink',
            image: "/Images/k_shoe_6.webp"
        },
        {
            id: 7,
            name: 'Character Sneakers',
            color: 'Multicolor',
            image: "/Images/k_shoe_7.webp"
        },
        {
            id: 8,
            name: 'Slip-On Loafers',
            color: 'Brown',
            image: "/Images/k_shoe_8.webp"
        },
        {
            id: 9,
            name: 'Sports Shoes',
            color: 'Black/Red',
            image: "/Images/k_shoe_9.webp"
        },
        {
            id: 10,
            name: 'Jelly Sandals',
            color: 'Clear',
            image: "/Images/k_shoe_10.webp"
        }
    ];

    return (
        <div className="kidshoe-page">
            <div className="collection-header">
                <h1>KIDS' SHOES</h1>
                <div className="header-divider"></div>
            </div>

            <div className="shoe-container">
                {shoes.map((shoe) => (
                    <div
                        key={shoe.id}
                        className="shoe-item"
                        //onClick={() => navigate(`/product/kids-shoes/${shoe.id}`)}
                    >
                        <div className="shoe-image-wrapper">
                            <img
                                src={shoe.image}
                                alt={shoe.name}
                                className="shoe-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="shoe-details">
                            <h3>{shoe.name}</h3>
                            <p className="shoe-color">{shoe.color}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Kidshoe;