import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo-header.png';

import CartContext from '../context/CartProvider';


import styled from  'styled-components';

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






const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ''
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active'
            })
          : this.setState({
              navBarActiveClass: ''
            });
      }
    );
  };

  render() {

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
            <span style={{fontWeight: 'bold'}}>
            Leo Chupr.&emsp;
            </span>

            <span style={{ color:'white', background:'#363636', fontWeight: 'bold'}}>
            &emsp;Frontstore&emsp;

            </span>

            <span style={{ color:'white', background:'#1d1d1d', fontWeight: 'bold'}}>
            &emsp;0.11 &emsp;

            </span>
            
              {/* <img src={logo} alt="My Store" /> */}
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              
              
              <CartContext.Consumer>
                {value => {
                  return (
                    <Link className="navbar-item menu-item-bigcommerce-cart" to="/cart">
                      Cart
                      
                      {value &&
                        value.state.cart &&
                        value.state.cart.numberItems > 0 && (
                          <span className="bigcommerce-cart__item-count full">{value.state.cart.numberItems}</span>
                        )}
                    </Link>
                  );
                }}
              </CartContext.Consumer>

              
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/bigcommerce/gatsby-bigcommerce-netlify-cms-starter"
                target="_blank"
                rel="noopener noreferrer">
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
