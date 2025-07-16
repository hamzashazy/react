import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const CardItem = ({
  id,
  title,
  description,
  price,
  image,
  rating = 0,
  size = [],
  colour,
  category
}) => {
  return (
    <div className="p-4">

<div
  className="bg-white text-gray-900 rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 hover:ring-2 hover:ring-cyan-300 transition-all duration-300 ease-in-out h-full flex flex-col justify-between overflow-hidden"
>

      <Link to={`/product/${id ??0}`} className="text-inherit no-underline block h-full">
        {/* Image */}
        <div className="bg-gray-100 flex justify-center items-center p-6">
          <img
            src={image}
            alt={title}
            className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>
 
        {/* Content */}
        <div className="px-6 py-4 space-y-2">
          <h5 className="text-2xl font-bold">{title}</h5>
          <p className="text-sm text-gray-600">{description}</p>
                
 

          {/* Color (Single) */}
          {colour && (
            <p className="text-sm text-gray-700">
              <span className="font-medium">Colour:</span> {colour}
            </p>
          )}
          {/* Category (Single) */}
          {colour && (
            <p className="text-sm text-gray-700">
              <span className="font-medium">Category:</span> {category}
            </p>
          )}

          {/* Rating */}
          <div className="flex items-center space-x-1 pt-2">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`w-5 h-5 ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
              </Link> 
          {/* size */}
          <div className="px-3 pb-2">
          {size.length > 0 && (
            <div>
              <label className="text-sm font-medium text-gray-700">Size:</label>
              <select className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400">
                {size.map((size, index) => (
                  <option key={index}>{size}</option>
                ))}
              </select>
            </div>
          )}
          </div>
        {/* Price & Button */}
        <div className="px-6 pb-3 flex justify-between items-center border-t border-gray-100">
          <span className="text-xl font-bold text-cyan-600">{price}</span>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full font-semibold transition">
            Add to Cart
          </button>
        </div>
      </div>

    </div>
  );
};

export default CardItem;
