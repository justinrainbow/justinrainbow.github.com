import { Container } from '@material-ui/core';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { CvQueryQuery } from '../../graphql-types';
import JobPreview, { JobPreviewFragment } from '../components/job-preview';
import Layout from '../components/layout';

const CVPage = ({ data, location }: PageWithData<CvQueryQuery>) => {
  const siteTitle = data.site.siteMetadata.title;
  const jobs = data.allContentfulJob.edges;

  return (
    <Layout location={location}>
      <Helmet title={siteTitle} />
      <Container maxWidth="lg">
        {jobs.map(({ node }) => {
          return <JobPreview key={node.id} job={node} />;
        })}
      </Container>
    </Layout>
  );
};

export default CVPage;

export const pageQuery = graphql`
  query CVQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulJob(sort: { fields: [startDate], order: DESC }) {
      edges {
        node {
          ...JobInfo
        }
      }
    }
  }
`;
