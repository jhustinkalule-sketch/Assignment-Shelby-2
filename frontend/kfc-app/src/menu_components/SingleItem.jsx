import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcart, addcartcount } from '../redux/action'
import styles from "./item.module.css"
import Reccom from './Reccom'
import Beverages from "./Beverages"
import { useNavigate } from 'react-router-dom'
import { getFoodImage } from '../utils/foodImages'
import { BsCartPlus } from 'react-icons/bs'
import { convertInrTextToUgx, formatUgx } from '../utils/currency'

const SingleItem = ({_id,image,price,title,desc}) => {
const dispatch = useDispatch();
const cart = useSelector((state) => state.cart);
const navigate= useNavigate()
const itemId = String(_id ?? title);
const quantity = cart.find(
  (item) => String(item.id ?? item._id ?? item.title) === itemId
)?.qty || 0;
const fallbackImage = getFoodImage(title);

  return (
    <div className={styles.singleupperbox} >

    <div className={styles.mainsinglebox} >
      <img
        src={image || fallbackImage}
        onError={(event) => {
          event.currentTarget.src = fallbackImage;
        }}
        alt={title}
      />
      <h2>{title}</h2>
      <p className={styles.singledesc} >{convertInrTextToUgx(desc)}</p>
      <p>Calories {Math.round(Math.random()*(2000-1000)+1000)}</p>
      <h2>{formatUgx(price)}</h2>
       
        <div className={styles.cartbutton}>
          {quantity === 0 ? (
            <button
              className={styles.addto}
              type="button"
              onClick={() => dispatch(addcart({
                id: itemId,
                image: image || fallbackImage,
                price,
                title,
                desc,
                qty: 1,
              }))}
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
          <button type="button" aria-label="Open cart" onClick={() => navigate("/cart")}>
            <BsCartPlus aria-hidden="true" />
          </button>
        </div>
        <h1 className={styles.pepsi}>You can enjoy this delicious dish with </h1>
        <Beverages/>
    </div>
    <div>
      <Reccom/>
    </div>     

    </div>
  )
}

export default SingleItem