import React from "react";
import { Link } from "react-router-dom";

export default function ListItem({ coin }) {
  return (
    <div className="home-crypto">
      <Link to={`/${coin.id}`}>

        <span className="home-crypto-image">
            <img src={coin.image} alt="" />
        </span>
         
        <span  className="home-crypto-name">
          {coin.name}
    </span>
       
       <div className="home-crypto-values">
         
        
       <span  className="home-crypto-currentPrice">
       <h5>Current Price</h5>{coin.currentPrice} USD
    </span>

    <span  className="home-crypto-marketCap">
    <h5>Market Cap</h5>{coin.marketCap} USD
    </span>

    <span  className="home-crypto-priceChange">
    <h5>Price Change</h5>{coin.priceChange} USD
    </span>

    <span  className="home-crypto-totalVolume">
    <h5>Trading Volume</h5>{coin.totalVolume} USD

    </span>
        
       </div>
    
       
       

        
          

        
      </Link>
    </div>
  );
}
