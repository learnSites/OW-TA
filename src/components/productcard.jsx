export default function ProductCard({productName ,productImage ,productPrice}) {
    return (
        <div className="w-[340px] h-[450px] rounded shadow-lg border relative cursor-pointer ">
            <img src={productImage} className="w-full rounded-t h-[300px] object-cover absolute hover:scale-100 transition-all duration-300" />
            <div className="flex flex-col gap-[10px] pt-[10px] absolute bottom-[10px] hover:top-[63%] transition-all duration-900 rounded bg-[#FAF9F6] w-full">
                <h2 className="text-gray-900">{productName}</h2>
                <p className="text-gray-700">${productPrice}.00</p>
                <div className="w-[100%] pt-[15px]">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}