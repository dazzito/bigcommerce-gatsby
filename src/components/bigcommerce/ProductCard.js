import React, { createContext, useState, useEffect }  from 'react';
import { Link } from 'gatsby';
import AddToCartButton from './AddToCartButton';
import ProductPrices from './ProductPrices';


import styled from 'styled-components';


import {flexbox , space, layout, typography, color, background} from 'styled-system'



const Wrapper = styled.div`
  flex: 195px;
  /* width: 195px; */     
  margin: 10px; 
  flex-direction: column;
  /* border: solid 1px #eeeeee; */
  display: flex;
  &:hover {
    /* box-shadow: 0px 0px 2px #d1d1d1; */
    
  }

`;

//GENERIC

const Row = styled.div`
  display: flex;
  justify-content: row;
`;


const Box = styled.div`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${background}
  ${flexbox};
  
  position: relative;
`

const Flex = styled(Box)`
  display: flex;
 
`




const MetaBox = styled.div`
position: absolute;
display: flex;
flex-direction: column;
bottom: 0;
left: 0;
right: 0;
${space}

`;

// const Img = styled.img`
  
// `;



// const Card = styled.div`
//   width: 300px;

//   display: flex;
//   flex-direction: column;
//   flex-wrap: nowrap;
//   margin: 1em; 
//   border: solid #fafafa;
//     padding: 1em;
// `;


// const Img = styled.img`


// `;


const CardImageContainer = styled.div`
  position: relative;
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`


const MetaText = styled(Link)`
    color: #585858;
    /* background: #f5f5f5; */
    border-radius: 4px;
    /* white-space: nowrap; */
    /* overflow: hidden;
    text-overflow: ellipsis; */
    flex: 1;
    /* padding: 0em 0.25em; */
    margin-bottom: 0.75em;
    font-size: 0.9em;
`;

const MetaContainer = styled.div`
    
    margin-top: 0.75em;
    display: flex;
    flex-direction: column;
`;

const MetaRow = styled(Row)`
  flex: 1;

  *{
    flex: 1;
  }


`;






class ProductCard extends React.Component {
  render() {
    const product = this.props.product;

    return (



     
      <Wrapper  >
        <img
              className="attachment-bc-medium size-bc-medium"
              src={
                (product.images.length && product.images[0].url_standard) ||
                '/img/default-bc-product.png'
              }
              alt={product.name}
            />

              <Flex flex={1} flexDirection='column'>
              
              <Box p={"0.5em"}>
              <Box flex={1} >
              <MetaText to={`/products${product.custom_url.url}`}>
              {product.name}
              </MetaText>

              <ProductPrices product={product} />
              </Box>
             
              </Box>
            
              
            
      
      <Box mt="auto">
      <AddToCartButton 
          productId={product.variants[0].product_id}
          variantId={product.variants[0].id}>
          Add to Cart
        </AddToCartButton>

      </Box>
     
      
              </Flex>

      
      </Wrapper>
     
    

     
    )
  }
}

export default ProductCard;
