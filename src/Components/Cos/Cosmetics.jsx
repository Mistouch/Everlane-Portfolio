import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cosmetics.css';
import Footer from "../Footerr/Footer,jsx";

const Cosmetics = () => {
    const navigate = useNavigate();

    // 20 Cosmetic Products (without prices)
    const cosmeticsItems = [
        { id: 1, name: 'MATTE LIPSTICK', brand: 'BEAUTYGLOW', image:  "/Images/w_cos_1.webp" },
        { id: 2, name: 'HYDRATING FOUNDATION', brand: 'SKINPERFECT', image:  "/Images/w_cos_2.webp"},
        { id: 3, name: 'VOLUME MASCARA', brand: 'LASHQUEEN', image:  "/Images/w_cos_3.webp"},
        { id: 4, name: 'BLUSH PALETTE', brand: 'CHEEKY', image:  "/Images/w_cos_4.webp" },
        { id: 5, name: 'EYESHADOW PALETTE', brand: 'COLORPOP', image:  "/Images/w_cos_5.webp" },
        { id: 6, name: 'HIGHLIGHTER STICK', brand: 'GLOWUP', image:  "/Images/w_cos_6.webp"},
        { id: 7, name: 'LIQUID EYELINER', brand: 'PRECISIONLINE', image:  "/Images/w_cos_7.webp" },
        { id: 8, name: 'SETTING SPRAY', brand: 'FIXIT', image:  "/Images/w_cos_8.webp"},
        { id: 10, name: 'BROW PENCIL', brand: 'ARCHIT', image:  "/Images/w_cos_10.webp"},
        { id: 12, name: 'LIP GLOSS SET', brand: 'SHINEON', image:  "/Images/w_cos_12.webp"},
        { id: 14, name: 'BRONZER', brand: 'SUNKISSED', image:  "/Images/w_cos_14.webp" },
        { id: 15, name: 'LIP LINER', brand: 'DEFINEIT', image:  "/Images/w_cos_15.webp" }
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