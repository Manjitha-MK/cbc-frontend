/* eslint-disable react/prop-types */
export default function Productcard(props) {

    return(
        <div>

            <h1>{props.name}</h1>
            <h2>Price: {props.price}</h2>
            <h3>Discount: {props.discount}</h3>
            <button>Add to cart </button>
        
        </div>
    );
}