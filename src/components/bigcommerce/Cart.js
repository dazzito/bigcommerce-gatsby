import React from "react";
import { Link } from "gatsby";

import CurrencyFormatter from "./CurrencyFormatter";
import Loader from "../Loader";

import CartContext from "../../context/CartProvider";

import styled from "styled-components";

import {
  flexbox,
  space,
  layout,
  typography,
  color,
  background
} from "styled-system";

const Box = styled.div`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${background}
  ${flexbox};
  
  position: relative;
`;

const CartItem = styled.div`
  text-align: left;
  border-bottom: solid 1px;
    padding: 1em;
`;

const QuantityButton = styled.button`
  background: white;
  border: none;
  padding: 0px 10px;
`;

const AdjustItem = props => {
  const { item, updatingItem, cartType } = props;
  let minusBtn, plusBtn;

  if (cartType === "full") {
    minusBtn = (
      <button onClick={() => props.updateCartItemQuantity(item, "minus")}>
        -
      </button>
    );

    plusBtn = (
      <button onClick={() => props.updateCartItemQuantity(item, "plus")}>
        +
      </button>
    );
  }

  return (
    <Box display="flex" flexDirection="row">
      <QuantityButton
        onClick={() => props.updateCartItemQuantity(item, "minus")}
      >
        -
      </QuantityButton>

      {updatingItem === item.id ? <Loader /> : <div>{item.quantity}</div>}
      <QuantityButton
        onClick={() => props.updateCartItemQuantity(item, "plus")}
      >
        +
      </QuantityButton>
    </Box>
  );
};

const CustomItems = props => {
  const { items } = props;
  const cartType = props.cartType;
  let itemImage;

  return (
    <>
      {items.map(item => {
        if (cartType === "full") {
          itemImage = (
            <div className="bc-cart-item-image">
              <img src="/img/default-bc-product.png" alt={`${item.name}`} />
              <button
                className="bc-link bc-cart-item__remove-button"
                onClick={() => props.removeItemFromCart(item.id)}
                type="button"
              >
                Remove
              </button>
            </div>
          );
        }

        return (
          <div className="bc-cart-item" key={item.id}>
            {itemImage}

            <div className="bc-cart-item-meta">
              <h3 className="bc-cart-item__product-title">{item.name}</h3>
              <span className="bc-cart-item__product-brand">{item.sku}</span>
            </div>

            <AdjustItem {...props} item={item} cartType={cartType} />

            <CurrencyFormatter
              currency={props.currency.code}
              amount={item.list_price}
            />
          </div>
        );
      })}
    </>
  );
};

const StandardItems = props => {
  const { items } = props;
  const cartType = props.cartType;
  let itemImage;

  return (
    <>
      {items.map(item => {
        if (cartType === "full") {
          itemImage = (
            <div className="bc-cart-item-image">
              <img src={item.image_url} alt={`${item.name}`} />
              <button
                className="bc-link bc-cart-item__remove-button"
                onClick={() => props.removeItemFromCart(item.id)}
                type="button"
              >
                Remove
              </button>
            </div>
          );
        }

        return (
          <CartItem key={item.id}>
            {itemImage}
            <AdjustItem {...props} item={item} cartType={cartType} />

            <h3>{item.name}</h3>
           


            <Box display="flex" justifyContent="space-between"> 
            <span>{item.sku}</span>
             <CurrencyFormatter
                currency={props.currency.code}
                amount={item.list_price}
              />

            </Box>
           
          </CartItem>
        );
      })}
    </>
  );
};

const GiftCertificateItems = props => {
  const items = props.items;
  const cartType = props.cartType;
  let itemImage;

  return (
    <>
      {items.map(item => {
        if (cartType === "full") {
          itemImage = (
            <div className="bc-cart-item-image">
              <button
                className="bc-link bc-cart-item__remove-button"
                onClick={() => props.removeItemFromCart(item.id)}
                type="button"
              >
                Remove
              </button>
            </div>
          );
        }

        return (
          <div className="bc-cart-item" key={item.id}>
            {itemImage}

            <div className="bc-cart-item-meta">
              <h3 className="bc-cart-item__product-title">
                {item.name} - Gift Certificate for {item.recipient.name}
              </h3>
              <span className="bc-cart-item__product-brand">
                Theme: {item.theme}
              </span>
            </div>

            <CurrencyFormatter
                currency={props.currency.code}
                amount={item.amount}
              />
          </div>
        );
      })}
    </>
  );
};

const Cart = class extends React.Component {
  render() {
    const cartType = this.props.cartType;
    let cartFooter;

    return (
      <CartContext.Consumer>
        {value => {
          if (!value) {
            return null;
          }
          const { state, removeItemFromCart, updateCartItemQuantity } = value;
          const {
            currency,
            cartAmount,
            lineItems,
            numberItems,
            redirectUrls
          } = state.cart;
          const { updatingItem } = state;

          if (cartType === "full") {
            cartFooter = (
              <footer className="bc-cart-footer">
                <div className="bc-cart-subtotal">
                  <span className="bc-cart-subtotal__label">Subtotal: </span>
                  <span className="bc-cart-subtotal__amount">
                    <CurrencyFormatter
                      currency={currency.code}
                      amount={cartAmount}
                    />
                  </span>
                </div>

                {numberItems > 0 && (
                  <div className="bc-cart-actions">
                    <form
                      action={redirectUrls.checkout_url}
                      method="post"
                      encType="multipart/form-data"
                    >
                      <button
                        className="bc-btn bc-cart-actions__checkout-button"
                        type="submit"
                      >
                        Proceed to Checkout
                      </button>
                    </form>
                  </div>
                )}
              </footer>
            );
          }

          return (
            <>
              <Box display="flex" flexDirection="column" overflow="auto">
                <StandardItems
                  currency={currency}
                  updatingItem={updatingItem}
                  updateCartItemQuantity={updateCartItemQuantity}
                  removeItemFromCart={removeItemFromCart}
                  items={lineItems.physical_items}
                  cartType={cartType}
                />
                <StandardItems
                  currency={currency}
                  updatingItem={updatingItem}
                  updateCartItemQuantity={updateCartItemQuantity}
                  removeItemFromCart={removeItemFromCart}
                  items={lineItems.digital_items}
                  cartType={cartType}
                />
                <CustomItems
                  currency={currency}
                  updatingItem={updatingItem}
                  updateCartItemQuantity={updateCartItemQuantity}
                  removeItemFromCart={removeItemFromCart}
                  items={lineItems.custom_items}
                  cartType={cartType}
                />
                <GiftCertificateItems
                  currency={currency}
                  updatingItem={updatingItem}
                  removeItemFromCart={removeItemFromCart}
                  items={lineItems.gift_certificates}
                  cartType={cartType}
                />
              </Box>

              {cartFooter}
            </>
          );
        }}
      </CartContext.Consumer>
    );
  }
};

export default Cart;
