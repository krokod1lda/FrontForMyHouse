import React from "react";
import './HouseComp.css'

export const House = ({house}) => {
  return (
    <div className="HouseDealWrapper">
      <div className="HouseDeal">
        <img src={house.imageSource} className="HouseImage"/>
        <div className="InformationBlock">
          <div className="Price">{house.cost}</div>
          <div className="Owner">{house.owner}</div>
          <div>{house.region}</div>
        </div>
      </div>
    </div>
  );
}