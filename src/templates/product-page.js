import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ProductCard from '../components/bigcommerce/ProductCard';

import Select from "../components/front/Select"

import ProductFilter from '../components/bigcommerce/ProductFilter';


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



const Container = styled.div`

max-width: 1440px;
display: flex;
flex-wrap: wrap;
margin-left: auto;
margin-right: auto;
padding: 200px 0;

`;

const ProductContainer = styled.div`
  width: 75%;
  display: flex;
 flex-wrap: wrap;
 border-left: solid 1px #eeeeee;
`;




const FilterBar = styled.div`
width: 25%;
height: 50vh;


`;


const Label = styled.label`
 ${space}

`;

const TopOptions = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  border-bottom: solid 1px #eeeeee;
  position: relative;
`;


export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  products
}) => (
  <Container>


  <FilterBar>
<ProductFilter/>

  </FilterBar>

<ProductContainer>

<TopOptions >

<label>

  <small>Sort By</small>

<Select height="48px">
        <option value="0">
          Newest
        </option>
        <option value="1">Featured</option>
        <option value="2">Price: Low to High</option>
        <option value="3">Price: High to Low</option>
    


</Select>


</label>

<label>

  <small> Showing x of y items</small>

<Select height="48px">
        <option value="0">
          16
        </option>
        <option value="1">32</option>
        <option value="2">64</option>
        <option value="3">128</option>
   
    


</Select>


</label>

<Label ml="auto">

  <small> Page </small>

<Select height="48px">
        <option value="0">
          1
        </option>
        <option value="1">2</option>
        <option value="2">3</option>
        <option value="3">4</option> 
    
   
    


</Select>

<small> of </small>
        <small> [MAX_PAGE] </small>

</Label>



</TopOptions>



{products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}



</ProductContainer>




  </Container>
);








ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  products: PropTypes.array
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const products = data.allBigCommerceProducts.nodes;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        products={products}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    }),
    allBigCommerceProducts: PropTypes.shape({
      nodes: PropTypes.array
    })
  })
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    allBigCommerceProducts {
      nodes {
        id
        brand_id
        name
        sku
        price
        calculated_price
        retail_price
        sale_price
        map_price
        bigcommerce_id
        custom_url {
          url
        }
        images {
          url_thumbnail
          url_standard
        }
        variants {
          product_id
          id
          option_values {
            label
            option_display_name
          }
          sku
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
