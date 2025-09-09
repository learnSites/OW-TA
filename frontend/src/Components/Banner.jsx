import React from 'react'; 
import './Banner.css';
import { useState,useEffect } from 'react';

export default function Banner(){
    let [index , setIndex]=useState(0);
    let image = [
        '/asset/computer.jpg',
        '/asset/fun.jpg',
        '/asset/game.jpg',
        '/asset/kids.jpg',
        '/asset/mens.jpg',
        '/asset/network.jpg'
    ];

    useEffect(()=>{
        let timeIntreval = setInterval(()=>{
            setIndex(previous => previous === (image.length-1) ? 0 : previous + 1);  
        },6000);

        return ()=> clearInterval(timeIntreval);
    },[])
    return(
        <>
            <div className='container'>
                <div onClick={()=>{
                    if(index == 0){
                        setIndex((image.length-1));
                    }else{
                        setIndex(index-1);
                    }
                    }} className='leftElement'>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className='centerImage'>
                    <img style={{height: 'inherit',width: '100%'}} src={image[index]} alt="Logo" />
                </div>
                <div className='centerElement'>
                    {
                        image.map((key,indexI)=>{
                            return <div onClick={()=>{
                                setIndex(indexI)
                            }} key={indexI} id={`brCirle${indexI}`} className={`${indexI === (image.length-1) ? 'bannerLength' : 'bannerCircle'} ${indexI === index ? 'active' : ''}`}></div>
                        })
                    }
                </div>
                <div onClick={()=>{
                    if(index == (image.length-1)){
                        setIndex(0);
                    }else{
                        setIndex(index+1);
                    }
                    }}  className='rightElement'>
                    <i className="fas fa-chevron-right "></i>
                </div>
            </div>
        </>
    )
}