import Filter from './filter';
import Products from './productcontent';

export default function Productlist(){
    return (
        <>
        <div className="w-full flex flex-col gap-[20px]">
            <Filter />
            <Products />
        </div>
        </>
    );
}