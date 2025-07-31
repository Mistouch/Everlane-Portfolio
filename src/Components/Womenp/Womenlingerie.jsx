import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womenlingerie.css";

import Footer from "../Footerr/Footer,jsx";

const Womenlingerie = () => {
    const navigate = useNavigate();

    // Women's lingerie data
    const lingerieItems = [
        { id: 1, name: "Lace Bralette Set", color: "Black", type: "Bra & Panty Set", image: "/Images/w_lingerie_1.webp"},
        { id: 2, name: "Silk Chemise", color: "Black", type: "Nightwear", image: "/Images/w_lingerie_2.webp" },
        { id: 3, name: "Push-Up Bra", color: "Nude", type: "Underwire Bra", image: "/Images/w_lingerie_3.webp" },
        { id: 4, name: "High-Waist Briefs", color: "Burgundy", type: "Panties", image: "/Images/w_lingerie_4.webp"},
        { id: 5, name: "Bodysuit", color: "Navy", type: "Shapewear", image: "/Images/w_lingerie_5.webp" },
        { id: 6, name: "Babydoll Set", color: "Blush Pink", type: "Sleepwear Set", image: "/Images/w_lingerie_6.webp" },
        { id: 7, name: "Sports Bra", color: "Gray", type: "Activewear", image: "/Images/w_lingerie_7.webp"},
        { id: 8, name: "Thong Panties", color: "Red", type: "Underwear", image: "/Images/w_lingerie_8.webp" },
        { id: 9, name: "Teddies", color: "Emerald", type: "One-Piece", image: "/Images/w_lingerie_9.webp" },
        { id: 10, name: "Robes", color: "White", type: "Cover-up", image: "/Images/w_lingerie_10.webp" }
    ];

    return (
        <>
            <div className="womenlingerie-page">
                <div className="page-header">
                    <h1>LINGERIE COLLECTION</h1>
                    <p>Elegant essentials for every day</p>
                </div>

                <div className="lingerie-grid">
                    {lingerieItems.map(item => (
                        <div key={item.id} className="lingerie-card">
                            <div className="lingerie-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="lingerie-info">
                                <h3>{item.name}</h3>
                                <p>{item.color}</p>
                                <p className="price">{item.price}</p>
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

export default Womenlingerie;