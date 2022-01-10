import React , {useState} from 'react';
import Menu from './menuapi'
import MenuCard from "./MenuCard";
import "./style.css";
const Resturent = () => {
 
  const [menuData,setMenuData]= useState(Menu);
  return (
             <>

             <nav className='navbar'> 
             <div className='btn-group'>
               <button className='btn-group__item'>breakfast</button>
               <button className='btn-group__item'>lunch</button>
               <button className='btn-group__item'>dinner</button>
               <button className='btn-group__item'>thali</button>
               
             </div>

             </nav>
             <MenuCard menuData={menuData} />
             </>
  )
}

export default Resturent

