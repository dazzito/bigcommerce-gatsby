import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Navbar from './Navbar';
import Notify from './bigcommerce/Notify';
import './all.sass';
import './Layout.css';

import './front/typography.scss';

import useSiteMetadata from './SiteMetadata';

import styled from  'styled-components';

const Wrapper = styled.div`

  border-top: solid 1px #eeeeee;

  @media screen and (max-width: 1024px)
  {
    margin-top: 52px;
    
  }


`;



const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
      <Notify />
      <Navbar />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
