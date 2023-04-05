import React from "react";
import { House } from './houseComp';
import houses_fillings from './houses';
import { useState, useEffect } from 'react';
import './HousesCarousel.css';
import arrow from '../images/icons/right-arrow.svg'

export const HousesCarousel = ({children}) => {

    const [houses, setHouses] = useState([])
    const [offset, setOffset] = useState(0)
    const houseDealWIDTH = 305;
    useEffect(() => {
        setHouses(houses.concat(houses_fillings))
    }, [])

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + houseDealWIDTH
            
            return Math.min(newOffset, 0)
        })
    }
    
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - houseDealWIDTH
            const maxOffset = -(houseDealWIDTH * (houses.length - 3))
            return Math.max(newOffset, maxOffset)
        })
    }

    return (
        <div className='HousesCarousel'>
            <button className='CarouselButton LeftButton' onClick={handleLeftArrowClick}>
                <img className="Arrow LeftArrow" src={arrow}/>
            </button>
            <div className='HousesWindow'>
                <div className='HousesWrapper'
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}>
                {
                  houses.map((house, index) => {
                    return <House house={house} key={index}></House>
                  })}
                </div>
            </div>
            <button className='CarouselButton RightButton' onClick={handleRightArrowClick}>
                <img className="Arrow RightArrow" src={arrow}/>
            </button>
        </div>
    )
}