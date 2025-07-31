import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Womenshirt.css";
import { useNavigate } from "react-router-dom";
const Womenshirt = () => {
    const navigate = useNavigate();

    // Women's t-shirt data
    const tshirts = [
        { id: 1, name: "CLASSIC WHITE BLOUSE", color: "White", image: "/Images/w_tee_1.webp" },
        { id: 2, name: "BLACK V-NECK TEE", color: "Black", image: "/Images/w_tee_2.webp" },
        { id: 3, name: "FLORAL PRINT TOP", color: "Navy/Pink", image: "/Images/w_tee_3.webp" },
        { id: 4, name: "OVERSIZED GRAY TEE", color: "Heather Gray", image: "/Images/w_tee_4.webp" },
        { id: 5, name: "CROPPED PINK TEE", color: "Pink", image: "/Images/w_tee_5.webp" },
        { id: 6, name: "STRIPED BOAT NECK", color: "Red/White", image: "/Images/w_tee_6.webp" },
        { id: 7, name: "SATIN CAMISOLE", color: "Black", image: "/Images/w_tee_7.webp" },
        { id: 8, name: "RUFFLED BLOUSE", color: "Mint", image: "/Images/w_tee_8.webp" },
        { id: 9, name: "WRAP FRONT TOP", color: "Leopard Print",image: "/Images/w_tee_9.webp" },
        { id: 10, name: "LACE TRIM TEE", color: "Ivory", image: "/Images/w_tee_10.webp" },
        { id: 11, name: "COLD SHOULDER TOP", color: "Royal Blue", image: "/Images/w_tee_11.webp" },
        { id: 12, name: "SATIN IE-WAIST BLOUSE", color: "Mint", image: "/Images/w_tee_12.webp" },
        { id: 13, name: "SILK BUTTON-DOWN", color: "Golden", image: "/Images/w_tee_13.webp" },
        { id: 14, name: "OFF-SHOULDER TOP", color: "Yellow", image: "/Images/w_tee_14.webp" },
        { id: 15, name: "BELTED TUNIC", color: "Emerald", image: "/Images/w_tee_15.webp" }
    ];

    return (
        <>
            <div className="womenshirt-container">
                <h2 className="collection-title">WOMEN'S TOPS COLLECTION</h2>
                <div className="womenshirt-grid">
                    {tshirts.map((tshirt) => (
                        <div key={tshirt.id} className="womenshirt-item">
                            <div className="womenshirt-image-container">
                                <img
                                    src={tshirt.image}
                                    alt={tshirt.name}
                                    className="womenshirt-image"
                                />
                            </div>
                            <div className="womenshirt-details">
                                <h3 className="womenshirt-name">{tshirt.name}</h3>
                                <p className="womenshirt-color">{tshirt.color}</p>
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

export default Womenshirt;