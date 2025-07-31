import React from "react";
import './Menwoven.css'; // We'll create this CSS file
import Footer from "../Footerr/Footer,jsx";

import {useNavigate} from "react-router-dom";
const Menwoven = () => {
    const navigate = useNavigate();
    // 15 Men's Woven Items
    const wovenItems = [
        {
            id: 1,
            name: 'Linen Camp Shirt',
            description: 'Breathable 100% linen summer shirt',
            image: "/Images/men_woven_1.png"
        },
        {
            id: 2,
            name: 'Chambray Workshirt',
            description: 'Durable cotton chambray workshirt',
            image:  "/Images/men_woven_2.png"
        },
        {
            id: 3,
            name: 'Denim Western Shirt',
            description: 'Classic denim shirt with pearl snaps',
            image:  "/Images/men_woven_3.png"
        },
        {
            id: 4,
            name: 'Seersucker Shirt',
            description: 'Lightweight puckered cotton shirt',
            image: "/Images/men_woven_4.png"
        },
        {
            id: 5,
            name: 'Oxford Button-Down',
            description: 'Crisp cotton oxford dress shirt',
            image:  "/Images/men_woven_5.png"
        },
        {
            id: 6,
            name: 'Herringbone Tunic',
            description: 'Wool-blend herringbone pattern tunic',
            image:  "/Images/men_woven_6.png"
        },
        {
            id: 7,
            name: 'Loom & Line',
            description: 'Timeless weave, modern style.',
            image:  "/Images/men_woven_7.png"
        },

        {
            id: 9,
            name: 'Barong Tagalog',
            description: 'Filipino formal embroidered shirt',
            image:  "/Images/men_woven_9.png"
        },
        {
            id: 10,
            name: 'Guayabera Shirt',
            description: 'Cuban-style pleated linen shirt',
            image: "/Images/men_woven_10.png"
        },

        {
            id: 13,
            name: 'Band Collar Shirt',
            description: 'Modern Mandarin collar shirt',
            image: "/Images/men_woven_13.png"
        },
        {
            id: 14,
            name: 'Twill Overshirt',
            description: 'Structured cotton-twill overshirt',
            image:  "/Images/men_woven_14.png"
        },
        {
            id: 15,
            name: 'Jacquard Shirt',
            description: 'Ornate woven jacquard pattern shirt',
            image:  "/Images/men_woven_15.png"
        }
    ];

    return (
        <>
            <div className="menwoven-container">
            <header className="menwoven-header">
                <h1>Men's Woven Collection</h1>
                <p>Traditional and contemporary woven garments</p>
            </header>

            <div className="woven-grid">
                {wovenItems.map((item) => (
                    <div key={item.id} className="woven-item">
                        <div className="woven-image">
                            <img
                                src={item.image}
                                alt={item.name}
                                loading="lazy"
                            />
                        </div>
                        <div className="woven-details">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
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

export default Menwoven;