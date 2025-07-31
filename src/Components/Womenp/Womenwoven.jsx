import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womenwoven.css";
import Footer from "../Footerr/Footer,jsx";

const Womenwoven = () => {
    const navigate = useNavigate();

    // Women's woven products data
    const wovenProducts = [
        { id: 1, name: "CLASSIC BLACK BLOUSE", color: "Black", material: "100% Cotton", image: "/Images/w_woven_1.webp" },
        { id: 2, name: "SILK BUTTON-DOWN SHIRT", color: "Creamy White", material: "Pure Silk", image: "/Images/w_woven_2.webp" },
        { id: 3, name: "LINEN CAMP SHIRT", color: "White", material: "Organic Linen", image: "/Images/w_woven_3.webp" },
        { id: 4, name: "DENIM SHIRT", color: "Light Wash", material: "Cotton Denim", image: "/Images/w_woven_4.webp" },
        { id: 5, name: "CHAMBRAY POPOVER", color: "Sky Blue", material: "Chambray", image: "/Images/w_woven_5.webp" },
        { id: 6, name: "PLAID FLANNEL SHIRT", color: "Red/Black", material: "Brushed Cotton", image: "/Images/w_woven_6.webp" },
        { id: 7, name: "TWILL UTILITY SHIRT", color: "Olive Green", material: "Cotton Twill", image: "/Images/w_woven_7.webp" },
        { id: 8, name: "SEERSUCKER BLOUSE", color: "Navy/White", material: "Seersucker", image: "/Images/w_woven_8.webp" },
        { id: 9, name: "BOUCLÉ JACKET", color: "Cream", material: "Wool Bouclé", image: "/Images/w_woven_9.webp" },
        { id: 10, name: "TAFFETA BLOUSE", color: "Black", material: "Silk Taffeta", image: "/Images/w_woven_10.webp" }
    ];

    return (
        <>
            <div className="womenwoven-container">
                <h2 className="collection-title">WOMEN'S WOVEN COLLECTION</h2>
                <div className="womenwoven-grid">
                    {wovenProducts.map((product) => (
                        <div key={product.id} className="womenwoven-item">
                            <div className="womenwoven-image-container">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="womenwoven-image"
                                />
                            </div>
                            <div className="womenwoven-details">
                                <h3 className="womenwoven-name">{product.name}</h3>
                                <p className="womenwoven-color">{product.color}</p>
                                <p className="womenwoven-material">{product.material}</p>
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

export default Womenwoven;