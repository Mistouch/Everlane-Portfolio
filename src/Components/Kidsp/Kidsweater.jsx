import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Kidsweater.css";
import { useNavigate } from "react-router-dom";

const Kidsweater = () => {
    const navigate = useNavigate();

    // Sample kids sweater data with prices added
    const kidsSweaters = [
        { id: 1, name: "Cozy Bear Sweater", color: "Light Blue", image: "/Images/k_sweater_1.webp" },
        { id: 2, name: "Striped Wool Sweater", color: "Navy/White", image: "/Images/k_sweater_2.webp" },
        { id: 3, name: "Reindeer Pattern", color: "Red", image: "/Images/k_sweater_3.webp" },
        { id: 4, name: "Cardigan", color: "Multicolor", image: "/Images/k_sweater_4.webp" },
        { id: 5, name: "Knit Cable Sweater", color: "Cream",  image: "/Images/k_sweater_5.webp" },
        { id: 6, name: "Dinosaur Hoodie", color: "Green", image: "/Images/k_sweater_6.webp" },
        { id: 7, name: "High Neck Fleece Jacket", color: "Pink",  image: "/Images/k_sweater_7.webp" },
        { id: 8, name: "Snowflake Pattern", color: "Black",  image:"/Images/k_sweater_8.webp" },
        { id: 9, name: "Animal Ear Hoodie", color: "Gray",  image: "/Images/k_sweater_9.webp" },
        { id: 10, name: "Cotton Sweater", color: "Dak blue",  image: "/Images/k_sweater_10.webp" }
    ];

    return (
        <>
        <div className="kidsweater-page">
            <header className="page-header">
                <h1 className="collection-title">KID'S SWEATERS</h1>
            </header>

            <div className="sweaters-grid">
                {kidsSweaters.map((sweater) => (
                    <div key={sweater.id} className="sweater-card">
                        <div className="sweater-image-container">
                            <img
                                src={sweater.image}
                                alt={sweater.name}
                                className="product-image"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                }}
                            />
                        </div>
                        <div className="sweater-info">
                            <h3 className="product-name">{sweater.name}</h3>
                            <p className="product-color">{sweater.color}</p>
                            <p className="product-price">{sweater.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
    </>
    );
};

export default Kidsweater;