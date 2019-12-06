import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.png';

import CartContext from '../context/CartProvider';


import styled from  'styled-components';

import {flexbox , space, layout, typography, color, background} from 'styled-system'
import NavIdentity from './front/Identity/NavIdentity';
import { motion } from "framer-motion";
const Box = styled.div`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${background}
  ${flexbox};
  
  position: relative;
`





const NavItem = styled(Link)`
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    color: inherit;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    position: relative;
    align-self: center;


  &:hover{
    color: inherit;
  }

  @media screen and (min-width: 1024px)
  {
    display: flex;
  }

`;



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
            <img src={logo} alt="Naaz" />
            </Link>
           
            <NavItem to="/about">
            <motion.div animate={{y: -3, scale:0.9  }}
             transformTemplate={(props, transform) =>
              // Disable GPU acceleration to prevent blurry text
              transform.replace(" translateZ(0)", "")
            }>

<span style={{fontWeight: 'bold'}}>
            By Leo Chupr.&emsp;
            </span>

            <span style={{ color:'white', background:'#363636', fontWeight: 'bold'}}>
            &emsp;Frontstore&emsp;

            </span>

            <span style={{ color:'white', background:'#1d1d1d', fontWeight: 'bold'}}>
            &emsp;0.11 &emsp;

            </span>
            
                </motion.div>
              </NavItem>
           
          
            
           
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

           

            <NavItem to="/about">
            <motion.div whileHover={{y: -3, scale:1.1, borderBottom: "solid 2px #212121"  }}
             transformTemplate={(props, transform) =>
              // Disable GPU acceleration to prevent blurry text
              transform.replace(" translateZ(0)", "")
            }>


                About Naaz
                </motion.div>
              </NavItem>
            

            
      

              <NavItem to="/products">
              <motion.div whileHover={{y: -3, scale:1.1, borderBottom: "solid 2px #212121"  }}
             transformTemplate={(props, transform) =>
              // Disable GPU acceleration to prevent blurry text
              transform.replace(" translateZ(0)", "")
            }>

                Store
                </motion.div>
              </NavItem>


              <NavItem to="/blog">
              <motion.div whileHover={{y: -3, scale:1.1, borderBottom: "solid 2px #212121"  }}
             transformTemplate={(props, transform) =>
              // Disable GPU acceleration to prevent blurry text
              transform.replace(" translateZ(0)", "")
            }>
                Blog
                </motion.div>
              </NavItem>
              <NavItem to="/contact">
              <motion.div whileHover={{y: -3, scale:1.1, borderBottom: "solid 2px #212121"  }}
             transformTemplate={(props, transform) =>
              // Disable GPU acceleration to prevent blurry text
              transform.replace(" translateZ(0)", "")
            }>
                Contact
                 </motion.div>
              </NavItem>
              
              
              <CartContext.Consumer>
                {value => {
                  return (
                    <NavItem className="navbar-item menu-item-bigcommerce-cart" to="/cart">
                     
                     <motion.div whileHover={{y: -3, scale:1.1, borderBottom: "solid 2px #212121"  }}
             transformTemplate={(props, transform) =>
              // Disable GPU acceleration to prevent blurry text
              transform.replace(" translateZ(0)", "")
            }>
                      Cart
                      
                      {value &&
                        value.state.cart &&
                        value.state.cart.numberItems > 0 && (
                          <span className="bigcommerce-cart__item-count full">{value.state.cart.numberItems}</span>
                        )}

</motion.div>
                    </NavItem>
                  );
                }}
              </CartContext.Consumer>

              
            </div>
            <div className="navbar-end has-text-centered">

              <NavIdentity/>
              {/* <a
                className="navbar-item"
                href="https://github.com/bigcommerce/gatsby-bigcommerce-netlify-cms-starter"
                target="_blank"
                rel="noopener noreferrer">
                <span className="icon">
                  <img src={github} alt="Github" /> 
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
