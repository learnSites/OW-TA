import { useState,useRef,useEffect } from 'react';

export default function Filter() {
    const [options, setOptions] = useState([
        { id: 1, label: 'option 1' },
        { id: 2, label: 'option 2' },
    ]);

    let [isActive, setIsActive] = useState(false); 
    let filterRef = useRef(false);
    let filterButtonRef = useRef(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target) && filterButtonRef.current && !filterButtonRef.current.contains(event.target)) {
                setIsActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleFilter = () => {
        setIsActive(!isActive);
    };

    const removeOption = (id) => {
        setOptions(options.filter(option => option.id !== id));
    };

    return (
        <>
            <div className="flex justify-center w-full h-max pt-[20px] pr-[0px] pb-[18px] pl-[0px] relative">
                <div className="pb-[10px] pt-[10px] pr-[10px] pl-[40px] flex justify-center rounded-[15px] shadow-[0px_0px_15px_10px_rgba(0,0,0,0.1)] w-[95%]">
                    <div className='flex justify-between bg-[#f9f9f9] w-[90%] h-max relative'>
                        <div className='flex gap-[15px] p-[10px]'>
                            {options.map(option => (
                                <div className='relative flex item-center gap-[10px] pl-[10px] border rounded-[15px] hover:translate-y-[-2px] transition-all duration-200  hover:bg-gray-300' key={option.id}>
                                    <p className='m-0 border-[#d7d7d7] rounded-[15px] shadow-[0px_3px_5px_1px_rgb(0, 0, 0, 0.1)] pt-[8px] pr-[30px] pb-[8px] pl-[15px]'>{option.label}</p>
                                    <button className='border-none rounded-full absolute top-[2px] right-[5px] cursor-pointer w-[20%] hover:bg-[#ffffff]' onClick={() => removeOption(option.id)}>x</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div onClick={toggleFilter} ref={filterButtonRef} className='flex w-[10%] justify-center'>
                        <button className={`border rounded-full cursor-pointer w-[28%] hover:bg-gray-300 hover:-translate-y-[2px] transition-all duration-200 ${isActive ? 'bg-gray-300' : ''}`}>
                            <i className="fas fa-filter"></i>
                        </button>
                    </div>
                </div>
                <div ref={filterRef} className={`absolute top-[86%] rounded-[15px] px-[10px] py-[5px] bg-[rgb(239_239_239)] right-[6%] ${isActive ? 'block' : 'hidden'} shadow-[0px_0px_15px_10px_rgba(0,0,0,0.1)]`}>
                    <div className='flex flex-col py-2 px-5'>
                        <div className='flex items-center gap-3 p-[10px] hover:bg-[#f5f5f5] hover:rounded-[15px]'>
                            <label className='flex gap-2 items-center cursor-pointer'><input type="checkbox" className='' />Price</label>
                            <input type="number" min={0} className='border w-[5.0rem] rounded focus:outline-none text-base py-1 px-2' />
                            -
                            <input type="number" min={0} className='border w-[5.0rem] rounded focus:outline-none text-base py-1 px-2' />
                        </div>
                        <div className='flex items-center gap-3 p-[10px] hover:bg-[#f5f5f5] hover:rounded-[15px]'>
                            <label className='flex gap-2 items-center cursor-pointer'><input type="checkbox" />Brands</label>
                            <select name="brands" className='border rounded font-normal text-base px-6 py-1 focus:outline-none'>
                                <option value="">Select a brand</option>
                                <option value="brand1">Brand 1</option>
                                <option value="brand2">Brand 2</option>
                                <option value="brand3">Brand 3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
