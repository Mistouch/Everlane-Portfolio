import React from "react";
import './Skirts.css';
import Footer from "../Footerr/Footer,jsx";
import {useNavigate} from "react-router-dom"; // Make sure to import Footer
const Skirts = () => {
    const navigate = useNavigate();
    const skirts = [
        {
            id: 1,
            name: "MINI SKIRT WITH SPLIT",
            color: "Black",
            image: "/Images/w_skirt_1.webp"
        },
        {
            id: 2,
            name: "MIDI PLEATED SKIRT",
            color: "Beige",
            image: "/Images/w_skirt_2.webp"
        },
        {
            id: 3,
            name: "DENIM MINI SKIRT",
            color: "Light Blue",
            image: "/Images/w_skirt_3.webp"
        },
        {
            id: 4,
            name: "LEATHER PENCIL SKIRT",
            color: "Black",
            image:"/Images/w_skirt_4.webp"
        },
        {
            id: 5,
            name: "FLORAL WRAP SKIRT",
            color: "Multicolor",
            image:"/Images/w_skirt_5.webp"
        },
        {
            id: 6,
            name: "SATIN MAXI SKIRT",
            color: "Black",
            image: "/Images/w_skirt_6.webp"
        },
        {
            id: 7,
            name: "COTTON TIERED SKIRT",
            color: "Orange",
            image: "/Images/w_skirt_7.webp"
        },
        {
            id: 8,
            name: "KNITTED MIDI SKIRT",
            color: "Cream",
            image: "/Images/w_skirt_8.webp"
        },
        {
            id: 9,
            name: "HIGH-WAISTED A-LINE",
            color: "Black",
            image:"/Images/w_skirt_9.webp"
        },
        {
            id: 10,
            name: "RUFFLED HEM SKIRT",
            color: "Pink",
            image: "/Images/w_skirt_10.webp"
        }
    ];

    return (
        <>
        <div className="skirts-container">
            <h2 className="collection-title">SKIRTS COLLECTION</h2>
            <div className="skirts-grid">
                {skirts.map((skirt) => (
                    <div key={skirt.id} className="skirt-item">
                        <div className="skirt-image-container">
                            <img
                                src={skirt.image}
                                alt={skirt.name}
                                className="skirt-image"
                            />
                        </div>
                        <div className="skirt-details">
                            <h3 className="skirt-name">{skirt.name}</h3>
                            <p className="skirt-color">{skirt.color}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            <Footer/>
            </>
    );
};

export default Skirts;