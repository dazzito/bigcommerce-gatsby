import React, { createContext, useState, useEffec, useContext }  from 'react';
import CartContext from '../../context/CartProvider';
import Spinner from "../spinner/Spinner"



import styled from 'styled-components'

const Wrapper = styled.div`
  height: fit-content;
 
 span{
   width: 100%;
 }
 
`;

const Button = styled.button`
    background: #fafafa;
    border: solid #f6f6f6;
    color: #606060;
    transition: all ease 0.1s 0s;

    &:hover{
      background: #363636;
      border: solid #363636;
      color: white;
    }
`;

 


const AddToCartButton = ({ children, productId, variantId }) => {
  const value = useContext(CartContext);
  const addToCart = value && value.addToCart; 
  const addingToCart = value && value.state.addingToCart;
  const isLoading = value && value.state.cartLoading;


  return ( 
    <Wrapper>
 


  
    <Button
    type="submit"
    disabled={addingToCart === productId}
    onClick={() => {addingToCart ? alert("ALready loading") : value.addNotification('loading'); addToCart(productId, variantId);}}>
    {addingToCart === productId ? <span>Adding to Cart <Spinner width="10px" height="10px" ml="6px"/></span> : children}
  </Button>
  </Wrapper>
  ); 
};

export default AddToCartButton;
