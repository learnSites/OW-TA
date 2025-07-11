import Card from "./Card";
import Banner from './banner';
import Popup from "./popup";
import './home.css';

export default function Home({ open, setOpen }) {
  const product = [
    { Pdtname: "Home Appliances", logo: "/asset/Home Appliances.jpg" },
    { Pdtname: "Computers & Accessories", logo: "/asset/computer.jpg" },
    { Pdtname: "Mens Collection", logo: "/asset/mens.jpg" },
    { Pdtname: "Kids Collection", logo: "/asset/kids.jpg" },
    { Pdtname: "Women Collection", logo: "/asset/women.jpg" },
    { Pdtname: "Smart Home Devices", logo: "/asset/smarthome.webp" },
    { Pdtname: "Entertainment Electronics", logo: "/asset/game.jpg" },
    { Pdtname: " Mobile & Tablets", logo: "/asset/mobtab.jpg" },
    { Pdtname: "Networking & Connectivity", logo: "/asset/network.jpg" },
  ];

  return (
    <>
      <div className="popupDiv">
        <Popup open={open} setOpen={setOpen} />
      </div>
      <div className="contentDiv">
        <Banner />
        {product.map((element, index) => (
          <Card key={index} src={element.logo} name={element.Pdtname} />
        ))}
      </div>
    </>
  );
}
