import React from 'react'; 
import Filter from '../Components/Filter';
import ProductCard from '../Components/Productcard';
import { Link } from 'react-router-dom';

export default function Productlist(){
    const product = [
        { Pdtname: "Home Appliances", logo: "/asset/Home Appliances.jpg", price: 100 ,spec: "Various home appliances including refrigerators, washing machines, and more." },
        { Pdtname: "Computers & Accessories", logo: "/asset/computer.jpg", price: 200 ,spec: "Laptops, desktops, and accessories for all your computing needs." },
        { Pdtname: "Mens Collection", logo: "/asset/mens.jpg", price: 150 ,spec: "Latest trends in men's fashion including clothing, shoes, and accessories." },
        { Pdtname: "Kids Collection", logo: "/asset/kids.jpg", price: 80 ,spec: "Fun and stylish clothing for kids of all ages." },
        { Pdtname: "Women Collection", logo: "/asset/women.jpg", price: 120 ,spec: "Chic and trendy clothing for women." },
        { Pdtname: "Smart Home Devices", logo: "/asset/smarthome.webp", price: 250 ,spec: "Innovative devices to make your home smarter and more efficient." },
        { Pdtname: "Entertainment Electronics", logo: "/asset/game.jpg", price: 300 ,spec: "High-quality electronics for your entertainment needs." },
        { Pdtname: "Mobile & Tablets", logo: "/asset/mobtab.jpg", price: 400 ,spec: "Latest smartphones and tablets with cutting-edge technology." },
        { Pdtname: "Networking & Connectivity", logo: "/asset/network.jpg", price: 500 ,spec: "Essential networking equipment for home and office." },
    ];
    return (
        <>
        <div className="w-full flex flex-col gap-[20px]">
            <Filter />
            <div className="flex flex-wrap gap-[20px] justify-center pl-[35px] pr-[25px] pb-[45px]">
                {
                    product.map((item,index) =>{
                        return <Link to="/displayProduct" state={{ product: item }}><ProductCard  key={index} productName={item.Pdtname} productImage={item.logo} productPrice={item.price}/></Link>
                    })
                }
            </div>
        </div>
        </>
    );
}