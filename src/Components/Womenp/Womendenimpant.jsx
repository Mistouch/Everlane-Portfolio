import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womendenimpant.css";
import Footer from "../Footerr/Footer,jsx";

const Womendenimpant = () => {
    const navigate = useNavigate();

    const denimPants = [
        { id: 1, name: "SKINNY FIT JEANS", color: "DARK WASH" ,image:  "/Images/w_denim_pant_1.png"},
        { id: 2, name: "MOM JEANS", color: "MEDIUM WASH", image: "/Images/w_denim_pant_2.png" },
        { id: 3, name: "BOOTCUT JEANS", color: "BLACK",image: "/Images/w_denim_pant_3.png" },
        { id: 4, name: "FLARED JEANS", color: "LIGHT WASH", image: "/Images/w_denim_pant_4.png" },
        { id: 5, name: "STRAIGHT LEG JEANS", color: "Dark Blue", image: "/Images/w_denim_pant_5.png" },
        { id: 6, name: "BOYFRIEND JEANS", color: "DISTRESSED", image: "/Images/w_denim_pant_6.png"},
        { id: 7, name: "HIGH WAISTED JEANS", color: "WHITE", image: "/Images/w_denim_pant_7.png" },
        { id: 8, name: "CROPPED JEANS", color: "GRAY", image:"/Images/w_denim_pant_8.png" },
        { id: 9, name: "WIDE LEG JEANS", color: "SKY BLUE", image: "/Images/w_denim_pant_9.png" },
        { id: 10, name: "JEGGINGS", color: "Light Gray", image: "/Images/w_denim_pant_10.png"}
    ];

    return (
        <>
            <div className="womenwoven-container">
                <h1 className="collection-title">WOMEN'S DENIM PANTS COLLECTION</h1>

                <div className="womenwoven-grid">
                    {denimPants.map((pants) => (
                        <div key={pants.id} className="womenwoven-item">
                            <div className="womenwoven-image-container">
                                <img
                                    src={pants.image || "https://via.placeholder.com/300x400?text=DENIM"}
                                    alt={pants.name}
                                    className="womenwoven-image"
                                />
                            </div>
                            <div className="womenwoven-details">
                                <h3 className="womenwoven-name">{pants.name}</h3>
                                <p className="womenwoven-color">{pants.color}</p>
                                <p className="womenwoven-material">{pants.material}</p>
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

export default Womendenimpant;