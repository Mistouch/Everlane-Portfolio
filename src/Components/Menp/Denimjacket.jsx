
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
            image: "/MenDenimJacket/1.png"
        },
        {
            id: 2,
            name: 'BLACK DENIM',
            details: 'Slim-fit | Matte finish',
            image: "/MenDenimJacket/2.png"
        },
        {
            id: 3,
            name: 'VINTAGE WASHED',
            details: 'Distressed | Authentic wear',
            image:  "/MenDenimJacket/3.png"
        },
        {
            id: 4,
            name: 'OVERSIZED FIT',
            details: 'Relaxed | Dropped shoulders',
            image :  "/MenDenimJacket/4.png"
        },
        {
            id: 5,
            name: 'SHERPA-LINED',
            details: 'Fleece lining | Cold weather',
            image:  "/MenDenimJacket/5.png"
        },
        {
            id: 6,
            name: 'LIGHT WASH',
            details: 'Summer-weight | Faded',
            image:  "/MenDenimJacket/6.png"
        },
        {
            id: 7,
            name: 'BIKER STYLE',
            details: 'Asymmetric zip | Snap cuffs',
            image :  "/MenDenimJacket/7.png"
        },
        {
            id: 8,
            name: 'EMBROIDERED',
            details: 'Floral details | Back panel',
            image:  "/MenDenimJacket/8.png"
        },
        {
            id: 9,
            name: 'CROPPED FIT',
            details: 'Short length | Raw hem',
            image:  "/MenDenimJacket/9.png"
        },
        {
            id: 10,
            name: 'SELVEDGE DENIM',
            details: 'Japanese | Premium quality',
            image:  "/MenDenimJacket/10.png"
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