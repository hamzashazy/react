import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { allProducts } from "../data/products"; // Adjust the path if needed
import ReactImageMagnify from 'react-image-magnify';


const CardDetails = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-6 text-white bg-[#1e293b] min-h-screen">
        <h1 className="text-3xl font-bold text-red-500">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1e293b] text-white p-6">
      <div className="max-w-5xl mx-auto bg-white text-black rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-6 flex items-center justify-center">
  <div className="w-80">
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: product.title,
        //   isFluidWidth: true,
          width: 320,
          height: 320,
          src: product.image,
        },
        largeImage: {
          src: product.image,
          width: 1200,
          height: 1200,
        },
        enlargedImageContainerDimensions: {
          width: '250%',
          height: '150%'
        },
        enlargedImagePosition: 'beside', // shows beside instead of over
        lensStyle: { backgroundColor: 'rgba(0,0,0,0.2)' },
        shouldUsePositiveSpaceLens: true,
      }}
    />
  </div>
</div>


        {/* Product Info */}
        <div className="w-full lg:w-1/2 p-8 space-y-4">
          <h2 className="text-3xl font-bold text-cyan-600">{product.title}</h2>
          <p className="text-gray-700">{product.description}</p>

          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p>
              <span className="font-semibold">Color:</span> {product.colour}
            </p>
            <p>
              <span className="font-semibold">Price:</span>{" "}
              <span className="text-cyan-600 text-lg font-bold">{product.price}</span>
            </p>
          </div>

          {/* Sizes */}
          {product.size && product.size.length > 0 && (
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Available Sizes:</label>
              <div className="flex flex-wrap gap-2">
                {product.size.map((s, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`w-5 h-5 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>

          <button className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-full transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
