import React from 'react'
import ShopCard from '../ShopCard/ShopCard';

export default function CardView( { cards } ) {
  
    const cardsData = cards.map( (card,index) => {
        return <ShopCard key={index} card={card}/>
    });

    return (
        
        <div className='cardViewGrid'>            
            {cardsData}
        </div>
  )
}
