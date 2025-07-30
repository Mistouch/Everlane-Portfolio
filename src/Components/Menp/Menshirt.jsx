import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Menshirt.css"; // Make sure this import exists
import {useNavigate} from "react-router-dom";
const Menshirt = () => {
    const navigate = useNavigate();
    // Sample t-shirt data
    const tshirts = [
        { id: 1, name: "Classic White Tee", color: "White", image: "/public/Men_Tees/1.png" },
        { id: 2, name: "Black Premium Cotton", color: "Black", image: "public/Men_Tees/3.png" },
        { id: 3, name: "Navy Blue Stripe", color: "Navy",  image: "public/Men_Tees/3.png" },
        { id: 4, name: "Heather Gray", color: "Gray", image: "public/Men_Tee.pns/4g" },
        { id: 5, name: "Red V-Neck", color: "Red",  image: "public/Men_Tees/5.png" },
        { id: 6, name: "Olive Green Basic", color: "Olive",  image: "public/Men_Tees/6.png" },
        { id: 7, name: "Maroon Crewneck", color: "Maroon",  image: "public/Men_Tees/7.png" },
        { id: 8, name: "Sky Blue Pocket", color: "Blue",  image: "public/Men_Tees/8.png" },
        { id: 9, name: "Charcoal Heather", color: "Charcoal",  image: "public/Men_Tees/9.png" },
        { id: 10, name: "Mustard Yellow", color: "Yellow",  image: "public/Men_Tees/10.png" },
        { id: 11, name: "Forest Green", color: "Green", image: "public/Men_Tees/11.png" },
        { id: 12, name: "Sandstone", color: "Tan",  image: "public/Men_Tees/12.png" },
        { id: 13, name: "Burgundy", color: "Burgundy",  image: "public/Men_Tees/13.png" },
        { id: 14, name: "Slate Gray", color: "Slate",  image: "public/Men_Tees/14.png"},
        { id: 15, name: "Coral Summer", color: "Coral",  image: "public/Men_Tees/15.png" },
        { id: 15, name: "Polo", color: "Black",  image: "public/Men_Tees/16.png" }

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