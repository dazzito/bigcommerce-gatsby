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

const NavbarWrapper = styled.nav`

  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  border-bottom: solid 5px #fafafa; 
  flex-direction: row;
    display: flex;


    @media screen and (max-width: 1024px)
  {
    position: fixed;
    height: 52px;
    background: white;
    z-index: 1;
  }


`

const NavMenu = styled.div`


  justify-content: flex-end;
  flex: 1;


  display: flex;
    flex-direction: row;
    background: white;
@media screen and (max-width: 1024px)
  {
    position: fixed;
    top: 52px;
    right: 0;
    left: 0;
    flex-direction: column;
    display: ${props => props.display}
  }



  

   

`;






const NavLogo = styled.img`

  max-height: 55px;
  margin-left: 1.25em;
  margin-top: 1.25em;


@media screen and (max-width: 1024px)

  {
    max-height: 40px;
    margin-left: 0.25em;
     margin-top: 0.25em;
  }

`;


const NavItem = styled(Link)`
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    color: inherit;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    position: relative;
    align-self: center;
    text-align: center;
    


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
      <NavbarWrapper
        role="navigation"
        aria-label="main-navigation">
        
        
     
        
           
           
            <Link to="/" title="Logo">
            <NavLogo src={logo} alt="Naaz" />
            </Link>
           
            {/* <NavItem to="/about">
            <motion.div animate={{y: -3, scale:0.9  }}
             transformTemplate={(props, transform) =>
              // Disable GPU acceleration to prevent blurry text
              transform.replace(" translateZ(0)", "")
            }> */}
{/* 
<span style={{fontWeight: 'bold'}}>
            By Leo Chupr.&emsp;
            </span>

            <span style={{ color:'white', background:'#363636', fontWeight: 'bold'}}>
            &emsp;Frontstore&emsp;

            </span>

            <span style={{ color:'white', background:'#1d1d1d', fontWeight: 'bold'}}>
            &emsp;0.11 &emsp;

            </span>
             */}
                {/* </motion.div>
              </NavItem>
           
           */}
            
           
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}>
              <span />
              <span />
              <span />
            </div>
        

          
          <NavMenu display={this.state.active ? "block" : 'none' }>
          
          


           

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
                    <NavItem to="/cart">
                     
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
        
          </NavMenu>
      
      </NavbarWrapper>
    );
  }
};

export default Navbar;
