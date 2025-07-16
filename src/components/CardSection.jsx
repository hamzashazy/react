import ReactSlider from "react-slider";
import React, { useState } from "react";
import Card from "./Card";
import { allProducts } from "../data/products"; // Adjust the path if needed

const CardSection = () => {


  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [priceRange, setPriceRange] = useState([0, 300]);

  const resetFilters = () => {
    setSelectedColor("");
    setSelectedCategory("");
    setSelectedRating("");
    setSelectedSize("");
    setPriceRange([0, 300]);
  };
  const filteredProducts = allProducts.filter((p) => {
    const colorMatch = selectedColor ? p.colour === selectedColor : true;
    const categoryMatch = selectedCategory
      ? p.category === selectedCategory
      : true;
    const ratingMatch = Number(selectedRating)
      ? p.rating === Number(selectedRating)
      : true;
    const sizeMatch = selectedSize ? p.size.includes(selectedSize) : true;

    const priceValue = Number(p.price.replace("$", ""));
    const minMatch = priceValue >= priceRange[0];
    const maxMatch = priceValue <= priceRange[1];

    return (
      colorMatch &&
      categoryMatch &&
      ratingMatch &&
      sizeMatch &&
      minMatch &&
      maxMatch
    );
  });

  return (
    <div className="bg-[#1e293b] text-white min-h-screen p-6">
      {/* Filters Section */}
      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-10 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400">
          Filter Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Color Filter */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-white">
              Color
            </label>
            <select
              onChange={(e) => setSelectedColor(e.target.value)}
              value={selectedColor}
              className="w-full p-2 rounded bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">All</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="black">Black</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-white">
              Category
            </label>
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
              className="w-full p-2 rounded bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">All</option>
              <option value="shoes">Shoes</option>
              <option value="joggers">Joggers</option>
              <option value="sneakers">Sneakers</option>
            </select>
          </div>

          {/* Rating Filter */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-white">
              Rating
            </label>
            <select
              onChange={(e) => setSelectedRating(e.target.value)}
              value={selectedRating}
              className="w-full p-2 rounded bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">All</option>
              <option value="1">1 ★</option>
              <option value="2">2 ★★</option>
              <option value="3">3 ★★★</option>
              <option value="4">4 ★★★★</option>
              <option value="5">5 ★★★★★</option>
            </select>
          </div>

          {/* Size Filter */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-white">
              Size
            </label>
            <select
              onChange={(e) => setSelectedSize(e.target.value)}
              value={selectedSize}
              className="w-full p-2 rounded bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">All</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
          </div>
        </div>

        {/* Price Range Slider */}
        <div className="mt-6">
          <label className="block mb-2 text-sm font-semibold text-white">
            Price Range:{" "}
            <span className="text-cyan-300">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </label>
          <ReactSlider
            className="w-full h-2 bg-gray-300 rounded-md"
            thumbClassName="h-4 w-4 bg-cyan-400 border-2 border-white rounded-full cursor-pointer"
            trackClassName="bg-cyan-500 h-2 rounded"
            value={priceRange}
            onChange={setPriceRange}
            min={0}
            max={300}
            step={10}
            pearling
            minDistance={10}
          />
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={resetFilters}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded shadow-md transition"
          >
            Reset Filters
          </button>
        </div>
      </div>

      <Card products={filteredProducts} />
    </div>
  );
};

export default CardSection;
