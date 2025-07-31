import react from "react";
import Footer from "../Footerr/Footer,jsx";

import './Mensweater.css'
import React from "react";
import {useNavigate} from "react-router-dom";
const Men_sweater = () => {
    const navigate = useNavigate();
    const sweaters = [
        {
            id: 1,
            name: 'Crewneck Sweater',
            description: 'Classic wool blend crewneck sweater',
            image: "/Images/men_sweater_1.webp"
        },
        {
            id: 2,
            name: 'V-Neck Sweater',
            description: 'Lightweight merino wool v-neck',
            image: "/Images/men_sweater_2.webp"
        },
        {
            id: 3,
            name: 'Turtleneck Sweater',
            description: 'Warm cashmere blend turtleneck',
            image: "/Images/men_sweater_3.webp"
        },
        {
            id: 4,
            name: 'Cardigan Sweater',
            description: 'Button-front cardigan with pockets',
            image:"/Images/men_sweater_4.webp"
        },
        {
            id: 5,
            name: 'Cable Knit Sweater',
            description: 'Traditional cable knit pattern sweater',
            image: "/Images/men_sweater_5.webp"
        },
        {
            id: 6,
            name: 'Quarter-Zip Sweater',
            description: 'Performance wool quarter-zip pullover',
            image: "/Images/men_sweater_6.webp"
        },
        {
            id: 7,
            name: 'Shawl Collar Sweater',
            description: 'Luxurious shawl collar cardigan',
            image:"/Images/men_sweater_7.webp"
        },
        {
            id: 8,
            name: 'Fisherman Sweater',
            description: 'Chunky knit fisherman sweater',
            image:"/Images/men_sweater_8.webp"
        },
        {
            id: 9,
            name: 'Cashmere Crewneck',
            description: '100% pure cashmere crewneck',
            image:"/Images/men_sweater_9.webp"
        },
        {
            id: 10,
            name: 'Wool Blend Hoodie',
            description: 'Warm wool blend hooded sweater',
            image: "/Images/men_sweater_10.webp"
        },
        {
            id: 11,
            name: 'Alpaca Wool Sweater',
            description: 'Hypoallergenic alpaca wool sweater',
            image: "/Images/men_sweater_11.webp"
        },
        {
            id: 12,
            name: 'Mock Neck Sweater',
            description: 'Contemporary mock neck design',
            image: "/Images/men_sweater_12.webp"
        },
        {
            id: 13,
            name: 'Fair Isle Sweater',
            description: 'Traditional Nordic patterned sweater',
            image: "/Images/men_sweater_13.webp"
        },
        {
            id: 14,
            name: 'Cotton-Cashmere Blend',
            description: 'Lightweight cotton-cashmere mix',
            image: "/Images/men_sweater_14.webp"
        },
        {
            id: 15,
            name: 'Merino Wool Zip',
            description: 'Performance merino wool zip sweater',
            image:"/Images/men_sweater_15.webp"
        }
    ];

    return (

        <>
        <div className="sweater-container">
            <header className="sweater-header">
                <h1>Men's Premium Sweaters</h1>
                <p>Handcrafted comfort for every occasion</p>
            </header>

            <div className="sweater-grid">
                {sweaters.map((sweater) => (
                    <div key={sweater.id} className="sweater-card">
                        <div className="sweater-image-wrapper">
                            <img
                                src={sweater.image}
                                alt={sweater.name}
                                loading="lazy"
                            />
                        </div>
                        <div className="sweater-info">
                            <h3>{sweater.name}</h3>
                            <p>{sweater.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    <div className="full-width-footer">
        <Footer />
    </div>
</>
    );
};

export default Men_sweater;