import React from 'react';
import './Garment.css';
import Footer from "../Footerr/Footer,jsx";
import { useNavigate } from 'react-router-dom';

const Garment = () => {
    const navigate = useNavigate();
    const collections = {
        men: {
            title: "MEN'S COLLECTION",
            description: "Precision-crafted essentials for the modern man",
            categories: [
                { name: "T-Shirt", image: "/Images/men_tee_1.png" , desc: "Premium cotton with perfect drape", season: "Essential", path: "/men/tee" },
                { name: "Sweater", image: "/Images/men_sweater_1.png", desc: "Luxury knits for refined comfort", season: "Autumn-Winter", path: "/men/sweater" },
                { name: "Woven", image:  "/Images/men_woven_1.png", desc: "Structured shirts with tailored fit", season: "Year-Round", path: "/men/woven" },
                { name: "Denim Pant", image: "/Images/men_denim_pant_1.png", desc: "Engineered denim with premium washes", season: "Iconic", path: "/men/denimpant" },
                { name: "Denim Jacket", image: "/Images/men_denim_jack_1.png", desc: "Timeless silhouettes reimagined", season: "Heritage", path: "/men/denimjacket" },
                { name: "Lingerie", image: "/Images/men_under_1.png", desc: "Crafted comfort in breathable fabrics", season: "Essentials", path: "/men/lingerie" },
                { name: "Shoes", image: "/Images/men_shoe_1.png", desc: "Contemporary footwear with precision", season: "Complete The Look", path: "/Shoes" }
            ]
        },
        women: {
            title: "WOMEN'S COLLECTION",
            description: "Effortless elegance with couture-inspired details",
            categories: [
                { name: "T-Shirt", image: "/Images/w_tee_1.png", desc: "Ultra-soft fabrics with feminine cuts", season: "Basic", path: "/women/tee" },
                { name: "Skirts", image: "/Images/w_skirt_1.png", desc: "Fluid movement with structured details", season: "Seasonal", path: "/women/skirts" },
                { name: "Woven", image: "/Images/w_sewater_1.png", desc: "Draped perfection in luxury fabrics", season: "Office", path: "/women/woven" },
                { name: "Sweater", image: "/Images/w_woven_1.png", desc: "Cashmere blends for timeless warmth", season: "Winter", path: "/women/sweaters" },
                { name: "Denim Pant", image: "/Images/w_denim_pant_1.png", desc: "Body-conscious silhouettes", season: "Everyday", path: "/women/denimpants" },
                { name: "Denim Jacket", image: "/Images/w_denim_jack_1.png", desc: "Signature styles with modern edge", season: "Icon", path: "/women/denimjackets" },
                { name: "Blazers", image: "/Images/w_blazer_1.png", desc: "Sharp tailoring meets feminine drape", season: "Workwear", path: "/women/blazers" },
                { name: "Trouser", image: "/Images/w_trouser_1.png", desc: "Precision-cut for powerful silhouettes", season: "Tailored", path: "/women/trousers" },
                { name: "Lingerie", image: "/Images/w_lingerie_1.png", desc: "Delicate craftsmanship meets comfort", season: "Intimates", path: "/women/lingerie" },
                { name: "Shoes", image: "/Images/w_shoe_1.png", desc: "Footwear", season: "Complete The Look", path: "/women/shoes" },

                { name: "Makeup", image: "/Images/w_cos_1.png", desc: "Beauty essentials for every look", season: "Beauty", path: "/Cosmetics" }
            ]
        },
        kids: {
            title: "KIDS COLLECTION",
            description: "Playful designs with premium comfort for young explorers",
            categories: [
                { name: "T-Shirt", image: "/Images/k_tee_1.png", desc: "Organic cotton in vibrant prints", season: "Playtime", path: "/kids/tee" },
                { name: "Sweater", image: "/Images/k_sweater_1.png", desc: "Cozy knits for all adventures", season: "Winter", path: "/kids/sweater" },
                { name: "Woven", image: "/Images/k_woven_1.png", desc: "Miniature tailoring with grown-up style", season: "School", path: "/kids/woven" },
                { name: "Denim Pant", image: "/Images/k_pant_1.png", desc: "Durable styles for active kids", season: "Everyday", path: "/kids/denimpant" },
                { name: "Denim Jacket", image: "/Images/k_jacket_1.png", desc: "Iconic styles in child-friendly fits", season: "Weekend", path: "/kids/denimjacket" },
                { name: "Shoe", image: "/Images/k_shoe_1.png", desc: "Iconic styles in Footwear", season: "Weekend", path: "/kids/shoes" },

            ]
        }
    };

    return (
        <>
        <div className="garment-container">
            <div className="premium-header">
                <h1>THE ESSENTIAL EDIT</h1>
                <p className="subheader">CURATED COLLECTIONS · LUXURY FABRICS · TIMELESS SILHOUETTES</p>
                <div className="header-divider"></div>
                <p className="collection-intro">
                    Discover our meticulously crafted collections where contemporary design meets
                    exceptional comfort. Each piece is conceived with precision and an unwavering
                    attention to detail.
                </p>
            </div>

            {Object.entries(collections).map(([gender, collection]) => (
                <div className="gender-section" key={gender}>
                    <div className="collection-header">
                        <h2>{collection.title}</h2>
                        <p className="collection-description">{collection.description}</p>
                    </div>
                    <div className="category-grid">
                        {collection.categories.map((item, index) => (
                            <div
                                className="category-card"
                                key={`${gender}-${index}`}
                                onClick={() => navigate(item.path)}
                            >
                                <div className="image-container">
                                    <img src={item.image} alt={item.name} />
                                    <div className="hover-overlay">
                                        <p className="category-description">{item.desc}</p>
                                        <p className="season-tag">{item.season}</p>
                                        <button
                                            className="explore-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(item.path);
                                            }}
                                        >
                                            EXPLORE
                                        </button>
                                    </div>
                                </div>
                                <div className="category-info">
                                    <h3>{item.name}</h3>
                                    <p className="view-products">View products →</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
        <Footer/>
    </>
    );
};

export default Garment;