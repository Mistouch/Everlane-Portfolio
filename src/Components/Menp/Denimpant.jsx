import React from "react";
import './Denimpant.css';
import Footer from "../Footerr/Footer,jsx";
import {useNavigate} from "react-router-dom";
const Denimpant = () => {
    const navigate = useNavigate();
    // 15 Men's Denim Pants Samples
    const denimPants = [
        {
            id: 1,
            name: 'Classic Straight Fit',
            description: 'Mid-blue',
            image:  "/Images/men_denim_pant_1.png"
        },
        {
            id: 2,
            name: 'Slim Fit Jeans',
            description: 'Stretch denim',
            image:  "/Images/men_denim_pant_2.png"
        },
        {
            id: 3,
            name: 'Relaxed Fit',
            description: 'Loose fit',
            image: "/Images/men_denim_pant_3.png"
        },
        {
            id: 4,
            name: 'Black Denim',
            description: 'Washed denim',
            image:"/Images/men_denim_pant_4.png"
        },
        {
            id: 5,
            name: 'Vintage Wash',
            description: 'Light distressed',
            image:"/Images/men_denim_pant_5.png"
        },
        {
            id: 6,
            name: 'Dark Indigo',
            description: 'Deep indigo',
            image: "/Images/men_denim_pant_6.png"
        },
        {
            id: 7,
            name: 'Carpenter Jeans',
            description: 'Tool pockets',
            image: "/Images/men_denim_pant_7.png"
        },
        {
            id: 8,
            name: 'Selvedge Denim',
            description: 'Selvedge',
            image: "/Images/men_denim_pant_8.png"
        },

        {
            id: 10,
            name: 'Patchwork Denim',
            description: 'Patch designs',
            image: "/Images/men_denim_pant_10.png"
        },
        {
            id: 11,
            name: 'Wide Leg',
            description: 'Wide',
            image: "/Images/men_denim_pant_11.png"
        },
        {
            id: 13,
            name: 'Eco-Washed',
            description: 'Eco',
            image:"/Images/men_denim_pant_13.png"
        },
        {
            id: 14,
            name: 'Biker Jeans',
            description: 'Reinforced',
            image: "/Images/men_denim_pant_14.png"
        }

    ];

    return (
        <>
        <div className="denim-container">
            <header className="denim-header">
                <h1>Men's Denim Collection</h1>
                <p>Premium jeans for every style and occasion</p>
            </header>

            <div className="denim-grid">
                {denimPants.map((pant) => (
                    <div key={pant.id} className="denim-card">
                        <div className="denim-image">
                            <img
                                src={pant.image}
                                alt={pant.name}
                                loading="lazy"
                            />
                        </div>
                        <div className="denim-details">
                            <h3>{pant.name}</h3>
                            <p>{pant.description}</p>
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

export default Denimpant;