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
          image {
            file {
              url
            }
          }
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `}
    render={({
      contentfulHomePage: {
        title,
        date,
        image: {
          file: { url, fileName },
        },
        content: {
          childMarkdownRemark: { html },
        },
      },
    }) => (
      <Layout>
        <h1>{title}</h1>
        <small>Created on {moment(date).format('L')}</small>
        <article dangerouslySetInnerHTML={{ __html: html }} />
        <article>
          <h1>And Also an Image</h1>
          <img src={url} alt={fileName} />
        </article>
      </Layout>
    )}
  />
);

export default HomePage;
