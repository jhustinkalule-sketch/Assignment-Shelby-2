
import { addbiryani } from '../redux/action';
import { getMenuData } from "../utils/getMenuData"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./item.module.css"
import Item from './Item';

const Biryani = () => {
    const dispatch = useDispatch();
    const biryani = useSelector((state)=>state.biryani)
    useEffect(()=>{
        fetchData();
    },[])
    
     const fetchData= async()=>{
        let payload= await getMenuData("biryani");
         dispatch(addbiryani(payload));
     }


  return (
  <div id="biryani">
    <h1>BIRYANI BUCKETS</h1>
   <div className={styles.itembox} >
    {biryani.map((el)=>{
      return <Item {...el} key={el._id || el.title}  />
    })}
   </div>
  </div>
  )
}

export default Biryani