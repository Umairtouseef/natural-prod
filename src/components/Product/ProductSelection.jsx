import { useState } from "react";
import {
  FaHeart,
  FaExchangeAlt,
  FaShareAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FaTrash, FaEdit, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "../CustomButton/CustomButton";

const ProductSelection = () => {
  const [selectedColor, setSelectedColor] = useState("brown");
  const [quantity, setQuantity] = useState(1);
  const stockLeft = 10;

  const colors = [
    {
      id: "brown",
      image:
        "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    },
    {
      id: "blue",
      image:
        "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    },
    {
      id: "green",
      image:
        "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    },
  ];

  const progress = 100;

  return (
    <div className="p-6 border rounded-lg max-w-sm mx-auto bg-white shadow-sm text-center">
      <p className="text-gray-700 font-semibold text-lg">Colour:</p>
      <div className="flex justify-center space-x-3 mt-2">
        {colors.map((color) => (
          <div
            key={color.id}
            className={`border-2 rounded-md p-1 cursor-pointer transition-all duration-300 ${
              selectedColor === color.id
                ? "border-orange-400"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedColor(color.id)}
          >
            <img
              src={color.image}
              alt={color.id}
              className="w-16 h-16 rounded-md"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-4 space-x-4">
        <button
          className="p-2 border rounded-md hover:bg-gray-300"
          onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
        >
          <FaChevronLeft />
        </button>
        <span className="text-lg font-semibold text-gray-700">{quantity}</span>
        <button
          className="p-2 border rounded-md hover:bg-gray-300"
          onClick={() => setQuantity((q) => q + 1)}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-4">
        <Button onClick={() => console.log("Continue Shopping Clicked")}>
          Out Of Stock
        </Button>
        <Button onClick={() => console.log("Continue Shopping Clicked")}>
          Buy Now
        </Button>
      </div>
      <div className="w-full bg-gray-200 rounded-full flex items-center relative mt-8 h-6 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(to right, #22c55e,rgb(93, 114, 39))",
          }}
        ></div>

        <motion.div
          className="absolute top-0 left-0 h-full w-full opacity-40"
          style={{
            background:
              "linear-gradient(to right, #4ade80, #22c55e, rgb(93, 114, 39))",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        ></motion.div>

        <motion.div
          className="absolute transform -translate-y-1/2"
          initial={{ x: "0%" }}
          animate={{ x: `${progress}%` }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ left: `${progress}%`, transform: "translateX(-100%)" }}
        >
          {/* <FaTruck className="text-secondary " /> */}
        </motion.div>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Please Hurry Only {stockLeft} Left In Stock
      </p>
      <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${stockLeft * 10}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-sm text-gray-700 mt-4">
        <button className="flex items-center space-x-1">
          <FaHeart /> <span>Add To Wishlist</span>
        </button>
        <button className="flex items-center space-x-1">
          <FaExchangeAlt /> <span>Add To Compare</span>
        </button>
      </div>

      <div className="text-center mt-2 text-gray-700 text-sm flex justify-center items-center space-x-2">
        <FaShareAlt /> <span>Share</span>
      </div>
    </div>
  );
};

export default ProductSelection;
