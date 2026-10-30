import React from 'react'
import styles from "./cart.module.css"
import { useDispatch } from 'react-redux'
import { addcartcount, deleteCart } from '../redux/action'
import { getFoodImage } from '../utils/foodImages'
import { formatUgx, parseInrAmount } from '../utils/currency'

const Cartproduct = ({desc,id,image,price,qty,title,_id}) => {
const dispatch = useDispatch();
const itemId = String(id ?? _id ?? title);
const count = Number(qty) || 1;
const unitPrice = parseInrAmount(price);
const itemImage = image || getFoodImage(title);

const handleRemove = () => dispatch(deleteCart(itemId));

  return (
    <div className={styles.cartproductmain} >
        <div className={styles.cartproductleft}>
            <img
              src={itemImage}
              onError={(event) => {
                event.currentTarget.src = getFoodImage(title);
              }}
              alt={title}
            />
            <div>
                <h3>{title}</h3>
                <ul>
                    <li>{desc}</li>
                </ul>
                <button className={styles.removeButton} type="button" onClick={handleRemove}>
                  Remove
                </button>
            </div>
        </div>
        <div className={styles.cartproductright} >
            
                <button
                  type="button"
                  aria-label={`Remove one ${title}`}
                  disabled={count <= 1}
                  onClick={() => dispatch(addcartcount({ id: itemId, qty: count - 1 }))}
                >
                  &#8211;
                </button>
                <h4>{count}</h4>
                <button
                  type="button"
                  aria-label={`Add one ${title}`}
                  onClick={() => dispatch(addcartcount({ id: itemId, qty: count + 1 }))}
                >
                  &#43;
                </button>
                <h3>{formatUgx(unitPrice * count)}</h3>
            
        </div>
    </div>
  )
}

export default Cartproduct