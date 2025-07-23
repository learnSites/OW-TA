import Filter from './filter';
import ProductCard from './productcard';

export default function Productlist(){
    const product = [
        { Pdtname: "Home Appliances", logo: "/asset/Home Appliances.jpg", price: 100 },
        { Pdtname: "Computers & Accessories", logo: "/asset/computer.jpg", price: 200 },
        { Pdtname: "Mens Collection", logo: "/asset/mens.jpg", price: 150 },
        { Pdtname: "Kids Collection", logo: "/asset/kids.jpg", price: 80 },
        { Pdtname: "Women Collection", logo: "/asset/women.jpg", price: 120 },
        { Pdtname: "Smart Home Devices", logo: "/asset/smarthome.webp", price: 250 },
        { Pdtname: "Entertainment Electronics", logo: "/asset/game.jpg", price: 300 },
        { Pdtname: " Mobile & Tablets", logo: "/asset/mobtab.jpg", price: 400 },
        { Pdtname: "Networking & Connectivity", logo: "/asset/network.jpg", price: 500 },
    ];
    return (
        <>
        <div className="w-full flex flex-col gap-[20px]">
            <Filter />
            <div className="flex flex-wrap gap-[20px] justify-center pl-[35px] pr-[25px] pb-[45px]">
                {
                    product.map((item,index) =>{
                        return <ProductCard key={index} productName={item.Pdtname} productImage={item.logo} productPrice={item.price}/>
                    })   
                }
            </div>
        </div>
        </>
    );
}