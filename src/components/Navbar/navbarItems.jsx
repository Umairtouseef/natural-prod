import React from "react";

const NavbarItems = () => {
    const menuItems = [
        {
            title: "Home",
            fashionTypes: { "SUMMER FASHION": [] },
            image: "",
        },
        {
            title: "Feature",
            fashionTypes: {
                "WINTER FASHION": ["Home", "About", "Services", "Contact"],
                "SUMMER FASHION": ["T-Shirts", "Shorts", "Sandals", "Sunglasses"],
                "AUTUMN FASHION": ["Jackets", "Boots", "Scarves", "Sweaters"],
                "SPRING FASHION": ["Dresses", "Cardigans", "Light Jackets", "Sneakers"],
                "CASUAL WEAR": ["Jeans", "Hoodies", "Sneakers", "T-Shirts"],
                "FORMAL WEAR": ["Suits", "Ties", "Dress Shoes", "Blazers"],
                "SPORTSWEAR": ["Running Shoes", "Gym Wear", "Tracksuits", "Compression Wear"],
                "TRADITIONAL WEAR": ["Sarees", "Kurtas", "Kimonos", "Ethnic Dresses"],
                "STREET STYLE": ["Graphic Tees", "Cargo Pants", "Sneakers", "Caps"],
                "LUXURY FASHION": ["Designer Wear", "Jewelry", "Luxury Bags", "High-End Shoes"]
            },
            image: "https://themes.pixelstrap.com/multikart/assets/images/menu-banner.jpg",
        }
        ,
        {
            title: "Shops",
            fashionTypes: {
                "SUMMER FASHION": ["Home", "About", "Services", "Contact"],

            },
            image: "",
        },
        {
            title: "Product",
            fashionTypes: {
                "SUMMER FASHION": ["T-Shirts", "Jeans", "Shorts", "Sunglasses"],

            },
            image: "",
        },
        {
            title: "Pages",
            fashionTypes: {
                "SUMMER FASHION": ["T-Shirts", "Jeans", "Shorts", "Sunglasses"],
            },
            image: "",
        }, {
            title: "Blogs",
            fashionTypes: {
                "SUMMER FASHION": ["T-Shirts", "Jeans", "Shorts", "Sunglasses", "Designer Wear", "Jewelry", "Luxury Bags", "High-End Shoes"],

            },
            image: "",
        },
    ];

    return (
        <>
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-8 py-8">
                    <div className="flex justify-center items-center invisible sm:visible overflow-hidden">

                        <nav className="flex min-w-[20px] flex-row gap-0 p-0 font-sans text-base font-normal text-blue-gray-700">
                            {menuItems.map((menuItem, index) => {
                                const fashionTypeCount = Object.keys(
                                    menuItem.fashionTypes
                                ).length;
                                const gridColsClass =
                                    fashionTypeCount <= 1
                                        ? "grid-cols-1"
                                        : fashionTypeCount <= 2
                                            ? "grid-cols-2"
                                            : fashionTypeCount <= 2
                                                ? "grid-cols-3"
                                                : fashionTypeCount <= 4
                                                    ? "grid-cols-6"
                                                    : "grid-cols-6";

                                const dropdownPosition = menuItem.title === "Feature" ? "left-[-500%]" : "left-0";


                                return menuItem.title === "Home" ? (
                                    <div key={index} className="relative w-full ml-5 ">
                                        <div className="relative flex items-center w-full p-0  text-left select-none text-blue-gray-900 ml-5">
                                            <span class="relative flex items-center justify-between w-full group cursor-pointer  ">
                                                <p class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900  ml-5">
                                                    {menuItem.title}
                                                </p>
                                                {menuItem.title !== "Home" && (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-4 h-4 text-blue-gray-900 transition-transform group-hover:rotate-180 "
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                )}


                                            </span>
                                        </div></div>
                                ) : (
                                    <div key={index} className="relative w-full ml-5 ">
                                        <div className="relative flex items-center w-full p-0  text-left select-none text-blue-gray-900 ml-0">
                                            <span className="relative flex items-center justify-between w-full group cursor-pointer mt-1">
                                                <p className="block  ml-4">
                                                    {menuItem.title}
                                                </p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="w-4 h-4 text-blue-gray-900 transition-transform group-hover:rotate-180 "
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                                <div
                                                    className={`absolute ${dropdownPosition} top-[100%] z-10 p-4 text-sm font-normal bg-white border rounded-lg shadow-lg min-w-max
                border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 opacity-0 scale-95 pointer-events-none 
                group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 ease-in-out`}
                                                >
                                                    <footer className="bg-white dark:bg-gray-900">
                                                        <div className="mx-auto">

                                                            <div
                                                                className={`grid gap-8 px-4 py-6 lg:py-8 md:${gridColsClass}`}
                                                            >
                                                                {Object.entries(menuItem.fashionTypes).map(
                                                                    ([fashionType, links], typeIndex) => (
                                                                        <div key={typeIndex}>
                                                                            <h3 className="text-black-500 font-medium mt-2">
                                                                                {fashionType}
                                                                            </h3>
                                                                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                                                                {links.map((link, linkIndex) => (
                                                                                    <li key={linkIndex} className="mb-2">
                                                                                        <a
                                                                                            href="#"
                                                                                            className="hover:underline"
                                                                                        >
                                                                                            {link}
                                                                                        </a>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>

                                                            {menuItem.image && (
                                                                <div className="w-full mt-4">
                                                                    <img
                                                                        src={menuItem.image}
                                                                        alt="Banner"
                                                                        className="w-full object-cover"
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </footer>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavbarItems;
