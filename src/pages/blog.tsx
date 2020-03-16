import { graphql, PageRendererProps } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { BlogIndexQueryQuery } from '../../graphql-types';
import ArticlePreview from '../components/article-preview';
import Layout from '../components/layout';

export interface BlogIndexProps extends PageRendererProps {
  data: BlogIndexQueryQuery;
}

const BlogIndex = ({ data, location }: BlogIndexProps) => {
  const siteTitle = data?.site?.siteMetadata?.title;
  const posts = data?.allContentfulBlogPost?.edges;

  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div>Blog</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
