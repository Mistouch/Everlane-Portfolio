import React from "react";
import { useNavigate } from "react-router-dom";
import './Menshoe.css';

const Menshoe = () => {
    const navigate = useNavigate();

    // 10 Men's Shoes
    const shoes = [
        {
            id: 1,
            name: 'Leather Derby Shoes',
            color: 'Black',
            image: "/Images/men_shoe_1.webp"
        },
        {
            id: 2,
            name: 'White Sneakers',
            color: 'White',
            image: "/Images/men_shoe_2.webp"
        },
        {
            id: 3,
            name: 'Chelsea Boots',
            color: 'Brown',
            image: "/Images/men_shoe_3.webp"
        },
        {
            id: 4,
            name: 'Running Shoes',
            color: 'Black/White',
            image:"/Images/men_shoe_4.webp"
        },
        {
            id: 5,
            name: 'Loafers',
            color: 'Burgundy',
            image:"/Images/men_shoe_5.webp"
        },

        {
            id: 7,
            name: 'Oxford Shoes',
            color: 'Dark Brown',
            image:"/Images/men_shoe_7.webp"
        },
        {
            id: 8,
            name: 'Slip-On Sneakers',
            color: 'Grey',
            image:"/Images/men_shoe_8.webp"
        },
        {
            id: 6,
            name: 'High-Top Sneakers',
            color: 'Black',
            image:"/Images/men_shoe_6.webp"
        },
        {
            id: 9,
            name: 'Desert Boots',
            color: 'Tan',
            image: "/Images/men_shoe_9.webp"
        },
        {
            id: 10,
            name: 'Leather Sandals',
            color: 'Black',
            image:"/Images/men_shoe_10.webp"
        }
    ];

    return (
        <div className="menshoe-page">
            <div className="collection-header">
                <h1>MEN'S SHOES</h1>
                <p>Contemporary designs with premium craftsmanship</p>
                <div className="header-divider"></div>
            </div>

            <div className="shoe-container">
                {shoes.map((shoe) => (
                    <div
                        key={shoe.id}
                        className="shoe-item"
                       // onClick={() => navigate(`/product/shoes/${shoe.id}`)}
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

export default Menshoe;