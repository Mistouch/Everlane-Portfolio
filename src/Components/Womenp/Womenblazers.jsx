import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Womenblazers.css";
import { useNavigate } from "react-router-dom";
const Womenblazers = () => {
    const navigate = useNavigate();

    // Women's blazers data
    const blazers = [
        { id: 1, name: "CLASSIC BLACK BLAZER", color: "Black", image: "/Images/w_blazer_1.png" },
        { id: 2, name: "DOUBLE-BREASTED TWEED", color: "Beige/Black", image: "/Images/w_blazer_2.png" },
        { id: 3, name: "OVERSIZED WHITE BLAZER", color: "White", image: "/Images/w_blazer_3.png" },
        { id: 4, name: "TAILORED NAVY SUIT JACKET", color: "Navy", image: "/Images/w_blazer_4.png" },
        { id: 5, name: "BELTED CHECKERED BLAZER", color: "Gray", image: "/Images/w_blazer_5.png" },
        { id: 6, name: "CROPPED LEATHER JACKET", color: "Black", image: "/Images/w_blazer_6.png"},
        { id: 7, name: "LIGHTWEIGHT LINEN BLAZER", color: "Light Gray", image: "/Images/w_blazer_7.png" },
        { id: 8, name: "STRUCTURED SHOULDER BLAZER", color: "Camel", image: "/Images/w_blazer_8.png" },
        { id: 9, name: "SATIN LAPEL TUXEDO JACKET", color: "Black", image: "/Images/w_blazer_9.png" },
        { id: 10, name: "PASTEL PINK BLAZER", color: "Dusty Pink", image: "/Images/w_blazer_10.png" }
    ];

    return (
        <>
            <div className="womenblazers-container">
                <h2 className="collection-title">WOMEN'S BLAZERS COLLECTION</h2>
                <div className="womenblazers-grid">
                    {blazers.map((blazer) => (
                        <div key={blazer.id} className="womenblazers-item">
                            <div className="womenblazers-image-container">
                                <img
                                    src={blazer.image}
                                    alt={blazer.name}
                                    className="womenblazers-image"
                                />
                            </div>
                            <div className="womenblazers-details">
                                <h3 className="womenblazers-name">{blazer.name}</h3>
                                <p className="womenblazers-color">{blazer.color}</p>
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

export default Womenblazers;