import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womendenimjacket.css";
import Footer from "../Footerr/Footer,jsx";

const Womendenimjacket = () => {
    const navigate = useNavigate();

    // Women's denim jacket data
    const denimJackets = [
        { id: 1, name: "CLASSIC DENIM JACKET", color: "Medium Wash", fit: "Regular", image: "/Images/w_denim_jack_1.png" },
        { id: 2, name: "OVERSIZED DENIM JACKET", color: "Light Wash", fit: "Loose", image: "/Images/w_denim_jack_2.png" },
        { id: 3, name: "CROPPED DENIM JACKET", color: "Black", fit: "Short", image: "/Images/w_denim_jack_3.png"},
        { id: 4, name: "DISTRESSED DENIM JACKET", color: "Dark Wash", fit: "Slim", image: "/Images/w_denim_jack_4.png" },
        { id: 5, name: "EMBROIDERED DENIM JACKET", color: "Light Blue", fit: "Regular", image: "/Images/w_denim_jack_5.png" },
        { id: 6, name: "SHERPA-LINED JACKET", color: "Medium Wash", fit: "Regular", image: "/Images/w_denim_jack_6.png" },
        { id: 7, name: "ACID WASH JACKET", color: "Vintage Wash", fit: "Regular", image: "/Images/w_denim_jack_7.png" },
        { id: 8, name: "BELTED DENIM JACKET", color: "White", fit: "Fitted", image:"/Images/w_denim_jack_8.png" },
        { id: 9, name: "PATCHWORK DENIM JACKET", color: "Multi-Color", fit: "Regular", image: "/Images/w_denim_jack_9.png" },
        { id: 10, name: "TRUCKER DENIM JACKET", color: "Dark Indigo", fit: "Classic", image: "/Images/w_denim_jack_10.png" }
    ];

    return (
        <>
            <div className="womendenimjacket-container">
                <h2 className="collection-title">WOMEN'S DENIM JACKETS</h2>
                <div className="womendenimjacket-grid">
                    {denimJackets.map((jacket) => (
                        <div key={jacket.id} className="womendenimjacket-item">
                            <div className="womendenimjacket-image-container">
                                <img
                                    src={jacket.image}
                                    alt={jacket.name}
                                    className="womendenimjacket-image"
                                />
                            </div>
                            <div className="womendenimjacket-details">
                                <h3 className="womendenimjacket-name">{jacket.name}</h3>
                                <p className="womendenimjacket-color">{jacket.color}</p>
                                <p className="womendenimjacket-fit">{jacket.fit}</p>
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

export default Womendenimjacket;