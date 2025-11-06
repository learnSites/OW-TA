import React from 'react'; 
import { useLocation,Link } from "react-router-dom";

export default function DisplayProduct() {
    const location = useLocation();
    const { product } = location.state || {};
  return (
        <div className="w-full pt-[30px]">
            <div className="flex">
                <div>
                    <img src={product.logo} className="w-[600px] h-[625px]" alt={product.Pdtname} />
                </div>
                <div className="p-[20px] flex flex-col justify-between">
                    <div>
                        <h2 className="w-full min-h-[40px] max-h-[80px]">{product.Pdtname}</h2>
                        <p>Price: ${product.price}</p>
                    </div>
                    <div className="flex gap-[20px]">
                        <Link to="/cart"><button className="bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button></Link>
                        <Link to="/shipping"><button className="bg-green-500 text-white py-2 px-4 rounded">Buy Now</button></Link>
                    </div>
                </div>
            </div>
            <div>
                <h3>Product Spec</h3>
                <p>{product.spec}</p>
            </div>
        </div>
  );
}