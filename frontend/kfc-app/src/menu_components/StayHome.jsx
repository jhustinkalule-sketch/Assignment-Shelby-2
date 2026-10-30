
import { addstayhome } from '../redux/action';
import { getMenuData } from "../utils/getMenuData"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./item.module.css"
import Item from './Item';
const StayHome = () => {
  const stayhome= useSelector((state)=>state.stayhome);
  const dispatch= useDispatch();
    useEffect(()=>{
        fetchData();
    },[])
    
     const fetchData= async()=>{
        let payload= await getMenuData("stayhome");
         dispatch(addstayhome(payload));
     }

  return (
  <div id="stayhome">
    <h1>STAY HOME SPECIALS</h1>
   <div className={styles.itembox} >
    {stayhome.map((el)=>{
      return <Item {...el} key={el._id || el.title}  />
    })}
   </div>
  </div>
  )
}

export default StayHome