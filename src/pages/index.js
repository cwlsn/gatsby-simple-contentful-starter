import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import moment from 'moment';
import Layout from '../components/Layout';

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        contentfulHomePage {
          title
          date
          content {
            childMarkdownRemark {
              html
            }
          }
          image {
            file {
              url
            }
          }
        }
      }
    `}
    render={({
      contentfulHomePage: {
        title,
        date,
        content: {
          childMarkdownRemark: { html },
        },
      },
    }) => (
      <Layout>
        <h1>{title}</h1>
        <small>Created on {moment(date).format('L')}</small>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    )}
  />
);

export default HomePage;
