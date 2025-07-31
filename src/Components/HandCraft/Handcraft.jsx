import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Handcraft.css';
import Footer from "../Footerr/Footer,jsx";
const Handcraft = () => {
    const navigate = useNavigate();

    // 15 Traditional Jute Products (English only)
    const juteProducts = [
        {
            id: 1,
            name: 'Jute Plate',
            description: 'Authentic Jute Plate',
            image: "/Images/jute_plate.png"
        },
        {
            id: 2,
            name: 'Jute Basket',
            description: 'Traditional style jute basket',
            image: "/Images/jute_busket.png"
        },
        {
            id: 3,
            name: 'Jute Wallmat',
            description: "/Images/jute_3.png",
            image: "/Images/jute_3.png"
        },
        {
            id: 4,
            name: 'Jute Hat',
            description: 'Traditional jute hat',
            image : "/Images/jute_4.png"
        },
        {
            id: 5,
            name: 'Jute Bag',
            description: 'Eco-friendly jute shopping bag',
            image: "/Images/jute_5.png"
        },
        {
            id: 6,
            name: 'Jute Footmat',
            description: 'Jute-made foot mat',
            image: "/Images/jute_6.png"
        },
        {
            id: 7,
            name: 'Jute Curtain',
            description: 'Handwoven jute thread curtain',
            image: "/Images/jute_7.png"
        },
        {
            id: 8,
            name: 'Jute Flowerpot',
            description:"/Images/jute_8png",
            image: "/Images/jute_8.png"
        },
        {
            id: 9,
            name: 'Jute Tablemat',
            description: 'Jute-made table decoration mat',
            image: "/Images/jute_9.png"
        },
        {
            id: 11,
            name: 'Jute Pen Holder',
            description: 'Jute-made pen holder',
            image: "/Images/jute_11.png"
        },
        {
            id: 12,
            name: 'Jute Bookmark',
            description: 'Bookmark made from jute thread',
            image: "/Images/jute_12.png"
        },
        {
            id: 13,
            name: 'Jute Photo Frame',
            description: 'Jute-made photo frame',
            image: "/Images/jute_13.png"
        },
        {
            id: 14,
            name: 'Jute Tray',
            description: 'Jute-made serving tray',
            image: "/Images/jute_14.png"
        },
        {
            id: 15,
            name: 'Jute Sandals',
            description: 'Comfortable jute-made sandals',
            image: "/Images/jute_15.png"
        }
    ];

    return (
        <>
            <div className="handcraft-page">
                <header className="page-header">
                    <h1 className="collection-title">JUTE CRAFTS</h1>
                    <p className="collection-count">{juteProducts.length} ITEMS</p>
                </header>

                <div className="products-grid">
                    {juteProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                    }}
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <p className="product-price">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            <Footer />
        </>
    );
};

export default Handcraft;