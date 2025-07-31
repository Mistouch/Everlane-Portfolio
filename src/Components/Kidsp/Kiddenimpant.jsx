import React from "react";
import Footer from "../Footerr/Footer,jsx";
import './Kiddenimpant.css';
import { useNavigate } from "react-router-dom";

const Kiddenimpant = () => {
    const navigate = useNavigate();

    // Sample kids denim pants data with prices added
    const kidDenimPants = [
        { id: 1, name: "Classic Blue Jeans", color: "Light Blue", fit: "Regular", image:"/Images/k_pant_1.webp" },
        { id: 2, name: "Slim Fit Jeans", color: "Dark Blue", fit: "Slim", image: "/Images/k_pant_2.webp" },
        { id: 3, name: "Distressed Denim", color: "Medium Wash", fit: "Regular",  image: "/Images/k_pant_3.webp" },
        { id: 4, name: "Skinny Jeans", color: "Black", fit: "Skinny",  image:"/Images/k_pant_4.webp" },
        { id: 5, name: "Cargo Denim", color: "Stone Wash", fit: "Relaxed", image: "/Images/k_pant_5.webp" },
        { id: 6, name: "Patched Jeans", color: "Light Wash", fit: "Regular", image: "/Images/k_pant_6.webp"},
        { id: 7, name: "Ripped Jeans", color: "Medium Blue", fit: "Slim", image: "/Images/k_pant_7.webp" },
        { id: 8, name: "Stretch Denim", color: "Dark Wash", fit: "Skinny", image: "/Images/k_pant_8.webp" },
        { id: 9, name: "Wide Leg Jeans", color: "Vintage Blue", fit: "Wide",image: "/Images/k_pant_9.webp" },
        { id: 10, name: "Denim Overalls", color: "Denim Blue", fit: "Regular",  image:"/Images/k_pant_10.webp"}
    ];

    return (
        <>
            <div className="kid-denim-pants-page">
                <header className="page-header">
                    <h1 className="collection-title">KIDS DENIM PANT</h1>
                </header>

                <div className="pants-grid">
                    {kidDenimPants.map((pant) => (
                        <div key={pant.id} className="pant-card">
                            <div className="pant-image-container">
                                <img
                                    src={pant.image}
                                    alt={pant.name}
                                    className="product-image"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                    }}
                                />
                            </div>
                            <div className="pant-info">
                                <h3 className="product-name">{pant.name}</h3>
                                <p className="product-details">{pant.color} | {pant.fit}</p>
                                <p className="product-price">{pant.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <Footer />
        </>

    );
};

export default Kiddenimpant;