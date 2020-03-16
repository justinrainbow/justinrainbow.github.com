import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, INLINES, MARKS } from '@contentful/rich-text-types';
import React from 'react';
import EntryHyperlink from './entry-hyperlink';

const Bold = ({ children }) => <span className="bold">{children}</span>;
const Text = ({ children }) => <p className="align-center">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [INLINES.ENTRY_HYPERLINK]: (node, children) => (
      <EntryHyperlink id={node.data.target.sys.contentful_id}>
        {children}
      </EntryHyperlink>
    ),
  },
};

export interface RichTextProps {
  node: Document;
}

const RichText = ({ node }: RichTextProps) => (
  <>{documentToReactComponents(node, options)}</>
);

export default RichText;
