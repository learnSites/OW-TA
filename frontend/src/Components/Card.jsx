import React from 'react'; 
import './Card.css';

export default function Card(props){
    return(
        <div className='card'>
            <div className='imageDiv'>
                <img className='image' src={props.src} alt="No Data" />
            </div>
            <div className='nameDiv'>
                {props.name}
            </div>
        </div>
    );
}