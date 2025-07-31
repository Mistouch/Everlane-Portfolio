import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Kidshirt.css";
import { useNavigate } from "react-router-dom";

const Kidshirt = () => {
    const navigate = useNavigate();

    // Sample kids t-shirt data
    const kidsShirts = [
        { id: 1, name: "Colorful Dinosaur Tee", color: "Multicolor", image: "/Images/k_tee_1.webp" },
        { id: 2, name: "Space Adventure Shirt", color: "Black", image: "/Images/k_tee_2.webp"},
        { id: 5, name: "Animal Friends Shirt", color: "Green", image: "/Images/k_tee_5.webp" },
        { id: 3, name: "Unicorn Magic Top", color: "Pink", image:"/Images/k_tee_3.webp" },
        { id: 4, name: "Superhero Logo Tee", color: "Red", image: "/Images/k_tee_4.webp" },
        { id: 6, name: "Stripes Tee", color: "Green/white", image: "/Images/k_tee_6.webp"},
        { id: 7, name: "Sports Fan Top", color: "White", image: "/Images/k_tee_7.webp" },
        { id: 8, name: "Romper Jumpsuit", color: "Khaki", image: "/Images/k_tee_8.webp" },
        { id: 9, name: "Cartoon Character Tee", color: "Yellow", image: "/Images/k_tee_9.webp" },
        { id: 10, name: "Butterfly Print Top", color: "Purple", image:"/Images/k_tee_10.webp" }
    ];

    return (
        <>
            <div className="kidshirt-page">
                <header className="page-header">
                    <h1 className="collection-title">KID'S T-SHIRTS</h1>
                </header>

                <div className="tshirts-grid">
                    {kidsShirts.map((shirt) => (
                        <div key={shirt.id} className="tshirt-card">
                            <div className="tshirt-image-container">
                                <img
                                    src={shirt.image}
                                    alt={shirt.name}
                                    className="product-image"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                    }}
                                />
                            </div>
                            <div className="tshirt-info">
                                <h3 className="product-name">{shirt.name}</h3>
                                <p className="product-color">{shirt.color}</p>
                                <p className="product-price">{shirt.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Kidshirt;