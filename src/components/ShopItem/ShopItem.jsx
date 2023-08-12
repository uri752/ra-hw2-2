import React from 'react'

export default function ShopItem(props) {
  const {card} = props;
  return (
    <div className='itemListView'>         
          <div><img className='rowImage' src={card.img}/></div>
          <div className='nameItem'>{card.name}</div>
          <div className='colorItem'>{card.color}</div>
          <div className='priceItem'>${card.price}</div>
          <div className="buttonItem" onClick={()=> console.log(card.name)}>Add to cart</div>                    
      </div>
  )
}
