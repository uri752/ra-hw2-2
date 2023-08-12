import React from 'react'
import {MdViewList} from 'react-icons/md';
import {MdViewModule} from 'react-icons/md';

export default function IconSwitch(props) {
  const {typeView} = props;
  return (
    <div className='choseTypeView' onClick={() => 
        {
          const newTypeView = typeView === 'ListView' ? 'CardView': 'ListView'; 
          props.choseTypeView(newTypeView); 
          
        }
        }>    
      { typeView === 'ListView' ? <MdViewModule/> : <MdViewList/> }      
    </div>
  )
}
