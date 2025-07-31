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
            image: "/Images/men_shoe_1.png"
        },
        {
            id: 2,
            name: 'White Sneakers',
            color: 'White',
            image: "/Images/men_shoe_2.png"
        },
        {
            id: 3,
            name: 'Chelsea Boots',
            color: 'Brown',
            image: "/Images/men_shoe_3.png"
        },
        {
            id: 4,
            name: 'Running Shoes',
            color: 'Black/White',
            image:"/Images/men_shoe_4.png"
        },
        {
            id: 5,
            name: 'Loafers',
            color: 'Burgundy',
            image:"/Images/men_shoe_5.png"
        },

        {
            id: 7,
            name: 'Oxford Shoes',
            color: 'Dark Brown',
            image:"/Images/men_shoe_7.png"
        },
        {
            id: 8,
            name: 'Slip-On Sneakers',
            color: 'Grey',
            image:"/Images/men_shoe_8.png"
        },
        {
            id: 6,
            name: 'High-Top Sneakers',
            color: 'Black',
            image:"/Images/men_shoe_6.png"
        },
        {
            id: 9,
            name: 'Desert Boots',
            color: 'Tan',
            image: "/Images/men_shoe_9.png"
        },
        {
            id: 10,
            name: 'Leather Sandals',
            color: 'Black',
            image:"/Images/men_shoe_10.png"
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