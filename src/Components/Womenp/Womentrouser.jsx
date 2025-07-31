import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Womentrouser.css";
import { useNavigate } from "react-router-dom";
const Womentrouser = () => {
    const navigate = useNavigate();

    // Women's trousers data
    const trousers = [
        { id: 1, name: "CLASSIC BLACK TROUSERS", color: "Black", image: "/Images/w_trouser_1.png" },
        { id: 2, name: "HIGH-WAISTED WIDE LEG", color: "Cream", image: "/Images/w_trouser_2.png" },
        { id: 3, name: "TAILORED OFFICE PANT", color: "Navy", image: "/Images/w_trouser_3.png" },
        { id: 4, name: "PAPERBAG WAIST TROUSER", color: "Old Rose", image: "/Images/w_trouser_4.png" },
        { id: 5, name: "PLEATED FRONT PANT", color: "Gray", image: "/Images/w_trouser_5.png" },
        { id: 6, name: "CROPPED CIGARETTE PANT", color: "Charcoal", image: "/Images/w_trouser_6.png" },
        { id: 7, name: "LINEN DRAWSTRING TROUSER", color: "Ecru", image: "/Images/w_trouser_7.png" },
        { id: 8, name: "CHECKERED SLACKS", color: "Black/White", image: "/Images/w_trouser_8.png" },
        { id: 9, name: "LEATHER-LIKE LEGGINGS", color: "Black", image: "/Images/w_trouser_9.png" },
        { id: 10, name: "STRAIGHT LEG SUIT PANT", color: "Black", image: "/Images/w_trouser_10.png" }
    ];

    return (
        <>
            <div className="womentrouser-container">
                <h2 className="collection-title">WOMEN'S TROUSERS COLLECTION</h2>
                <div className="womentrouser-grid">
                    {trousers.map((trouser) => (
                        <div key={trouser.id} className="womentrouser-item">
                            <div className="womentrouser-image-container">
                                <img
                                    src={trouser.image}
                                    alt={trouser.name}
                                    className="womentrouser-image"
                                />
                            </div>
                            <div className="womentrouser-details">
                                <h3 className="womentrouser-name">{trouser.name}</h3>
                                <p className="womentrouser-color">{trouser.color}</p>
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

export default Womentrouser;