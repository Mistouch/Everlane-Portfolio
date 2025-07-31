import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cosmetics.css';
import Footer from "../Footerr/Footer,jsx";

const Cosmetics = () => {
    const navigate = useNavigate();

    // 20 Cosmetic Products (without prices)
    const cosmeticsItems = [
        { id: 1, name: 'MATTE LIPSTICK', brand: 'BEAUTYGLOW', image:  "/Images/w_cos_1.png" },
        { id: 2, name: 'HYDRATING FOUNDATION', brand: 'SKINPERFECT', image:  "/Images/w_cos_2.png"},
        { id: 3, name: 'VOLUME MASCARA', brand: 'LASHQUEEN', image:  "/Images/w_cos_3.png"},
        { id: 4, name: 'BLUSH PALETTE', brand: 'CHEEKY', image:  "/Images/w_cos_4.png" },
        { id: 5, name: 'EYESHADOW PALETTE', brand: 'COLORPOP', image:  "/Images/w_cos_5.png" },
        { id: 6, name: 'HIGHLIGHTER STICK', brand: 'GLOWUP', image:  "/Images/w_cos_6.png"},
        { id: 7, name: 'LIQUID EYELINER', brand: 'PRECISIONLINE', image:  "/Images/w_cos_7.png" },
        { id: 8, name: 'SETTING SPRAY', brand: 'FIXIT', image:  "/Images/w_cos_8.png"},
        { id: 10, name: 'BROW PENCIL', brand: 'ARCHIT', image:  "/Images/w_cos_10.png"},
        { id: 12, name: 'LIP GLOSS SET', brand: 'SHINEON', image:  "/Images/w_cos_12.png"},
        { id: 14, name: 'BRONZER', brand: 'SUNKISSED', image:  "/Images/w_cos_14.png" },
        { id: 15, name: 'LIP LINER', brand: 'DEFINEIT', image:  "/Images/w_cos_15.png" }
    ];

    return (
        <>
        <div className="cosmetics-page">
            <header className="cosmetics-header">
                <h1>COSMETICS</h1>
                <p>Premium beauty essentials</p>
            </header>

            <div className="cosmetics-grid">
                {cosmeticsItems.map((product) => (
                    <div key={product.id} className="cosmetic-card">
                        <div className="cosmetic-image-container">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="cosmetic-image"
                                loading="lazy"
                            />
                            <span className="product-rating">{product.rating}</span>
                        </div>
                        <div className="cosmetic-details">
                            <h3>{product.name}</h3>
                            <p className="brand-name">{product.brand}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
            <Footer />
            </>
    );
};

export default Cosmetics;