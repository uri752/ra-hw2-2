import React from 'react'

export default function ShopCard(props) {
  const {card} = props;
  return (
    <div className='itemCardView'>
            <div className='card'>
                <div className='nameItem'>{card.name}</div>
                <div className='colorItem'>{card.color}</div>
                <div><img src={card.img}/></div>
                <div className='containerOrder'>
                    <div className='priceItem'>${card.price}</div>
                    <div className="buttonItem" onClick={()=> console.log(card.name)}>Add to cart</div>
                </div>
            </div>
        </div>
  )
}
