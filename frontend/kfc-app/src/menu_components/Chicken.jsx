import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addchicken } from '../redux/action';
import { getMenuData } from "../utils/getMenuData"
import Item from './Item';
import styles from "./item.module.css"
const Chicken = () => {
    const dispatch = useDispatch();
    const chicken= useSelector((state)=>state.chicken);
    useEffect(()=>{
        fetchData();
    },[])
     const fetchData= async()=>{
        let payload= await getMenuData("chicken");
         dispatch(addchicken(payload));
     }
  
  return (
    <div id="chicken" >
      <h1>CHICKEN BUCKETS</h1>
     <div className={styles.itembox} >
      {chicken.map((el)=>{
        return <Item {...el} key={el._id || el.title}  />
      })}
     </div>
    </div>

  )
}

export default Chicken