import React from "react";
import ShopItem from "../ShopItem/ShopItem";

export default function ListView( { cards } ) {
  
  const cardsData = cards.map( (card, index) => {
      return <ShopItem key={index} card={card}/>
  });

  return (
      <div className='listView'>
          {cardsData}
      </div>
)
}
