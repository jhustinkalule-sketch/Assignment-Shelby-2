import { ADDBEVERAGES, ADDBIRYANI, ADDBOX, ADDBURGER, ADDCART, ADDCHICKEN, ADDLAUNCH, ADDROLLS, ADDSNACKS, ADDSTAYHOME, CARTCOUNT, DELETECART, GETCART } from "./action";
import { loadCart, saveCart } from "../utils/cartStorage";


const initialState={
    chicken:[],
    launch:[],
    rolls:[],
    biryani:[],
    box:[],
    burger:[],
    stayhome:[],
    snacks:[],
    beverages:[],
    cart: loadCart()
}

export const reducer= (state=initialState,{type,payload})=>{

switch(type){
    case ADDCHICKEN:{
      return{
        ...state,chicken:payload
      }
    }
    case ADDLAUNCH:{
        return{
          ...state,launch:payload
        }
      }
      case ADDROLLS:{
        return{
          ...state,rolls:payload
        }
      }
      case ADDBIRYANI:{
        return{
          ...state,biryani:payload
        }
      }
      case ADDBOX:{
        return{
          ...state,box:payload
        }
      }
      case ADDBURGER:{
        return{
          ...state,burger:payload
        }
      }
      case ADDSTAYHOME:{
        return{
          ...state,stayhome:payload
        }
      }
      case ADDSNACKS:{
        return{
          ...state,snacks:payload
        }
      }
      case ADDBEVERAGES:{
        return{
          ...state,beverages:payload
        }
      }
      case ADDCART:{
        const itemId = String(payload.id ?? payload._id ?? payload.title);
        const existingItem = state.cart.find(
          (item) => String(item.id ?? item._id ?? item.title) === itemId
        );
        const cart = existingItem
          ? state.cart.map((item) =>
              String(item.id ?? item._id ?? item.title) === itemId
                ? { ...item, qty: Number(item.qty || 0) + Number(payload.qty || 1) }
                : item
            )
          : [...state.cart, { ...payload, id: itemId, qty: Number(payload.qty || 1) }];
        saveCart(cart);
        return{
          ...state,cart
        }
      }
      case CARTCOUNT:{
        const itemId = String(payload.id ?? payload._id ?? payload.title);
        const cart = state.cart
          .map((item) =>
            String(item.id ?? item._id ?? item.title) === itemId
              ? { ...item, qty: Number(payload.qty) }
              : item
          )
          .filter((item) => item.qty > 0);
        saveCart(cart);
        return{
          ...state,cart:cart
        }
      }
      case GETCART:{
          saveCart(payload);
          return{
            ...state,cart:payload
          }
      }
      case DELETECART:{
        const cart = state.cart.filter(
          (item) => String(item.id ?? item._id ?? item.title) !== String(payload)
        );
        saveCart(cart);
          return{
            ...state,cart:cart
          }
      }
    default :return state;
}
}