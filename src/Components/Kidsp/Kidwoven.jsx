import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Kidwoven.css";
import { useNavigate } from "react-router-dom";

const Kidwoven = () => {
    const navigate = useNavigate();

    // Sample kids woven products data with prices added
    const kidWovens = [
        { id: 1, name: "Denim Overalls", color: "Blue", type: "Overalls",  image: "/Images/k_woven_1.png" },
        { id: 2, name: "Plaid Shirt", color: "Red/Black", type: "Shirt",  image: "/Images/k_woven_2.png" },
        { id: 8, name: "Twill Jumper", color: "Navy", type: "Jumper",  image: "/Images/k_woven_3.png" },
        { id: 3, name: "Khaki Shorts", color: "Beige", type: "Shorts", image: "/Images/k_woven_4.png" },
        { id: 4, name: "Denim Jacket", color: "Light Blue", type: "Jacket",  image: "/Images/k_woven_5.png" },
        { id: 5, name: "Checked Dress", color: "Yellow/White", type: "Dress",  image:"/Images/k_woven_6.png" },
        { id: 6, name: "Corduroy Pants", color: "Brown", type: "Pants",  image: "/Images/k_woven_7.png" },
        { id: 7, name: "Linen Shirt", color: "White", type: "Shirt",  image: "/Images/k_woven_8.png" },

        { id: 9, name: "Chambray Shirt", color: "Light Blue", type: "Shirt", image: "/Images/k_woven_9.png" },
        { id: 10, name: "Denim Skirt", color: "Dark Blue", type: "Skirt",  image: "/Images/k_woven_10.png" }
    ];

    return (
        <>
        <div className="kidwoven-page">
            <header className="page-header">
                <h1 className="collection-title">KID'S WOVEN</h1>
            </header>

            <div className="wovens-grid">
                {kidWovens.map((woven) => (
                    <div key={woven.id} className="woven-card">
                        <div className="woven-image-container">
                            <img
                                src={woven.image}
                                alt={woven.name}
                                className="product-image"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                }}
                            />
                        </div>
                        <div className="woven-info">
                            <h3 className="product-name">{woven.name}</h3>
                            <p className="product-details">{woven.color} | {woven.type}</p>
                            <p className="product-price">{woven.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    <Footer />
    </>
    );
};

export default Kidwoven;