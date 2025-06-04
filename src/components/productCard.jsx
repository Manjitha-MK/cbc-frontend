import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Productcard({ product }) {
  const imageUrl = product?.images?.[0] || "/fallback-image.jpg"; // Use fallback if image is missing

  return (
    <Link to={`/productInfo/${product.productId}`}>
      <div className="w-full max-w-[300px] h-[450px] bg-white m-4 rounded-xl shadow-lg shadow-gray-500 hover:shadow-gray-300 hover:border-[3px] overflow-hidden flex flex-col">
        <div className="w-full h-[60%] bg-gray-100">
          <img
            src={imageUrl}
            alt={product.name || "Product image"}
            className="object-cover w-full h-full"
            onError={(e) => {
              e.target.src = "/fallback-image.jpg"; // local fallback
              e.target.onerror = null;
            }}
          />
        </div>

        <div className="flex flex-col justify-between h-[40%] p-4">
          <h1 className="text-xl font-bold text-center truncate">{product.productName}</h1>
          <h2 className="text-sm text-center text-gray-400">{product.productId}</h2>

          <p className="text-lg font-semibold text-left text-green-700">
            LKR {product.lastPrice?.toFixed(2)}
          </p>

          {product.lastPrice < product.price && (
            <p className="text-sm font-medium text-left text-gray-500 line-through">
              LKR {product.price?.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
