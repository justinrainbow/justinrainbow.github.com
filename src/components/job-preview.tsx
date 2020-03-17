import { CardContent, Typography } from '@material-ui/core';
import { graphql } from 'gatsby';
import React from 'react';
import { JobInfoFragment, ProjectInfoFragment } from '../../graphql-types';
import { EntityMapProvider } from '../providers/entity-map';
import RichText from './rich-text';
// import Img from 'gatsby-image'

export interface JobPreviewProps {
  job: JobInfoFragment;
}

const JobPreview = ({ job }: JobPreviewProps) => (
  <EntityMapProvider
    items={job.projects}
    idGetter={(node: ProjectInfoFragment) => node.contentful_id}
  >
    <article>
      <Typography variant="h5" component="h2">
        {job.company.name}
      </Typography>
      <Typography variant="body1">{job.jobTitle}</Typography>
      <small>{job.startDate}</small>-<small>{job.endDate}</small>
      <CardContent>
        <RichText node={job.childContentfulJobSummaryRichTextNode.json} />
      </CardContent>
    </article>
  </EntityMapProvider>
);

export const JobPreviewFragment = graphql`
  fragment JobInfo on ContentfulJob {
    id
    jobTitle
    startDate(formatString: "MMMM, YYYY")
    endDate(formatString: "MMMM, YYYY")
    company {
      ...CompanyInfo
    }
    childContentfulJobSummaryRichTextNode {
      json
    }
    projects {
      ...ProjectInfo
    }
    technologiesUsed
  }

  fragment ProjectInfo on ContentfulProject {
    id
    contentful_id
    title
    slug
    childContentfulProjectDescriptionRichTextNode {
      json
    }
  }

  fragment CompanyInfo on ContentfulCompany {
    id
    contentful_id
    slug
    name
  }
`;

export default JobPreview;
