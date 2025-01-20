import axios from "axios";
import { useEffect, useState } from "react";

export default function CartCard(props){

    const productId = props.productId;
    const qty = props.qty;

    const [product,setProduct] = useState(null);
    const [loaded,setLoadede] = useState(false);

    useEffect(()=>{
        if(!loaded){
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productId}`).then(
                (response)=>{
                    setProduct(response.data)
                    console.log(response.data)
                    setLoadede(true)
                }
            ).catch(
                (error)=>{
                    console.log(error)
                }
            )
        }
    },[])

    return(
        <div className="flex items-center justify-between w-1/2 border">
            <span>{productId}</span>
            <span>X</span>
            <span>{qty}</span>
        </div>
    )
}