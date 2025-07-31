import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Kiddenimjacket.css";
import { useNavigate } from "react-router-dom";

const Kiddenimjacket = () => {
    const navigate = useNavigate();

    // Sample kids denim jackets data with prices added
    const kidDenimJackets = [
        { id: 1, name: "Classic Blue Denim Jacket", color: "Light Blue", image: "/Images/k_jacket_1.png" },
        { id: 2, name: "Distressed Denim Jacket", color: "Medium Blue", image:  "/Images/k_jacket_2.png"},
        { id: 3, name: "Black Denim Jacket", color: "Black", image:  "/Images/k_jacket_3.png" },
        { id: 4, name: "Embroidered Denim Jacket", color: "Light Wash", image:  "/Images/k_jacket_4.png" },
        { id: 5, name: "Oversized Denim Jacket", color: "Dark Blue",image: "/Images/k_jacket_5.png"},
        { id: 6, name: "Acid Wash Denim Jacket", color: "Grey Wash", image:  "/Images/k_jacket_6.png"},
        { id: 7, name: "Cropped Denim Jacket", color: "Medium Blue",  image:  "/Images/k_jacket_7.png" },
        { id: 8, name: "Pink Denim Jacket", color: "Pink", image:  "/Images/k_jacket_8.png" },
        { id: 9, name: "Patched Denim Jacket", color: "Dark Wash", image:  "/Images/k_jacket_9.png" },
        { id: 10, name: "Faded Denim Jacket", color: "Vintage Blue",  image:  "/Images/k_jacket_10.png" }
    ];

    return (
        <>
            <div className="kid-denim-page">
            <header className="page-header">
                <h1 className="collection-title">KID'S DENIM JACKETS</h1>
            </header>

            <div className="jackets-grid">
                {kidDenimJackets.map((jacket) => (
                    <div key={jacket.id} className="jacket-card">
                        <div className="jacket-image-container">
                            <img
                                src={jacket.image}
                                alt={jacket.name}
                                className="product-image"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                }}
                            />
                        </div>
                        <div className="jacket-info">
                            <h3 className="product-name">{jacket.name}</h3>
                            <p className="product-color">{jacket.color}</p>
                            <p className="product-price">{jacket.price}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    <Footer />
    </>
    );
};

export default Kiddenimjacket;