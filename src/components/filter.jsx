import './filter.css';
import { useState } from 'react';

export default function Filter() {
    const [options, setOptions] = useState([
        { id: 1, label: 'option 1' },
        { id: 2, label: 'option 2' },
    ]);

    const removeOption = (id) => {
        setOptions(options.filter(option => option.id !== id));
    };

    return (
        <>
            <div className="filterContainer">
                <div className='filterInner'>
                    <div className='filterContent'>
                        <div className='filterOption'>
                            {options.map(option => (
                                <div className='filterItem' key={option.id}>
                                    <p>{option.label}</p>
                                    <button onClick={() => removeOption(option.id)}>x</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='filterButton'>
                        <button><i className="fas fa-filter"></i></button>
                    </div>
                </div>
                <div className='filterChoose'>
                    No filters applied
                </div>
            </div>
        </>
    );
}
