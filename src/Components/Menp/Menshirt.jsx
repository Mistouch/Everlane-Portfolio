import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Menshirt.css"; // Make sure this import exists
import {useNavigate} from "react-router-dom";
const Menshirt = () => {
    const navigate = useNavigate();
    // Sample t-shirt data
    const tshirts = [
        { id: 1, name: "Classic White Tee", color: "White", image: "/Images/men_tee_1.webp" },
        { id: 2, name: "Black Premium Cotton", color: "Black", image: "/Images/men_tee_2.webp" },
        { id: 3, name: "Navy Blue Stripe", color: "Navy",  image: "/Images/men_tee_3.webp" },
        { id: 4, name: "Heather Gray", color: "Gray", image: "/Images/men_tee_4.webp" },
        { id: 5, name: "Red V-Neck", color: "Red",  image: "/Images/men_tee_5.webp" },
        { id: 6, name: "Olive Green Basic", color: "Olive",  image:"/Images/men_tee_6.webp" },
        { id: 7, name: "Maroon Crewneck", color: "Maroon",  image: "/Images/men_tee_7.webp" },
        { id: 8, name: "Sky Blue Pocket", color: "Blue",  image: "/Images/men_tee_8.webp" },
        { id: 9, name: "Charcoal Heather", color: "Charcoal",  image: "/Images/men_tee_9.webp" },
        { id: 10, name: "Mustard Yellow", color: "Yellow",  image: "/Images/men_tee_10.webp" },
        { id: 11, name: "Forest Green", color: "Green", image: "/Images/men_tee_11.webp" },
        { id: 12, name: "Sandstone", color: "Tan",  image: "/Images/men_tee_12.webp" },
        { id: 13, name: "Burgundy", color: "Burgundy",  image: "/Images/men_tee_13.webp" },
        { id: 14, name: "Slate Gray", color: "Slate",  image: "/Images/men_tee_14.webp"},
        { id: 15, name: "Coral Summer", color: "Coral",  image: "/Images/men_tee_15.webp" },
        { id: 15, name: "Polo", color: "Black",  image: "/Images/men_tee_16.webp" }

    ];

    return (
        <>
        <div className="menshirt-page">
            <header className="page-header">
                <h1>Men's T-Shirts Collection</h1>
                <p>Premium quality t-shirts for every occasion</p>
            </header>

            <div className="tshirts-grid">
                {tshirts.map((tshirt) => (
                    <div key={tshirt.id} className="tshirt-card">
                        <div className="tshirt-image">
                            <img src={tshirt.image} alt={tshirt.name} />
                        </div>
                        <div className="tshirt-info">
                            <h3>{tshirt.name}</h3>
                            <p>Color: {tshirt.color}</p>
                            <p className="price">{tshirt.price}</p>
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

export default Menshirt;