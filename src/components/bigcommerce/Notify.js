import React, { useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import CartContext from '../../context/CartProvider';
import Cart from './Cart'



import Spinner from '../spinner/Spinner'
 
import './Notify.css';
import {CloseIcon} from "../front/icons"
import styled from 'styled-components';



import {flexbox , space, layout, typography, color, background} from 'styled-system'

const Box = styled.div`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${background}
  ${flexbox};
  
  position: relative;
`


const CartSidebar = styled.div`
      bottom: 0;
    right: 0;
    top: 0;
    position: fixed;
  padding: 1rem;
  max-width: 40rem;
  min-height: 20px;
  background-color: white;
  font-weight: 600;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  justify-content: center;
  text-align: center;


`;

export default () => {
  const value = useContext(CartContext);
  const notifications = value && value.notifications;
  const hasNotifications = Array.isArray(notifications) && notifications.length;

  return (hasNotifications ? (
   <>
      {notifications.map(note => (
        <Notification key={note.id} {...note} />
      ))}
      </>
  
  ) : null );
};




// const CartRenderer = (isLoading) => {

//   if(isLoading){
//     return (<Box textAlign='center'><Spinner/></Box>);
//   } else {
//     return (
    

//       <>
    
    
//       <h3>Your Cart</h3>
//   <CloseIcon width={25} height={25} onClick={() => removeNotification(id)}/>
          
 


//           <div className="bc-ajax-add-to-cart__message-wrapper">
//             <p className="bc-ajax-add-to-cart__message bc-alert bc-alert--success">{text == "loading" ? "Loading cart..." : text}</p>
          
//           </div> 

         
         
//           <Cart cartType="overlay" />

          
//           <div className="Actions">
//             <Link to="/cart" className="bc-btn" onClick={() => removeNotification(id)}>View Cart</Link>
//             <a href={value.state.cart.redirectUrls.checkout_url} className="bc-btn">Proceed to Checkout</a>
//           </div>
    
    

    
    
//     </>
    
    
//     );
//   }

// }


const Notification = ({ id, text, type }) => {
  const value = useContext(CartContext);
  const removeNotification = value && value.removeNotification;
  useEffect(() => {
    const timer = setTimeout(() => {
      removeNotification(id);
    }, 9990000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);



  if(text=="loading"){
    return (
      <CartSidebar>
       <h2>Your Cart</h2>

       <h3>Loading...</h3>
    <Box textAlign='center'><Spinner/></Box>
    </CartSidebar>
    );
  } else {
  
  

    return (
    

      <CartSidebar>
    
    
      <h3>Your Cart</h3>
  <CloseIcon width={25} height={25} onClick={() => removeNotification(id)}/>
          
 


          <div className="bc-ajax-add-to-cart__message-wrapper">
            <p className="bc-ajax-add-to-cart__message bc-alert bc-alert--success">{text == "loading" ? "Loading cart..." : text}</p>
          
          </div> 

         
         
          <Cart cartType="overlay" />

          
          <div className="Actions">
            <Link to="/cart" className="bc-btn" onClick={() => removeNotification(id)}>View Cart</Link>
            <a href={value.state.cart.redirectUrls.checkout_url} className="bc-btn">Proceed to Checkout</a>
          </div>
    
    

    
    
    </CartSidebar>
    
    
    );
}
}
