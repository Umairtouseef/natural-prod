import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function TabsDescription() {
  const [activeTab, setActiveTab] = useState("description");

  const questions = [
    {
      id: "Q1",
      question: "Does the dress offer any UV protection?",
      answer:
        "Yes, the dress offers UV protection. It blocks harmful UV rays, providing an additional layer of sun safety.",
      answerId: "A1",
    },
    {
      id: "Q2",
      question:
        "Are there any pockets, and if so, how many and where are they located?",
      answer:
        "Yes, there are pockets. There are two pockets, one on each side of the garment.",
      answerId: "A2",
    },
    {
      id: "Q3",
      question: "Is the fabric breathable and quick-drying?",
      answer:
        "Yes, the fabric is breathable, allowing for excellent airflow. Additionally, it is quick-drying, ensuring comfort during and after activities.",
      answerId: "A3",
    },
  ];

  const totalRatings = 25;
  const ratings = [
    { stars: 5, count: 9, color: "bg-secondary" },
    { stars: 4, count: 7, color: "bg-green-500" },
    { stars: 3, count: 5, color: "bg-green-500" },
    { stars: 2, count: 3, color: "bg-orange-400" },
    { stars: 1, count: 1, color: "bg-red-500" },
  ];

  return (
    <div className="p-6 bg-primary text-mainText font-secondary ">
      <div className="flex space-x-4  pb-4">
        <button
          className={`px-4 py-2 font-tertiary rounded-md ${
            activeTab === "description"
              ? "bg-secondary text-white"
              : "text-heading border border-secondary"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 font-tertiary rounded-md ${
            activeTab === "review"
              ? "bg-secondary text-white"
              : "text-heading border border-secondary"
          }`}
          onClick={() => setActiveTab("review")}
        >
          Review
        </button>
        <button
          className={`px-4 py-2 font-tertiary rounded-md ${
            activeTab === "qa"
              ? "bg-secondary text-white"
              : "text-heading border border-secondary"
          }`}
          onClick={() => setActiveTab("qa")}
        >
          Q & A
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "description" && (
          <div>
            <p>
              The Model is wearing a white blouse from our stylist's collection,
              see the image for a mock-up of what the actual blouse would look
              like. It has text written on it in a black cursive language which
              looks great on a white color.
            </p>
            <h4 className="mt-4   font-bold text-heading">Fabric:</h4>
            <p>
              Art silk is manufactured by synthetic fibres like rayon. It's
              light in weight and is soft on the skin for comfort in summers.
            </p>
            <h4 className="mt-4  font-bold text-heading">Size & Fit:</h4>
            <p>The model (height 5'8") is wearing a size S</p>
            <h4 className="mt-4 font-bold font-tertiary text-heading">
              Material & Care:
            </h4>
            <ul className="list-disc pl-5">
              <li>Top fabric: pure cotton</li>
              <li>Bottom fabric: pure cotton</li>
              <li>Hand-wash</li>
            </ul>
          </div>
        )}

        {activeTab === "review" && (
          <div className="bg-white p-6 shadow-md rounded-md w-full max-w-sm">
            <div className="text-3xl font-bold text-gray-900">4.00</div>
            <div className="flex items-center space-x-1 text-yellow-500">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaStar className="text-gray-400" />
            </div>
            <p className="text-sm text-gray-600">
              Based on {totalRatings} Ratings
            </p>
            <hr className="my-3" />
            <h3 className="text-lg font-semibold">Review this product</h3>
            <p className="text-sm text-gray-600">
              Let other customers know what you think
            </p>
            {ratings.map((rating) => (
              <div
                key={rating.stars}
                className="flex items-center space-x-2 my-1"
              >
                <span className="text-sm font-medium">{rating.stars} ★</span>
                <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                  <div className="flex h-full w-1/2 items-center justify-center overflow-hidden break-all rounded-full bg-gray-900 text-white"></div>
                </div>

                <span className="text-sm text-gray-700">{rating.count}</span>
              </div>
            ))}
            <button className="w-full mt-4 bg-secondary text-white py-2 font-semibold rounded-md hover:bg-opacity-90">
              Write Review
            </button>
          </div>
        )}

        {activeTab === "qa" && (
          <div className="p-6 bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Have Doubts Regarding This Product ?
              </h3>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 text-sm font-semibold rounded-md hover:bg-gray-300">
                Post Your Question
              </button>
            </div>

            <div className="border-t">
              {questions.map((qa) => (
                <div
                  key={qa.id}
                  className="py-4 border-b flex flex-col space-y-2"
                >
                  <div className="flex items-center">
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 text-sm font-semibold rounded-md">
                      {qa.id}
                    </span>
                    <p className="ml-2 font-semibold text-gray-800">
                      {qa.question}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-secondary text-white px-2 py-1 text-sm font-semibold rounded-md">
                      {qa.answerId}
                    </span>
                    <p className="ml-2 text-gray-700">{qa.answer}</p>
                  </div>
                  <div className="flex justify-between items-center w-full text-gray-500 text-sm">
                    <div></div>
                    <div className="flex space-x-2">
                      <button className="flex items-center space-x-1 hover:text-gray-700">
                        <FaThumbsUp />
                        <span>0</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-gray-700">
                        <FaThumbsDown />
                        <span>0</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
