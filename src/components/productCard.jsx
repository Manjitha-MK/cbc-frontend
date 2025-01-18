import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Productcard(props) {
  return (
    <Link to={`/productInfo/${props.product.productId}`}>
      <div className="w-[300px] h-[450px] bg-white m-[70px] rounded-xl shadow-lg shadow-gray-500 hover:shadow-gray-300 hover:border-[3px] overflow-hidden flex flex-col">
        <img
          src={props.product.images[0]}
          alt={props.product.name}
          className="object-cover w-full h-[60%] "
        />
        <div className="max-h-[40%] h-[35%] p-4 flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-center">
            {props.product.productName}
          </h1>
          <h2 className="text-center text-gray-400">{props.product.productId}</h2>
          <p className="text-xl font-semibold text-left">
            LKR.{props.product.lastPrice.toFixed(2)}
          </p>
          {props.product.lastPrice < props.product.price && (
            <p className="text-xl font-semibold text-left text-gray-500 line-through">
              LKR.{props.product.price.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
