import React from "react";
import { AiFillStar } from "react-icons/ai";
import manImg from "../Assets/man.jpeg";
import CardSection from "./CardSection";
import Carousel  from "./Carousel";

export default function Home() {
  return (
    <main className="bg-[#1e293b] text-white min-h-screen font-sans">
      {/* Hero Section */}
      <header className="w-full py-10 px-4 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              STYLE <span className="text-cyan-400">AND</span><br />
              FAS<span className="text-cyan-400">HION</span> HERE..!
            </h1>
            <button className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-full transition">
              BUY NOW!
            </button>
          </div>
          <div className="flex justify-center">
            <img src={manImg} alt="Hero" className="w-64 h-100 object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </header>
        <Carousel/>

      {/* New Arrivals Section */}
      <section className="py-10 text-center">
        <h3 className="text-3xl font-bold text-cyan-400 mb-2">NEW ARRIVALS</h3>
        <p className="text-gray-300">Trending from mens and womens style collection</p>
      </section>

      {/* Cards */}
      <section className="px-4 mb-10">
        <CardSection />
      </section>

      {/* Banner */}
      <section className="bg-[#0f172a] py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="mb-6 md:mb-0 md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/premium-vector/sale-this-weekend-only-up-70-off-sign_515038-4734.jpg?w=740"
              className="w-72 h-72 object-cover rounded-lg"
              alt="Sale Banner"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              CLICK <span className="text-cyan-400">BUY</span><br />
              N<span className="text-cyan-400">OW</span> TO GET..!
            </h1>
            <button className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-full transition">
              BUY NOW
            </button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="text-center py-10">
        <h3 className="text-3xl font-bold text-cyan-400 mb-2">FEATURED</h3>
        <p className="text-gray-300">Trending from mens and womens style collection</p>
      </section>

      {/* Product Cards Section */}
      <section className="px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-[#1e293b] text-white rounded-xl shadow-lg p-5 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="text-xl font-bold">Nike Air Max 270</h5>
                  <p className="text-gray-400">the bulk of the card’s content.</p>
                </div>
                <div>
                  <span className="bg-cyan-500 text-white px-4 py-3 rounded-full text-center font-bold">170$</span>
                </div>
              </div>
              <div className="text-center my-6">
                <img
                  src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
                  className="w-56 h-56 object-cover mx-auto rounded-full border"
                  alt="Product"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex text-yellow-400">
                  {[...Array(3)].map((_, j) => (
                    <AiFillStar key={j} />
                  ))}
                  <AiFillStar className="text-gray-300" />
                  <AiFillStar className="text-gray-300" />
                </div>
                <button className="bg-cyan-400 text-white px-4 py-2 rounded-full font-semibold">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>

  );
}
