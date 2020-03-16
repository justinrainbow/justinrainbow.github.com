import { Link } from 'gatsby-theme-material-ui';
import React from 'react';
import { useEntityMapRef } from '../providers/entity-map';

export interface EntryHyperlinkProps {
  id: string;
}

const EntryHyperlink: React.FC<EntryHyperlinkProps> = ({ id, children }) => {
  const entry = useEntityMapRef<{ slug: string }>(id);

  if (entry && entry.slug) {
    return <Link to={`/projects/${entry.slug}`}>{children}</Link>;
  }

  return <>{children}</>;
};

export default EntryHyperlink;
