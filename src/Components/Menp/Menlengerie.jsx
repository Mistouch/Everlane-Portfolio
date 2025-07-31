import React from "react";
import './Menlengerie.css'; // Create this CSS file
import Footer from "../Footerr/Footer,jsx";
import {useNavigate} from "react-router-dom";
const Men_lingerie = () => {
    const navigate = useNavigate();
    const underwear = [
        {
            id: 1,
            name: 'MicroModal Boxer Briefs',
            description: 'Breathable fabric with ergonomic pouch',
            image: "/Images/men_under_1.webp"
        },
        {
            id: 2,
            name: 'Sport Performance Trunks',
            description: 'Moisture-wicking with anti-odor technology',
            image:"/Images/men_under_2.webp"
        },
        {
            id: 3,
            name: 'Classic Cotton Briefs',
            description: '100% organic cotton with tagless design',
            image: "/Images/men_under_3.webp"
        },
        {
            id: 4,
            name: 'Seamless Hipster',
            description: 'Invisible under clothing with 4-way stretch',
            image:"/Images/men_under_4.webp"
        },
        {
            id: 5,
            name: 'Luxury Silk Boxers',
            description: 'Charmeuse silk with adjustable waistband',
            image: "/Images/men_under_5.webp"
        }
    ];

    return (
        <>
        <div className="underwear-container">
            <h2>Premium Men's Underwear</h2>
            <div className="underwear-grid">
                {underwear.map(item => (
                    <div key={item.id} className="underwear-card">
                        <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                        />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
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

export default Men_lingerie;