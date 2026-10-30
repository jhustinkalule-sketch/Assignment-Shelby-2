import React from 'react'
import styles from "./item.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { addcart, addcartcount } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import { getFoodImage } from '../utils/foodImages';
import { BsCartPlus } from 'react-icons/bs';
import { convertInrTextToUgx, formatUgx } from '../utils/currency';

const Item = ({_id,image,price,title,desc}) => {
  const fallbackImage = getFoodImage(title)
  const navigate= useNavigate();
  const cart= useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  const itemId = String(_id ?? title);
  const quantity = cart.find(
    (item) => String(item.id ?? item._id ?? item.title) === itemId
  )?.qty || 0;
  const cartItem = {
    id: itemId,
    image: image || fallbackImage,
    price,
    title,
    desc,
  };
  return (
    <div className={styles.innerbox} >
      <img onClick={()=>{
        if (_id) navigate(`/menu/${_id}`)
      }} src={image || fallbackImage} onError={(event) => {
        event.currentTarget.src = fallbackImage
      }} alt={title} />
      <div>
        <h3 className={styles.title} >{title}</h3>
        <p><span style={{fontSize:"11px",background:"red",color:"red",borderRadius:"50%"}} >12</span> Non veg</p>
        <h3>{formatUgx(price)}</h3>
        <p className={styles.desc} >{convertInrTextToUgx(desc)}</p>
        <div className={styles.cartbutton}>
          {quantity === 0 ? (
            <button
              className={styles.addto}
              type="button"
              onClick={() => dispatch(addcart({ ...cartItem, qty: 1 }))}
            >
              Add to Cart
            </button>
          ) : (
            <div>
              <button
                className={styles.minus}
                type="button"
                aria-label={`Remove one ${title}`}
                onClick={() => dispatch(addcartcount({ id: itemId, qty: quantity - 1 }))}
              >
                &#8211;
              </button>
              <span>{quantity}</span>
              <button
                className={styles.plus}
                type="button"
                aria-label={`Add one ${title}`}
                onClick={() => dispatch(addcartcount({ id: itemId, qty: quantity + 1 }))}
              >
                &#43;
              </button>
            </div>
          )}
          <button
            type="button"
            aria-label="Open cart"
            onClick={() => navigate("/cart")}
          >
            <BsCartPlus aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item