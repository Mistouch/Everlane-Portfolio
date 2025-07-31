import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womensweater.css";
import Footer from "../Footerr/Footer,jsx";
const Womensweater = () => {
    const navigate = useNavigate();

    // Women's sweater data
    const sweaters = [
        { id: 1, name: "CASHMERE CREWNECK", color: "Purple", image: "/Images/w_sewater_1.webp" },
        { id: 2, name: "CHUNKY KNIT CARDIGAN", color: "Camel", image: "/Images/w_sweater_2.webp" },
        { id: 3, name: "TURTLENECK SWEATER", color: "Black", image: "/Images/w_sewater_3.webp" },
        { id: 4, name: "OVERSIZED CABLE KNIT", color: "Cream", image: "/Images/w_sewater_4.webp"},
        { id: 5, name: "V-NECK MERINO WOOL", color: "Navy Blue", image:"/Images/w_sewater_5.webp" },
        { id: 6, name: "CROPPED MOHAIR SWEATER", color: "Pink", image: "/Images/w_sewater_6.webp" },
        { id: 7, name: "FISHERMAN RIB SWEATER", color: "Ash", image: "/Images/w_sewater_7.webp" },
        { id: 8, name: "BELTED CARDIGAN", color: "Cream White", image: "/Images/w_sewater_8.webp" },
        { id: 9, name: "ALPACA BLEND SWEATER", color: "Moss Green", image: "/Images/w_sewater_9.webp" },
        { id: 10, name: "OFF-SHOULDER SWEATER", color: "Dusty Rose", image: "/Images/w_sewater_10.webp"}
    ];

    return (
        <>
            <div className="womensweater-container">
                <h2 className="collection-title">WOMEN'S SWEATER COLLECTION</h2>
                <div className="womensweater-grid">
                    {sweaters.map((sweater) => (
                        <div key={sweater.id} className="womensweater-item">
                            <div className="womensweater-image-container">
                                <img
                                    src={sweater.image}
                                    alt={sweater.name}
                                    className="womensweater-image"
                                />
                            </div>
                            <div className="womensweater-details">
                                <h3 className="womensweater-name">{sweater.name}</h3>
                                <p className="womensweater-color">{sweater.color}</p>
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

export default Womensweater;