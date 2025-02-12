import { useState } from "react";
import { FaStar, FaRegStar, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const categories = [
    "Cannabis Oils",
    "Pre Rolls",
    "Marijuana Edibles",
    "Marijuana Weeds",
    "CBD Oils",
    "Marijuana Seeds",
];

const products = [
    {
        id: 1,
        category: "Cannabis Oils",
        name: "Hybrid Kimber",
        price: "$260.00",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
    },
    {
        id: 2,
        category: "Cannabis Oils",
        name: "Black Cherry Soda",
        price: "$250.30",
        oldPrice: "$290.00",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
        isNew: true,
    },
    {
        id: 3,
        category: "Cannabis Oils",
        name: "Hybrid Blue Dream",
        price: "$260.80",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
        isNew: true,
    },
    {
        id: 4,
        category: "Marijuana Edibles",
        name: "Hybrid Kimber",
        price: "$260.00",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
    },
    {
        id: 5,
        category: "Marijuana Edibles",
        name: "Black Cherry Soda",
        price: "$250.30",
        oldPrice: "$290.00",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
        isNew: true,
    },
    {
        id: 6,
        category: "CBD Oils",
        name: "Hybrid Blue Dream",
        price: "$260.80",
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        rating: 4,
        isNew: true,
    },
];

const ProductFilter = () => {
    const [activeCategory, setActiveCategory] = useState("Cannabis Oils");

    const filteredProducts = products.filter(
        (product) => product.category === activeCategory
    );

    return (
        <div className="relative min-h-screen p-10">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://themes.pixelstrap.com/multikart/assets/images/marijuana/full-banner/1.jpg')" }}
            />
            <div className="absolute inset-0 bg-black opacity-60" />

            <div className="relative flex flex-col md:flex-col lg:flex-row gap-8">
                
                <aside className="w-full md:w-full lg:w-1/4 p-6 text-white z-10">
                    <h2 className="text-h2 font-bold text-tertiary">Our Shop</h2>
                    <h3 className="text-h2 font-medium mt-2 mb-4">Buy Products</h3>

                    <ul className="space-y-3 border-t border-gray-500 pt-4">
                        {categories.map((category) => (
                            <li
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`cursor-pointer text-h4 py-2 border-b border-gray-500 transition-colors ${activeCategory === category ? "text-tertiary font-bold" : "text-white"
                                    }`}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>

                </aside>

                <main className="w-full md:w-full lg:w-3/4 flex flex-wrap justify-center gap-8 z-10">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div key={product.id} className="relative group border rounded-lg overflow-hidden shadow-md hover:shadow-lg bg-white w-full md:w-[400px]">
                                
                                <div className="relative w-full h-64">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-white/90 text-secondary p-4 rounded-full transition duration-300 hover:bg-secondary hover:text-white">
                                            <FaSearch size={15} />
                                        </button>
                                    </div>

                                    <div className="absolute bottom-2 left-2 right-2 flex justify-around opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                        <button className="bg-white/90 text-secondary p-4 rounded-full transition duration-300 hover:bg-secondary hover:text-white">
                                            <FaHeart size={15} />
                                        </button>
                                        <button className="bg-white/90 text-secondary px-8 py-3 transition duration-300 hover:bg-secondary hover:text-white">
                                            Add to Cart
                                        </button>
                                        <button className="bg-white/90 text-secondary p-4 rounded-full transition duration-300 hover:bg-secondary hover:text-white">
                                            <FaShoppingCart size={15} />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-4 text-center">
                                    <div className="flex justify-center space-x-1 text-yellow-500 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={i < product.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
                                        ))}
                                    </div>

                                    <h3 className="text-lg font-semibold text-heading">{product.name}</h3>
                                    <p className="text-grayText">
                                        <span className="text-black font-bold">{product.price}</span>
                                        {product.oldPrice && (
                                            <span className="text-gray-500 line-through ml-2">{product.oldPrice}</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white text-lg font-bold flex justify-center items-center">No products found.</p>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ProductFilter;
