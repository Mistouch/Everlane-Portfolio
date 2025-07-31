
import React from "react";
import { useNavigate } from "react-router-dom";
import './Denimjacket.css';
import Footer from "../Footerr/Footer,jsx";

const Denimjacket = () => {
    const navigate = useNavigate();

    const denimJackets = [
        {
            id: 1,
            name: 'CLASSIC BLUE DENIM',
            details: 'Medium wash | Metal buttons',
            image: "/Images/men_denim_jack_1.webp"
        },
        {
            id: 2,
            name: 'BLACK DENIM',
            details: 'Slim-fit | Matte finish',
            image: "/Images/men_denim_jack_2.webp"
        },
        {
            id: 3,
            name: 'VINTAGE WASHED',
            details: 'Distressed | Authentic wear',
            image:  "/Images/men_denim_jack_3.webp"
        },
        {
            id: 4,
            name: 'OVERSIZED FIT',
            details: 'Relaxed | Dropped shoulders',
            image :  "/Images/men_denim_jack_4.webp"
        },
        {
            id: 5,
            name: 'SHERPA-LINED',
            details: 'Fleece lining | Cold weather',
            image:  "/Images/men_denim_jack_5.webp"
        },
        {
            id: 6,
            name: 'LIGHT WASH',
            details: 'Summer-weight | Faded',
            image:  "/Images/men_denim_jack_6.webp"
        },
        {
            id: 7,
            name: 'BIKER STYLE',
            details: 'Asymmetric zip | Snap cuffs',
            image :  "/Images/men_denim_jack_7.webp"
        },
        {
            id: 8,
            name: 'EMBROIDERED',
            details: 'Floral details | Back panel',
            image:  "/Images/men_denim_jack_8.webp"
        },
        {
            id: 9,
            name: 'CROPPED FIT',
            details: 'Short length | Raw hem',
            image: "/Images/men_denim_jack_9.webp"
        },
        {
            id: 10,
            name: 'SELVEDGE DENIM',
            details: 'Japanese | Premium quality',
            image: "/Images/men_denim_jack_10.webp"
        }
    ];

    return (
        <>
            <div className="mendenimjacket-container">
                <h2 className="collection-title">MAN'S DENIM JACKETS</h2>
                <div className="mendenimjacket-grid">
                    {denimJackets.map((jacket) => (
                        <div key={jacket.id} className="mendenimjacket-item">
                            <div className="mendenimjacket-image-container">
                                <img
                                    src={jacket.image}
                                    alt={jacket.name}
                                    className="mendenimjacket-image"
                                />
                            </div>
                            <div className="mendenimjacket-details">
                                <h3 className="mendenimjacket-name">{jacket.name}</h3>
                                <p className="mendenimjacket-color">{jacket.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="full-width-footer">
                <Footer />
            </div>
        </>
    );;
};

export default Denimjacket;