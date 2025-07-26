import { useState } from "react";

export default function CartCard({ product }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex border-b py-4 justify-around">
            <img src={product.logo} alt={product.Pdtname} className="w-24 h-24 object-cover" />
            <div className="ml-4">
                <h3 className="text-lg font-semibold">{product.Pdtname}</h3>
                <p className="text-gray-600">Price: ${product.price}</p>
                <p className="text-gray-600">Spec: {product.spec}</p>
            </div>
            <div>
                <p className="text-gray-600">Quantity: <input type="number" min={0} defaultValue={1} onChange={(e) => setQuantity(e.target.value)} className="w-[30px]"/></p>
                <p className="text-gray-600">Total: ${product.price * quantity}</p>
            </div>
            <div>
                <button className="contentButton">Buy Now</button>
                <button className="contentButton">Remove</button>
            </div>
        </div>
    );
}