export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  fixed?: Maybe<ContentfulFixed>;
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'contentful_id' |
  'file___url' |
  'file___details___size' |
  'file___details___image___width' |
  'file___details___image___height' |
  'file___fileName' |
  'file___contentType' |
  'title' |
  'description' |
  'node_locale' |
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'resize___base64' |
  'resize___tracedSVG' |
  'resize___src' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPost = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroImage?: Maybe<ContentfulAsset>;
  author?: Maybe<ContentfulPerson>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  body?: Maybe<ContentfulBlogPostBodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlogPostSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNode>;
};


export type ContentfulBlogPostPublishDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulBlogPostBodyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostBodyTextNodeGroupConnection>;
};


export type ContentfulBlogPostBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostBodyTextNodeFieldsEnum;
};


export type ContentfulBlogPostBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostBodyTextNodeFieldsEnum;
};

export type ContentfulBlogPostBodyTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostBodyTextNode>;
  node: ContentfulBlogPostBodyTextNode;
  previous?: Maybe<ContentfulBlogPostBodyTextNode>;
};

export type ContentfulBlogPostBodyTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'body' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type';

export type ContentfulBlogPostBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulBlogPostBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostBodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostGroupConnection>;
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulBlogPostDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlogPostDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostDescriptionTextNodeGroupConnection>;
};


export type ContentfulBlogPostDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostDescriptionTextNodeFieldsEnum;
};


export type ContentfulBlogPostDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostDescriptionTextNodeFieldsEnum;
};

export type ContentfulBlogPostDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  node: ContentfulBlogPostDescriptionTextNode;
  previous?: Maybe<ContentfulBlogPostDescriptionTextNode>;
};

export type ContentfulBlogPostDescriptionTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'description' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type';

export type ContentfulBlogPostDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulBlogPostDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlogPostDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostEdge = {
  next?: Maybe<ContentfulBlogPost>;
  node: ContentfulBlogPost;
  previous?: Maybe<ContentfulBlogPost>;
};

export type ContentfulBlogPostFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'slug' |
  'publishDate' |
  'tags' |
  'heroImage___id' |
  'heroImage___parent___id' |
  'heroImage___parent___parent___id' |
  'heroImage___parent___parent___children' |
  'heroImage___parent___children' |
  'heroImage___parent___children___id' |
  'heroImage___parent___children___children' |
  'heroImage___parent___internal___content' |
  'heroImage___parent___internal___contentDigest' |
  'heroImage___parent___internal___description' |
  'heroImage___parent___internal___fieldOwners' |
  'heroImage___parent___internal___ignoreType' |
  'heroImage___parent___internal___mediaType' |
  'heroImage___parent___internal___owner' |
  'heroImage___parent___internal___type' |
  'heroImage___children' |
  'heroImage___children___id' |
  'heroImage___children___parent___id' |
  'heroImage___children___parent___children' |
  'heroImage___children___children' |
  'heroImage___children___children___id' |
  'heroImage___children___children___children' |
  'heroImage___children___internal___content' |
  'heroImage___children___internal___contentDigest' |
  'heroImage___children___internal___description' |
  'heroImage___children___internal___fieldOwners' |
  'heroImage___children___internal___ignoreType' |
  'heroImage___children___internal___mediaType' |
  'heroImage___children___internal___owner' |
  'heroImage___children___internal___type' |
  'heroImage___internal___content' |
  'heroImage___internal___contentDigest' |
  'heroImage___internal___description' |
  'heroImage___internal___fieldOwners' |
  'heroImage___internal___ignoreType' |
  'heroImage___internal___mediaType' |
  'heroImage___internal___owner' |
  'heroImage___internal___type' |
  'heroImage___contentful_id' |
  'heroImage___file___url' |
  'heroImage___file___details___size' |
  'heroImage___file___fileName' |
  'heroImage___file___contentType' |
  'heroImage___title' |
  'heroImage___description' |
  'heroImage___node_locale' |
  'heroImage___fixed___base64' |
  'heroImage___fixed___tracedSVG' |
  'heroImage___fixed___aspectRatio' |
  'heroImage___fixed___width' |
  'heroImage___fixed___height' |
  'heroImage___fixed___src' |
  'heroImage___fixed___srcSet' |
  'heroImage___fixed___srcWebp' |
  'heroImage___fixed___srcSetWebp' |
  'heroImage___resolutions___base64' |
  'heroImage___resolutions___tracedSVG' |
  'heroImage___resolutions___aspectRatio' |
  'heroImage___resolutions___width' |
  'heroImage___resolutions___height' |
  'heroImage___resolutions___src' |
  'heroImage___resolutions___srcSet' |
  'heroImage___resolutions___srcWebp' |
  'heroImage___resolutions___srcSetWebp' |
  'heroImage___fluid___base64' |
  'heroImage___fluid___tracedSVG' |
  'heroImage___fluid___aspectRatio' |
  'heroImage___fluid___src' |
  'heroImage___fluid___srcSet' |
  'heroImage___fluid___srcWebp' |
  'heroImage___fluid___srcSetWebp' |
  'heroImage___fluid___sizes' |
  'heroImage___sizes___base64' |
  'heroImage___sizes___tracedSVG' |
  'heroImage___sizes___aspectRatio' |
  'heroImage___sizes___src' |
  'heroImage___sizes___srcSet' |
  'heroImage___sizes___srcWebp' |
  'heroImage___sizes___srcSetWebp' |
  'heroImage___sizes___sizes' |
  'heroImage___resize___base64' |
  'heroImage___resize___tracedSVG' |
  'heroImage___resize___src' |
  'heroImage___resize___width' |
  'heroImage___resize___height' |
  'heroImage___resize___aspectRatio' |
  'author___id' |
  'author___parent___id' |
  'author___parent___parent___id' |
  'author___parent___parent___children' |
  'author___parent___children' |
  'author___parent___children___id' |
  'author___parent___children___children' |
  'author___parent___internal___content' |
  'author___parent___internal___contentDigest' |
  'author___parent___internal___description' |
  'author___parent___internal___fieldOwners' |
  'author___parent___internal___ignoreType' |
  'author___parent___internal___mediaType' |
  'author___parent___internal___owner' |
  'author___parent___internal___type' |
  'author___children' |
  'author___children___id' |
  'author___children___parent___id' |
  'author___children___parent___children' |
  'author___children___children' |
  'author___children___children___id' |
  'author___children___children___children' |
  'author___children___internal___content' |
  'author___children___internal___contentDigest' |
  'author___children___internal___description' |
  'author___children___internal___fieldOwners' |
  'author___children___internal___ignoreType' |
  'author___children___internal___mediaType' |
  'author___children___internal___owner' |
  'author___children___internal___type' |
  'author___internal___content' |
  'author___internal___contentDigest' |
  'author___internal___description' |
  'author___internal___fieldOwners' |
  'author___internal___ignoreType' |
  'author___internal___mediaType' |
  'author___internal___owner' |
  'author___internal___type' |
  'author___name' |
  'author___title' |
  'author___company' |
  'author___email' |
  'author___phone' |
  'author___facebook' |
  'author___twitter' |
  'author___github' |
  'author___image___id' |
  'author___image___parent___id' |
  'author___image___parent___children' |
  'author___image___children' |
  'author___image___children___id' |
  'author___image___children___children' |
  'author___image___internal___content' |
  'author___image___internal___contentDigest' |
  'author___image___internal___description' |
  'author___image___internal___fieldOwners' |
  'author___image___internal___ignoreType' |
  'author___image___internal___mediaType' |
  'author___image___internal___owner' |
  'author___image___internal___type' |
  'author___image___contentful_id' |
  'author___image___file___url' |
  'author___image___file___fileName' |
  'author___image___file___contentType' |
  'author___image___title' |
  'author___image___description' |
  'author___image___node_locale' |
  'author___image___fixed___base64' |
  'author___image___fixed___tracedSVG' |
  'author___image___fixed___aspectRatio' |
  'author___image___fixed___width' |
  'author___image___fixed___height' |
  'author___image___fixed___src' |
  'author___image___fixed___srcSet' |
  'author___image___fixed___srcWebp' |
  'author___image___fixed___srcSetWebp' |
  'author___image___resolutions___base64' |
  'author___image___resolutions___tracedSVG' |
  'author___image___resolutions___aspectRatio' |
  'author___image___resolutions___width' |
  'author___image___resolutions___height' |
  'author___image___resolutions___src' |
  'author___image___resolutions___srcSet' |
  'author___image___resolutions___srcWebp' |
  'author___image___resolutions___srcSetWebp' |
  'author___image___fluid___base64' |
  'author___image___fluid___tracedSVG' |
  'author___image___fluid___aspectRatio' |
  'author___image___fluid___src' |
  'author___image___fluid___srcSet' |
  'author___image___fluid___srcWebp' |
  'author___image___fluid___srcSetWebp' |
  'author___image___fluid___sizes' |
  'author___image___sizes___base64' |
  'author___image___sizes___tracedSVG' |
  'author___image___sizes___aspectRatio' |
  'author___image___sizes___src' |
  'author___image___sizes___srcSet' |
  'author___image___sizes___srcWebp' |
  'author___image___sizes___srcSetWebp' |
  'author___image___sizes___sizes' |
  'author___image___resize___base64' |
  'author___image___resize___tracedSVG' |
  'author___image___resize___src' |
  'author___image___resize___width' |
  'author___image___resize___height' |
  'author___image___resize___aspectRatio' |
  'author___blog_post' |
  'author___blog_post___id' |
  'author___blog_post___parent___id' |
  'author___blog_post___parent___children' |
  'author___blog_post___children' |
  'author___blog_post___children___id' |
  'author___blog_post___children___children' |
  'author___blog_post___internal___content' |
  'author___blog_post___internal___contentDigest' |
  'author___blog_post___internal___description' |
  'author___blog_post___internal___fieldOwners' |
  'author___blog_post___internal___ignoreType' |
  'author___blog_post___internal___mediaType' |
  'author___blog_post___internal___owner' |
  'author___blog_post___internal___type' |
  'author___blog_post___title' |
  'author___blog_post___slug' |
  'author___blog_post___publishDate' |
  'author___blog_post___tags' |
  'author___blog_post___heroImage___id' |
  'author___blog_post___heroImage___children' |
  'author___blog_post___heroImage___contentful_id' |
  'author___blog_post___heroImage___title' |
  'author___blog_post___heroImage___description' |
  'author___blog_post___heroImage___node_locale' |
  'author___blog_post___author___id' |
  'author___blog_post___author___children' |
  'author___blog_post___author___name' |
  'author___blog_post___author___title' |
  'author___blog_post___author___company' |
  'author___blog_post___author___email' |
  'author___blog_post___author___phone' |
  'author___blog_post___author___facebook' |
  'author___blog_post___author___twitter' |
  'author___blog_post___author___github' |
  'author___blog_post___author___blog_post' |
  'author___blog_post___author___spaceId' |
  'author___blog_post___author___contentful_id' |
  'author___blog_post___author___createdAt' |
  'author___blog_post___author___updatedAt' |
  'author___blog_post___author___node_locale' |
  'author___blog_post___description___id' |
  'author___blog_post___description___children' |
  'author___blog_post___description___description' |
  'author___blog_post___body___id' |
  'author___blog_post___body___children' |
  'author___blog_post___body___body' |
  'author___blog_post___spaceId' |
  'author___blog_post___contentful_id' |
  'author___blog_post___createdAt' |
  'author___blog_post___updatedAt' |
  'author___blog_post___sys___revision' |
  'author___blog_post___node_locale' |
  'author___blog_post___childContentfulBlogPostDescriptionTextNode___id' |
  'author___blog_post___childContentfulBlogPostDescriptionTextNode___children' |
  'author___blog_post___childContentfulBlogPostDescriptionTextNode___description' |
  'author___blog_post___childContentfulBlogPostBodyTextNode___id' |
  'author___blog_post___childContentfulBlogPostBodyTextNode___children' |
  'author___blog_post___childContentfulBlogPostBodyTextNode___body' |
  'author___shortBio___id' |
  'author___shortBio___parent___id' |
  'author___shortBio___parent___children' |
  'author___shortBio___children' |
  'author___shortBio___children___id' |
  'author___shortBio___children___children' |
  'author___shortBio___internal___content' |
  'author___shortBio___internal___contentDigest' |
  'author___shortBio___internal___description' |
  'author___shortBio___internal___fieldOwners' |
  'author___shortBio___internal___ignoreType' |
  'author___shortBio___internal___mediaType' |
  'author___shortBio___internal___owner' |
  'author___shortBio___internal___type' |
  'author___shortBio___shortBio' |
  'author___shortBio___childMarkdownRemark___id' |
  'author___shortBio___childMarkdownRemark___excerpt' |
  'author___shortBio___childMarkdownRemark___rawMarkdownBody' |
  'author___shortBio___childMarkdownRemark___html' |
  'author___shortBio___childMarkdownRemark___htmlAst' |
  'author___shortBio___childMarkdownRemark___excerptAst' |
  'author___shortBio___childMarkdownRemark___headings' |
  'author___shortBio___childMarkdownRemark___timeToRead' |
  'author___shortBio___childMarkdownRemark___tableOfContents' |
  'author___shortBio___childMarkdownRemark___children' |
  'author___spaceId' |
  'author___contentful_id' |
  'author___createdAt' |
  'author___updatedAt' |
  'author___sys___revision' |
  'author___node_locale' |
  'author___childContentfulPersonShortBioTextNode___id' |
  'author___childContentfulPersonShortBioTextNode___parent___id' |
  'author___childContentfulPersonShortBioTextNode___parent___children' |
  'author___childContentfulPersonShortBioTextNode___children' |
  'author___childContentfulPersonShortBioTextNode___children___id' |
  'author___childContentfulPersonShortBioTextNode___children___children' |
  'author___childContentfulPersonShortBioTextNode___internal___content' |
  'author___childContentfulPersonShortBioTextNode___internal___contentDigest' |
  'author___childContentfulPersonShortBioTextNode___internal___description' |
  'author___childContentfulPersonShortBioTextNode___internal___fieldOwners' |
  'author___childContentfulPersonShortBioTextNode___internal___ignoreType' |
  'author___childContentfulPersonShortBioTextNode___internal___mediaType' |
  'author___childContentfulPersonShortBioTextNode___internal___owner' |
  'author___childContentfulPersonShortBioTextNode___internal___type' |
  'author___childContentfulPersonShortBioTextNode___shortBio' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___id' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___excerpt' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___rawMarkdownBody' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___html' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___htmlAst' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___excerptAst' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___headings' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___timeToRead' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___tableOfContents' |
  'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___children' |
  'description___id' |
  'description___parent___id' |
  'description___parent___parent___id' |
  'description___parent___parent___children' |
  'description___parent___children' |
  'description___parent___children___id' |
  'description___parent___children___children' |
  'description___parent___internal___content' |
  'description___parent___internal___contentDigest' |
  'description___parent___internal___description' |
  'description___parent___internal___fieldOwners' |
  'description___parent___internal___ignoreType' |
  'description___parent___internal___mediaType' |
  'description___parent___internal___owner' |
  'description___parent___internal___type' |
  'description___children' |
  'description___children___id' |
  'description___children___parent___id' |
  'description___children___parent___children' |
  'description___children___children' |
  'description___children___children___id' |
  'description___children___children___children' |
  'description___children___internal___content' |
  'description___children___internal___contentDigest' |
  'description___children___internal___description' |
  'description___children___internal___fieldOwners' |
  'description___children___internal___ignoreType' |
  'description___children___internal___mediaType' |
  'description___children___internal___owner' |
  'description___children___internal___type' |
  'description___internal___content' |
  'description___internal___contentDigest' |
  'description___internal___description' |
  'description___internal___fieldOwners' |
  'description___internal___ignoreType' |
  'description___internal___mediaType' |
  'description___internal___owner' |
  'description___internal___type' |
  'description___description' |
  'description___childMarkdownRemark___id' |
  'description___childMarkdownRemark___frontmatter___title' |
  'description___childMarkdownRemark___excerpt' |
  'description___childMarkdownRemark___rawMarkdownBody' |
  'description___childMarkdownRemark___html' |
  'description___childMarkdownRemark___htmlAst' |
  'description___childMarkdownRemark___excerptAst' |
  'description___childMarkdownRemark___headings' |
  'description___childMarkdownRemark___headings___value' |
  'description___childMarkdownRemark___headings___depth' |
  'description___childMarkdownRemark___timeToRead' |
  'description___childMarkdownRemark___tableOfContents' |
  'description___childMarkdownRemark___wordCount___paragraphs' |
  'description___childMarkdownRemark___wordCount___sentences' |
  'description___childMarkdownRemark___wordCount___words' |
  'description___childMarkdownRemark___parent___id' |
  'description___childMarkdownRemark___parent___children' |
  'description___childMarkdownRemark___children' |
  'description___childMarkdownRemark___children___id' |
  'description___childMarkdownRemark___children___children' |
  'description___childMarkdownRemark___internal___content' |
  'description___childMarkdownRemark___internal___contentDigest' |
  'description___childMarkdownRemark___internal___description' |
  'description___childMarkdownRemark___internal___fieldOwners' |
  'description___childMarkdownRemark___internal___ignoreType' |
  'description___childMarkdownRemark___internal___mediaType' |
  'description___childMarkdownRemark___internal___owner' |
  'description___childMarkdownRemark___internal___type' |
  'body___id' |
  'body___parent___id' |
  'body___parent___parent___id' |
  'body___parent___parent___children' |
  'body___parent___children' |
  'body___parent___children___id' |
  'body___parent___children___children' |
  'body___parent___internal___content' |
  'body___parent___internal___contentDigest' |
  'body___parent___internal___description' |
  'body___parent___internal___fieldOwners' |
  'body___parent___internal___ignoreType' |
  'body___parent___internal___mediaType' |
  'body___parent___internal___owner' |
  'body___parent___internal___type' |
  'body___children' |
  'body___children___id' |
  'body___children___parent___id' |
  'body___children___parent___children' |
  'body___children___children' |
  'body___children___children___id' |
  'body___children___children___children' |
  'body___children___internal___content' |
  'body___children___internal___contentDigest' |
  'body___children___internal___description' |
  'body___children___internal___fieldOwners' |
  'body___children___internal___ignoreType' |
  'body___children___internal___mediaType' |
  'body___children___internal___owner' |
  'body___children___internal___type' |
  'body___internal___content' |
  'body___internal___contentDigest' |
  'body___internal___description' |
  'body___internal___fieldOwners' |
  'body___internal___ignoreType' |
  'body___internal___mediaType' |
  'body___internal___owner' |
  'body___internal___type' |
  'body___body' |
  'body___childMarkdownRemark___id' |
  'body___childMarkdownRemark___frontmatter___title' |
  'body___childMarkdownRemark___excerpt' |
  'body___childMarkdownRemark___rawMarkdownBody' |
  'body___childMarkdownRemark___html' |
  'body___childMarkdownRemark___htmlAst' |
  'body___childMarkdownRemark___excerptAst' |
  'body___childMarkdownRemark___headings' |
  'body___childMarkdownRemark___headings___value' |
  'body___childMarkdownRemark___headings___depth' |
  'body___childMarkdownRemark___timeToRead' |
  'body___childMarkdownRemark___tableOfContents' |
  'body___childMarkdownRemark___wordCount___paragraphs' |
  'body___childMarkdownRemark___wordCount___sentences' |
  'body___childMarkdownRemark___wordCount___words' |
  'body___childMarkdownRemark___parent___id' |
  'body___childMarkdownRemark___parent___children' |
  'body___childMarkdownRemark___children' |
  'body___childMarkdownRemark___children___id' |
  'body___childMarkdownRemark___children___children' |
  'body___childMarkdownRemark___internal___content' |
  'body___childMarkdownRemark___internal___contentDigest' |
  'body___childMarkdownRemark___internal___description' |
  'body___childMarkdownRemark___internal___fieldOwners' |
  'body___childMarkdownRemark___internal___ignoreType' |
  'body___childMarkdownRemark___internal___mediaType' |
  'body___childMarkdownRemark___internal___owner' |
  'body___childMarkdownRemark___internal___type' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'childContentfulBlogPostDescriptionTextNode___id' |
  'childContentfulBlogPostDescriptionTextNode___parent___id' |
  'childContentfulBlogPostDescriptionTextNode___parent___parent___id' |
  'childContentfulBlogPostDescriptionTextNode___parent___parent___children' |
  'childContentfulBlogPostDescriptionTextNode___parent___children' |
  'childContentfulBlogPostDescriptionTextNode___parent___children___id' |
  'childContentfulBlogPostDescriptionTextNode___parent___children___children' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___content' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___contentDigest' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___description' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___fieldOwners' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___ignoreType' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___mediaType' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___owner' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___type' |
  'childContentfulBlogPostDescriptionTextNode___children' |
  'childContentfulBlogPostDescriptionTextNode___children___id' |
  'childContentfulBlogPostDescriptionTextNode___children___parent___id' |
  'childContentfulBlogPostDescriptionTextNode___children___parent___children' |
  'childContentfulBlogPostDescriptionTextNode___children___children' |
  'childContentfulBlogPostDescriptionTextNode___children___children___id' |
  'childContentfulBlogPostDescriptionTextNode___children___children___children' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___content' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___contentDigest' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___description' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___fieldOwners' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___ignoreType' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___mediaType' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___owner' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___type' |
  'childContentfulBlogPostDescriptionTextNode___internal___content' |
  'childContentfulBlogPostDescriptionTextNode___internal___contentDigest' |
  'childContentfulBlogPostDescriptionTextNode___internal___description' |
  'childContentfulBlogPostDescriptionTextNode___internal___fieldOwners' |
  'childContentfulBlogPostDescriptionTextNode___internal___ignoreType' |
  'childContentfulBlogPostDescriptionTextNode___internal___mediaType' |
  'childContentfulBlogPostDescriptionTextNode___internal___owner' |
  'childContentfulBlogPostDescriptionTextNode___internal___type' |
  'childContentfulBlogPostDescriptionTextNode___description' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___id' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___frontmatter___title' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerpt' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___html' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___htmlAst' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerptAst' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___value' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___depth' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___timeToRead' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___tableOfContents' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___sentences' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___words' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___parent___id' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___parent___children' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children___id' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children___children' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___content' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___contentDigest' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___description' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___ignoreType' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___mediaType' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___owner' |
  'childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___type' |
  'childContentfulBlogPostBodyTextNode___id' |
  'childContentfulBlogPostBodyTextNode___parent___id' |
  'childContentfulBlogPostBodyTextNode___parent___parent___id' |
  'childContentfulBlogPostBodyTextNode___parent___parent___children' |
  'childContentfulBlogPostBodyTextNode___parent___children' |
  'childContentfulBlogPostBodyTextNode___parent___children___id' |
  'childContentfulBlogPostBodyTextNode___parent___children___children' |
  'childContentfulBlogPostBodyTextNode___parent___internal___content' |
  'childContentfulBlogPostBodyTextNode___parent___internal___contentDigest' |
  'childContentfulBlogPostBodyTextNode___parent___internal___description' |
  'childContentfulBlogPostBodyTextNode___parent___internal___fieldOwners' |
  'childContentfulBlogPostBodyTextNode___parent___internal___ignoreType' |
  'childContentfulBlogPostBodyTextNode___parent___internal___mediaType' |
  'childContentfulBlogPostBodyTextNode___parent___internal___owner' |
  'childContentfulBlogPostBodyTextNode___parent___internal___type' |
  'childContentfulBlogPostBodyTextNode___children' |
  'childContentfulBlogPostBodyTextNode___children___id' |
  'childContentfulBlogPostBodyTextNode___children___parent___id' |
  'childContentfulBlogPostBodyTextNode___children___parent___children' |
  'childContentfulBlogPostBodyTextNode___children___children' |
  'childContentfulBlogPostBodyTextNode___children___children___id' |
  'childContentfulBlogPostBodyTextNode___children___children___children' |
  'childContentfulBlogPostBodyTextNode___children___internal___content' |
  'childContentfulBlogPostBodyTextNode___children___internal___contentDigest' |
  'childContentfulBlogPostBodyTextNode___children___internal___description' |
  'childContentfulBlogPostBodyTextNode___children___internal___fieldOwners' |
  'childContentfulBlogPostBodyTextNode___children___internal___ignoreType' |
  'childContentfulBlogPostBodyTextNode___children___internal___mediaType' |
  'childContentfulBlogPostBodyTextNode___children___internal___owner' |
  'childContentfulBlogPostBodyTextNode___children___internal___type' |
  'childContentfulBlogPostBodyTextNode___internal___content' |
  'childContentfulBlogPostBodyTextNode___internal___contentDigest' |
  'childContentfulBlogPostBodyTextNode___internal___description' |
  'childContentfulBlogPostBodyTextNode___internal___fieldOwners' |
  'childContentfulBlogPostBodyTextNode___internal___ignoreType' |
  'childContentfulBlogPostBodyTextNode___internal___mediaType' |
  'childContentfulBlogPostBodyTextNode___internal___owner' |
  'childContentfulBlogPostBodyTextNode___internal___type' |
  'childContentfulBlogPostBodyTextNode___body' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___id' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___frontmatter___title' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerpt' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___html' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___htmlAst' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerptAst' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___value' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___depth' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___timeToRead' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___tableOfContents' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___sentences' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___words' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___parent___id' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___parent___children' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___children' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___children___id' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___children___children' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___content' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___contentDigest' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___description' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___ignoreType' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___mediaType' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___owner' |
  'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___type';

export type ContentfulBlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  heroImage?: Maybe<ContentfulAssetFilterInput>;
  author?: Maybe<ContentfulPersonFilterInput>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  body?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
};

export type ContentfulBlogPostFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostFilterInput>;
};

export type ContentfulBlogPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlogPostSysContentType>;
};

export type ContentfulBlogPostSysContentType = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlogPostSysContentTypeFilterInput>;
};

export type ContentfulCompany = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  job?: Maybe<Array<Maybe<ContentfulJob>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCompanySys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulCompanyCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCompanyUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCompanyConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCompanyEdge>;
  nodes: Array<ContentfulCompany>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCompanyGroupConnection>;
};


export type ContentfulCompanyConnectionDistinctArgs = {
  field: ContentfulCompanyFieldsEnum;
};


export type ContentfulCompanyConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCompanyFieldsEnum;
};

export type ContentfulCompanyEdge = {
  next?: Maybe<ContentfulCompany>;
  node: ContentfulCompany;
  previous?: Maybe<ContentfulCompany>;
};

export type ContentfulCompanyFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'name' |
  'slug' |
  'job' |
  'job___id' |
  'job___parent___id' |
  'job___parent___parent___id' |
  'job___parent___parent___children' |
  'job___parent___children' |
  'job___parent___children___id' |
  'job___parent___children___children' |
  'job___parent___internal___content' |
  'job___parent___internal___contentDigest' |
  'job___parent___internal___description' |
  'job___parent___internal___fieldOwners' |
  'job___parent___internal___ignoreType' |
  'job___parent___internal___mediaType' |
  'job___parent___internal___owner' |
  'job___parent___internal___type' |
  'job___children' |
  'job___children___id' |
  'job___children___parent___id' |
  'job___children___parent___children' |
  'job___children___children' |
  'job___children___children___id' |
  'job___children___children___children' |
  'job___children___internal___content' |
  'job___children___internal___contentDigest' |
  'job___children___internal___description' |
  'job___children___internal___fieldOwners' |
  'job___children___internal___ignoreType' |
  'job___children___internal___mediaType' |
  'job___children___internal___owner' |
  'job___children___internal___type' |
  'job___internal___content' |
  'job___internal___contentDigest' |
  'job___internal___description' |
  'job___internal___fieldOwners' |
  'job___internal___ignoreType' |
  'job___internal___mediaType' |
  'job___internal___owner' |
  'job___internal___type' |
  'job___jobTitle' |
  'job___startDate' |
  'job___endDate' |
  'job___technologiesUsed' |
  'job___company___id' |
  'job___company___parent___id' |
  'job___company___parent___children' |
  'job___company___children' |
  'job___company___children___id' |
  'job___company___children___children' |
  'job___company___internal___content' |
  'job___company___internal___contentDigest' |
  'job___company___internal___description' |
  'job___company___internal___fieldOwners' |
  'job___company___internal___ignoreType' |
  'job___company___internal___mediaType' |
  'job___company___internal___owner' |
  'job___company___internal___type' |
  'job___company___name' |
  'job___company___slug' |
  'job___company___job' |
  'job___company___job___id' |
  'job___company___job___children' |
  'job___company___job___jobTitle' |
  'job___company___job___startDate' |
  'job___company___job___endDate' |
  'job___company___job___technologiesUsed' |
  'job___company___job___projects' |
  'job___company___job___spaceId' |
  'job___company___job___contentful_id' |
  'job___company___job___createdAt' |
  'job___company___job___updatedAt' |
  'job___company___job___node_locale' |
  'job___company___spaceId' |
  'job___company___contentful_id' |
  'job___company___createdAt' |
  'job___company___updatedAt' |
  'job___company___sys___revision' |
  'job___company___node_locale' |
  'job___projects' |
  'job___projects___id' |
  'job___projects___parent___id' |
  'job___projects___parent___children' |
  'job___projects___children' |
  'job___projects___children___id' |
  'job___projects___children___children' |
  'job___projects___internal___content' |
  'job___projects___internal___contentDigest' |
  'job___projects___internal___description' |
  'job___projects___internal___fieldOwners' |
  'job___projects___internal___ignoreType' |
  'job___projects___internal___mediaType' |
  'job___projects___internal___owner' |
  'job___projects___internal___type' |
  'job___projects___title' |
  'job___projects___slug' |
  'job___projects___job' |
  'job___projects___job___id' |
  'job___projects___job___children' |
  'job___projects___job___jobTitle' |
  'job___projects___job___startDate' |
  'job___projects___job___endDate' |
  'job___projects___job___technologiesUsed' |
  'job___projects___job___projects' |
  'job___projects___job___spaceId' |
  'job___projects___job___contentful_id' |
  'job___projects___job___createdAt' |
  'job___projects___job___updatedAt' |
  'job___projects___job___node_locale' |
  'job___projects___spaceId' |
  'job___projects___contentful_id' |
  'job___projects___createdAt' |
  'job___projects___updatedAt' |
  'job___projects___sys___revision' |
  'job___projects___node_locale' |
  'job___projects___description___id' |
  'job___projects___description___children' |
  'job___projects___description___content' |
  'job___projects___description___nodeType' |
  'job___projects___description___description' |
  'job___projects___description___json' |
  'job___projects___childContentfulProjectDescriptionRichTextNode___id' |
  'job___projects___childContentfulProjectDescriptionRichTextNode___children' |
  'job___projects___childContentfulProjectDescriptionRichTextNode___content' |
  'job___projects___childContentfulProjectDescriptionRichTextNode___nodeType' |
  'job___projects___childContentfulProjectDescriptionRichTextNode___description' |
  'job___projects___childContentfulProjectDescriptionRichTextNode___json' |
  'job___summary___id' |
  'job___summary___parent___id' |
  'job___summary___parent___children' |
  'job___summary___children' |
  'job___summary___children___id' |
  'job___summary___children___children' |
  'job___summary___internal___content' |
  'job___summary___internal___contentDigest' |
  'job___summary___internal___description' |
  'job___summary___internal___fieldOwners' |
  'job___summary___internal___ignoreType' |
  'job___summary___internal___mediaType' |
  'job___summary___internal___owner' |
  'job___summary___internal___type' |
  'job___summary___content' |
  'job___summary___content___content' |
  'job___summary___content___nodeType' |
  'job___summary___nodeType' |
  'job___summary___summary' |
  'job___summary___json' |
  'job___spaceId' |
  'job___contentful_id' |
  'job___createdAt' |
  'job___updatedAt' |
  'job___sys___revision' |
  'job___node_locale' |
  'job___childContentfulJobSummaryRichTextNode___id' |
  'job___childContentfulJobSummaryRichTextNode___parent___id' |
  'job___childContentfulJobSummaryRichTextNode___parent___children' |
  'job___childContentfulJobSummaryRichTextNode___children' |
  'job___childContentfulJobSummaryRichTextNode___children___id' |
  'job___childContentfulJobSummaryRichTextNode___children___children' |
  'job___childContentfulJobSummaryRichTextNode___internal___content' |
  'job___childContentfulJobSummaryRichTextNode___internal___contentDigest' |
  'job___childContentfulJobSummaryRichTextNode___internal___description' |
  'job___childContentfulJobSummaryRichTextNode___internal___fieldOwners' |
  'job___childContentfulJobSummaryRichTextNode___internal___ignoreType' |
  'job___childContentfulJobSummaryRichTextNode___internal___mediaType' |
  'job___childContentfulJobSummaryRichTextNode___internal___owner' |
  'job___childContentfulJobSummaryRichTextNode___internal___type' |
  'job___childContentfulJobSummaryRichTextNode___content' |
  'job___childContentfulJobSummaryRichTextNode___content___content' |
  'job___childContentfulJobSummaryRichTextNode___content___nodeType' |
  'job___childContentfulJobSummaryRichTextNode___nodeType' |
  'job___childContentfulJobSummaryRichTextNode___summary' |
  'job___childContentfulJobSummaryRichTextNode___json' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale';

export type ContentfulCompanyFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  job?: Maybe<ContentfulJobFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCompanySysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCompanyGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCompanyEdge>;
  nodes: Array<ContentfulCompany>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCompanySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCompanyFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCompanySys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCompanySysContentType>;
};

export type ContentfulCompanySysContentType = {
  sys?: Maybe<ContentfulCompanySysContentTypeSys>;
};

export type ContentfulCompanySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCompanySysContentTypeSysFilterInput>;
};

export type ContentfulCompanySysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulCompanySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCompanySysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulCompanySysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'name' |
  'displayField' |
  'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageCropFocus = 
  'TOP' |
  'TOP_LEFT' |
  'TOP_RIGHT' |
  'BOTTOM' |
  'BOTTOM_RIGHT' |
  'BOTTOM_LEFT' |
  'RIGHT' |
  'LEFT' |
  'FACE' |
  'FACES' |
  'CENTER';

export type ContentfulImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ContentfulJob = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  jobTitle?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  technologiesUsed?: Maybe<Array<Maybe<Scalars['String']>>>;
  company?: Maybe<ContentfulCompany>;
  projects?: Maybe<Array<Maybe<ContentfulProject>>>;
  summary?: Maybe<ContentfulJobSummaryRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulJobSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulJobSummaryRichTextNode?: Maybe<ContentfulJobSummaryRichTextNode>;
};


export type ContentfulJobStartDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulJobEndDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulJobCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulJobUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulJobConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulJobEdge>;
  nodes: Array<ContentfulJob>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulJobGroupConnection>;
};


export type ContentfulJobConnectionDistinctArgs = {
  field: ContentfulJobFieldsEnum;
};


export type ContentfulJobConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulJobFieldsEnum;
};

export type ContentfulJobEdge = {
  next?: Maybe<ContentfulJob>;
  node: ContentfulJob;
  previous?: Maybe<ContentfulJob>;
};

export type ContentfulJobFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'jobTitle' |
  'startDate' |
  'endDate' |
  'technologiesUsed' |
  'company___id' |
  'company___parent___id' |
  'company___parent___parent___id' |
  'company___parent___parent___children' |
  'company___parent___children' |
  'company___parent___children___id' |
  'company___parent___children___children' |
  'company___parent___internal___content' |
  'company___parent___internal___contentDigest' |
  'company___parent___internal___description' |
  'company___parent___internal___fieldOwners' |
  'company___parent___internal___ignoreType' |
  'company___parent___internal___mediaType' |
  'company___parent___internal___owner' |
  'company___parent___internal___type' |
  'company___children' |
  'company___children___id' |
  'company___children___parent___id' |
  'company___children___parent___children' |
  'company___children___children' |
  'company___children___children___id' |
  'company___children___children___children' |
  'company___children___internal___content' |
  'company___children___internal___contentDigest' |
  'company___children___internal___description' |
  'company___children___internal___fieldOwners' |
  'company___children___internal___ignoreType' |
  'company___children___internal___mediaType' |
  'company___children___internal___owner' |
  'company___children___internal___type' |
  'company___internal___content' |
  'company___internal___contentDigest' |
  'company___internal___description' |
  'company___internal___fieldOwners' |
  'company___internal___ignoreType' |
  'company___internal___mediaType' |
  'company___internal___owner' |
  'company___internal___type' |
  'company___name' |
  'company___slug' |
  'company___job' |
  'company___job___id' |
  'company___job___parent___id' |
  'company___job___parent___children' |
  'company___job___children' |
  'company___job___children___id' |
  'company___job___children___children' |
  'company___job___internal___content' |
  'company___job___internal___contentDigest' |
  'company___job___internal___description' |
  'company___job___internal___fieldOwners' |
  'company___job___internal___ignoreType' |
  'company___job___internal___mediaType' |
  'company___job___internal___owner' |
  'company___job___internal___type' |
  'company___job___jobTitle' |
  'company___job___startDate' |
  'company___job___endDate' |
  'company___job___technologiesUsed' |
  'company___job___company___id' |
  'company___job___company___children' |
  'company___job___company___name' |
  'company___job___company___slug' |
  'company___job___company___job' |
  'company___job___company___spaceId' |
  'company___job___company___contentful_id' |
  'company___job___company___createdAt' |
  'company___job___company___updatedAt' |
  'company___job___company___node_locale' |
  'company___job___projects' |
  'company___job___projects___id' |
  'company___job___projects___children' |
  'company___job___projects___title' |
  'company___job___projects___slug' |
  'company___job___projects___job' |
  'company___job___projects___spaceId' |
  'company___job___projects___contentful_id' |
  'company___job___projects___createdAt' |
  'company___job___projects___updatedAt' |
  'company___job___projects___node_locale' |
  'company___job___summary___id' |
  'company___job___summary___children' |
  'company___job___summary___content' |
  'company___job___summary___nodeType' |
  'company___job___summary___summary' |
  'company___job___summary___json' |
  'company___job___spaceId' |
  'company___job___contentful_id' |
  'company___job___createdAt' |
  'company___job___updatedAt' |
  'company___job___sys___revision' |
  'company___job___node_locale' |
  'company___job___childContentfulJobSummaryRichTextNode___id' |
  'company___job___childContentfulJobSummaryRichTextNode___children' |
  'company___job___childContentfulJobSummaryRichTextNode___content' |
  'company___job___childContentfulJobSummaryRichTextNode___nodeType' |
  'company___job___childContentfulJobSummaryRichTextNode___summary' |
  'company___job___childContentfulJobSummaryRichTextNode___json' |
  'company___spaceId' |
  'company___contentful_id' |
  'company___createdAt' |
  'company___updatedAt' |
  'company___sys___revision' |
  'company___node_locale' |
  'projects' |
  'projects___id' |
  'projects___parent___id' |
  'projects___parent___parent___id' |
  'projects___parent___parent___children' |
  'projects___parent___children' |
  'projects___parent___children___id' |
  'projects___parent___children___children' |
  'projects___parent___internal___content' |
  'projects___parent___internal___contentDigest' |
  'projects___parent___internal___description' |
  'projects___parent___internal___fieldOwners' |
  'projects___parent___internal___ignoreType' |
  'projects___parent___internal___mediaType' |
  'projects___parent___internal___owner' |
  'projects___parent___internal___type' |
  'projects___children' |
  'projects___children___id' |
  'projects___children___parent___id' |
  'projects___children___parent___children' |
  'projects___children___children' |
  'projects___children___children___id' |
  'projects___children___children___children' |
  'projects___children___internal___content' |
  'projects___children___internal___contentDigest' |
  'projects___children___internal___description' |
  'projects___children___internal___fieldOwners' |
  'projects___children___internal___ignoreType' |
  'projects___children___internal___mediaType' |
  'projects___children___internal___owner' |
  'projects___children___internal___type' |
  'projects___internal___content' |
  'projects___internal___contentDigest' |
  'projects___internal___description' |
  'projects___internal___fieldOwners' |
  'projects___internal___ignoreType' |
  'projects___internal___mediaType' |
  'projects___internal___owner' |
  'projects___internal___type' |
  'projects___title' |
  'projects___slug' |
  'projects___job' |
  'projects___job___id' |
  'projects___job___parent___id' |
  'projects___job___parent___children' |
  'projects___job___children' |
  'projects___job___children___id' |
  'projects___job___children___children' |
  'projects___job___internal___content' |
  'projects___job___internal___contentDigest' |
  'projects___job___internal___description' |
  'projects___job___internal___fieldOwners' |
  'projects___job___internal___ignoreType' |
  'projects___job___internal___mediaType' |
  'projects___job___internal___owner' |
  'projects___job___internal___type' |
  'projects___job___jobTitle' |
  'projects___job___startDate' |
  'projects___job___endDate' |
  'projects___job___technologiesUsed' |
  'projects___job___company___id' |
  'projects___job___company___children' |
  'projects___job___company___name' |
  'projects___job___company___slug' |
  'projects___job___company___job' |
  'projects___job___company___spaceId' |
  'projects___job___company___contentful_id' |
  'projects___job___company___createdAt' |
  'projects___job___company___updatedAt' |
  'projects___job___company___node_locale' |
  'projects___job___projects' |
  'projects___job___projects___id' |
  'projects___job___projects___children' |
  'projects___job___projects___title' |
  'projects___job___projects___slug' |
  'projects___job___projects___job' |
  'projects___job___projects___spaceId' |
  'projects___job___projects___contentful_id' |
  'projects___job___projects___createdAt' |
  'projects___job___projects___updatedAt' |
  'projects___job___projects___node_locale' |
  'projects___job___summary___id' |
  'projects___job___summary___children' |
  'projects___job___summary___content' |
  'projects___job___summary___nodeType' |
  'projects___job___summary___summary' |
  'projects___job___summary___json' |
  'projects___job___spaceId' |
  'projects___job___contentful_id' |
  'projects___job___createdAt' |
  'projects___job___updatedAt' |
  'projects___job___sys___revision' |
  'projects___job___node_locale' |
  'projects___job___childContentfulJobSummaryRichTextNode___id' |
  'projects___job___childContentfulJobSummaryRichTextNode___children' |
  'projects___job___childContentfulJobSummaryRichTextNode___content' |
  'projects___job___childContentfulJobSummaryRichTextNode___nodeType' |
  'projects___job___childContentfulJobSummaryRichTextNode___summary' |
  'projects___job___childContentfulJobSummaryRichTextNode___json' |
  'projects___spaceId' |
  'projects___contentful_id' |
  'projects___createdAt' |
  'projects___updatedAt' |
  'projects___sys___revision' |
  'projects___node_locale' |
  'projects___description___id' |
  'projects___description___parent___id' |
  'projects___description___parent___children' |
  'projects___description___children' |
  'projects___description___children___id' |
  'projects___description___children___children' |
  'projects___description___internal___content' |
  'projects___description___internal___contentDigest' |
  'projects___description___internal___description' |
  'projects___description___internal___fieldOwners' |
  'projects___description___internal___ignoreType' |
  'projects___description___internal___mediaType' |
  'projects___description___internal___owner' |
  'projects___description___internal___type' |
  'projects___description___content' |
  'projects___description___content___content' |
  'projects___description___content___nodeType' |
  'projects___description___nodeType' |
  'projects___description___description' |
  'projects___description___json' |
  'projects___childContentfulProjectDescriptionRichTextNode___id' |
  'projects___childContentfulProjectDescriptionRichTextNode___parent___id' |
  'projects___childContentfulProjectDescriptionRichTextNode___parent___children' |
  'projects___childContentfulProjectDescriptionRichTextNode___children' |
  'projects___childContentfulProjectDescriptionRichTextNode___children___id' |
  'projects___childContentfulProjectDescriptionRichTextNode___children___children' |
  'projects___childContentfulProjectDescriptionRichTextNode___internal___content' |
  'projects___childContentfulProjectDescriptionRichTextNode___internal___contentDigest' |
  'projects___childContentfulProjectDescriptionRichTextNode___internal___description' |
  'projects___childContentfulProjectDescriptionRichTextNode___internal___fieldOwners' |
  'projects___childContentfulProjectDescriptionRichTextNode___internal___ignoreType' |
  'projects___childContentfulProjectDescriptionRichTextNode___internal___mediaType' |
  'projects___childContentfulProjectDescriptionRichTextNode___internal___owner' |
  'projects___childContentfulProjectDescriptionRichTextNode___internal___type' |
  'projects___childContentfulProjectDescriptionRichTextNode___content' |
  'projects___childContentfulProjectDescriptionRichTextNode___content___content' |
  'projects___childContentfulProjectDescriptionRichTextNode___content___nodeType' |
  'projects___childContentfulProjectDescriptionRichTextNode___nodeType' |
  'projects___childContentfulProjectDescriptionRichTextNode___description' |
  'projects___childContentfulProjectDescriptionRichTextNode___json' |
  'summary___id' |
  'summary___parent___id' |
  'summary___parent___parent___id' |
  'summary___parent___parent___children' |
  'summary___parent___children' |
  'summary___parent___children___id' |
  'summary___parent___children___children' |
  'summary___parent___internal___content' |
  'summary___parent___internal___contentDigest' |
  'summary___parent___internal___description' |
  'summary___parent___internal___fieldOwners' |
  'summary___parent___internal___ignoreType' |
  'summary___parent___internal___mediaType' |
  'summary___parent___internal___owner' |
  'summary___parent___internal___type' |
  'summary___children' |
  'summary___children___id' |
  'summary___children___parent___id' |
  'summary___children___parent___children' |
  'summary___children___children' |
  'summary___children___children___id' |
  'summary___children___children___children' |
  'summary___children___internal___content' |
  'summary___children___internal___contentDigest' |
  'summary___children___internal___description' |
  'summary___children___internal___fieldOwners' |
  'summary___children___internal___ignoreType' |
  'summary___children___internal___mediaType' |
  'summary___children___internal___owner' |
  'summary___children___internal___type' |
  'summary___internal___content' |
  'summary___internal___contentDigest' |
  'summary___internal___description' |
  'summary___internal___fieldOwners' |
  'summary___internal___ignoreType' |
  'summary___internal___mediaType' |
  'summary___internal___owner' |
  'summary___internal___type' |
  'summary___content' |
  'summary___content___content' |
  'summary___content___content___content' |
  'summary___content___content___nodeType' |
  'summary___content___content___value' |
  'summary___content___nodeType' |
  'summary___nodeType' |
  'summary___summary' |
  'summary___json' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'childContentfulJobSummaryRichTextNode___id' |
  'childContentfulJobSummaryRichTextNode___parent___id' |
  'childContentfulJobSummaryRichTextNode___parent___parent___id' |
  'childContentfulJobSummaryRichTextNode___parent___parent___children' |
  'childContentfulJobSummaryRichTextNode___parent___children' |
  'childContentfulJobSummaryRichTextNode___parent___children___id' |
  'childContentfulJobSummaryRichTextNode___parent___children___children' |
  'childContentfulJobSummaryRichTextNode___parent___internal___content' |
  'childContentfulJobSummaryRichTextNode___parent___internal___contentDigest' |
  'childContentfulJobSummaryRichTextNode___parent___internal___description' |
  'childContentfulJobSummaryRichTextNode___parent___internal___fieldOwners' |
  'childContentfulJobSummaryRichTextNode___parent___internal___ignoreType' |
  'childContentfulJobSummaryRichTextNode___parent___internal___mediaType' |
  'childContentfulJobSummaryRichTextNode___parent___internal___owner' |
  'childContentfulJobSummaryRichTextNode___parent___internal___type' |
  'childContentfulJobSummaryRichTextNode___children' |
  'childContentfulJobSummaryRichTextNode___children___id' |
  'childContentfulJobSummaryRichTextNode___children___parent___id' |
  'childContentfulJobSummaryRichTextNode___children___parent___children' |
  'childContentfulJobSummaryRichTextNode___children___children' |
  'childContentfulJobSummaryRichTextNode___children___children___id' |
  'childContentfulJobSummaryRichTextNode___children___children___children' |
  'childContentfulJobSummaryRichTextNode___children___internal___content' |
  'childContentfulJobSummaryRichTextNode___children___internal___contentDigest' |
  'childContentfulJobSummaryRichTextNode___children___internal___description' |
  'childContentfulJobSummaryRichTextNode___children___internal___fieldOwners' |
  'childContentfulJobSummaryRichTextNode___children___internal___ignoreType' |
  'childContentfulJobSummaryRichTextNode___children___internal___mediaType' |
  'childContentfulJobSummaryRichTextNode___children___internal___owner' |
  'childContentfulJobSummaryRichTextNode___children___internal___type' |
  'childContentfulJobSummaryRichTextNode___internal___content' |
  'childContentfulJobSummaryRichTextNode___internal___contentDigest' |
  'childContentfulJobSummaryRichTextNode___internal___description' |
  'childContentfulJobSummaryRichTextNode___internal___fieldOwners' |
  'childContentfulJobSummaryRichTextNode___internal___ignoreType' |
  'childContentfulJobSummaryRichTextNode___internal___mediaType' |
  'childContentfulJobSummaryRichTextNode___internal___owner' |
  'childContentfulJobSummaryRichTextNode___internal___type' |
  'childContentfulJobSummaryRichTextNode___content' |
  'childContentfulJobSummaryRichTextNode___content___content' |
  'childContentfulJobSummaryRichTextNode___content___content___content' |
  'childContentfulJobSummaryRichTextNode___content___content___nodeType' |
  'childContentfulJobSummaryRichTextNode___content___content___value' |
  'childContentfulJobSummaryRichTextNode___content___nodeType' |
  'childContentfulJobSummaryRichTextNode___nodeType' |
  'childContentfulJobSummaryRichTextNode___summary' |
  'childContentfulJobSummaryRichTextNode___json';

export type ContentfulJobFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  jobTitle?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  endDate?: Maybe<DateQueryOperatorInput>;
  technologiesUsed?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<ContentfulCompanyFilterInput>;
  projects?: Maybe<ContentfulProjectFilterListInput>;
  summary?: Maybe<ContentfulJobSummaryRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulJobSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulJobSummaryRichTextNode?: Maybe<ContentfulJobSummaryRichTextNodeFilterInput>;
};

export type ContentfulJobFilterListInput = {
  elemMatch?: Maybe<ContentfulJobFilterInput>;
};

export type ContentfulJobGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulJobEdge>;
  nodes: Array<ContentfulJob>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulJobSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulJobFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulJobSummaryRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Array<Maybe<ContentfulJobSummaryRichTextNodeContent>>>;
  nodeType?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulJobSummaryRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulJobSummaryRichTextNodeEdge>;
  nodes: Array<ContentfulJobSummaryRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulJobSummaryRichTextNodeGroupConnection>;
};


export type ContentfulJobSummaryRichTextNodeConnectionDistinctArgs = {
  field: ContentfulJobSummaryRichTextNodeFieldsEnum;
};


export type ContentfulJobSummaryRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulJobSummaryRichTextNodeFieldsEnum;
};

export type ContentfulJobSummaryRichTextNodeContent = {
  content?: Maybe<Array<Maybe<ContentfulJobSummaryRichTextNodeContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulJobSummaryRichTextNodeContentContent = {
  content?: Maybe<Array<Maybe<ContentfulJobSummaryRichTextNodeContentContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContent = {
  content?: Maybe<Array<Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContent = {
  data?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentData>;
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentContent>>>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentContent = {
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentContentFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentContentFilterInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentData = {
  target?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTarget>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataFilterInput = {
  target?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFilterInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTarget = {
  sys?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSys>;
  fields?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFields>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFields = {
  title?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsTitle>;
  slug?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsSlug>;
  description?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescription>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescription = {
  en_US?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_Us>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_Us = {
  content?: Maybe<Array<Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_UsContent>>>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_UsContent = {
  content?: Maybe<Array<Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_UsContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_UsContentContent = {
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_UsContentContentFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_UsContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_UsContentContentFilterInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_UsContentFilterInput = {
  content?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_UsContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_UsContentFilterListInput = {
  elemMatch?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_UsContentFilterInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_UsFilterInput = {
  content?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_UsContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionFilterInput = {
  en_US?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionEn_UsFilterInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsFilterInput = {
  title?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsTitleFilterInput>;
  slug?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsSlugFilterInput>;
  description?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsDescriptionFilterInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsSlug = {
  en_US?: Maybe<Scalars['String']>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsSlugFilterInput = {
  en_US?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsTitle = {
  en_US?: Maybe<Scalars['String']>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsTitleFilterInput = {
  en_US?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFilterInput = {
  sys?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysFilterInput>;
  fields?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetFieldsFilterInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSys = {
  space?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysSpace>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  environment?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysEnvironment>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysContentType>;
  contentful_id?: Maybe<Scalars['String']>;
};


export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysContentType = {
  sys?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysContentTypeSys>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysContentTypeSysFilterInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysEnvironment = {
  sys?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysEnvironmentSys>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysEnvironmentFilterInput = {
  sys?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysEnvironmentSysFilterInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysEnvironmentSys = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysEnvironmentSysFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysFilterInput = {
  space?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysSpaceFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  environment?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysEnvironmentFilterInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysContentTypeFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysSpace = {
  sys?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysSpaceSys>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysSpaceFilterInput = {
  sys?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysSpaceSysFilterInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysSpaceSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentDataTargetSysSpaceSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentFilterInput = {
  data?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentDataFilterInput>;
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentContentFilterListInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentFilterInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentFilterInput = {
  content?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentFilterInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentFilterInput = {
  content?: Maybe<ContentfulJobSummaryRichTextNodeContentContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSummaryRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulJobSummaryRichTextNodeContentContentFilterInput>;
};

export type ContentfulJobSummaryRichTextNodeContentFilterInput = {
  content?: Maybe<ContentfulJobSummaryRichTextNodeContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSummaryRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulJobSummaryRichTextNodeContentFilterInput>;
};

export type ContentfulJobSummaryRichTextNodeEdge = {
  next?: Maybe<ContentfulJobSummaryRichTextNode>;
  node: ContentfulJobSummaryRichTextNode;
  previous?: Maybe<ContentfulJobSummaryRichTextNode>;
};

export type ContentfulJobSummaryRichTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'content' |
  'content___content' |
  'content___content___content' |
  'content___content___content___content' |
  'content___content___content___nodeType' |
  'content___content___nodeType' |
  'content___content___value' |
  'content___nodeType' |
  'nodeType' |
  'summary' |
  'json';

export type ContentfulJobSummaryRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulJobSummaryRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  summary?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulJobSummaryRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulJobSummaryRichTextNodeEdge>;
  nodes: Array<ContentfulJobSummaryRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulJobSummaryRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulJobSummaryRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulJobSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulJobSysContentType>;
};

export type ContentfulJobSysContentType = {
  sys?: Maybe<ContentfulJobSysContentTypeSys>;
};

export type ContentfulJobSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulJobSysContentTypeSysFilterInput>;
};

export type ContentfulJobSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulJobSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulJobSysContentTypeFilterInput>;
};

export type ContentfulPerson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  blog_post?: Maybe<Array<Maybe<ContentfulBlogPost>>>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPersonSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNode>;
};


export type ContentfulPersonCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPersonUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPersonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonEdge>;
  nodes: Array<ContentfulPerson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPersonGroupConnection>;
};


export type ContentfulPersonConnectionDistinctArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPersonFieldsEnum;
};

export type ContentfulPersonEdge = {
  next?: Maybe<ContentfulPerson>;
  node: ContentfulPerson;
  previous?: Maybe<ContentfulPerson>;
};

export type ContentfulPersonFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'name' |
  'title' |
  'company' |
  'email' |
  'phone' |
  'facebook' |
  'twitter' |
  'github' |
  'image___id' |
  'image___parent___id' |
  'image___parent___parent___id' |
  'image___parent___parent___children' |
  'image___parent___children' |
  'image___parent___children___id' |
  'image___parent___children___children' |
  'image___parent___internal___content' |
  'image___parent___internal___contentDigest' |
  'image___parent___internal___description' |
  'image___parent___internal___fieldOwners' |
  'image___parent___internal___ignoreType' |
  'image___parent___internal___mediaType' |
  'image___parent___internal___owner' |
  'image___parent___internal___type' |
  'image___children' |
  'image___children___id' |
  'image___children___parent___id' |
  'image___children___parent___children' |
  'image___children___children' |
  'image___children___children___id' |
  'image___children___children___children' |
  'image___children___internal___content' |
  'image___children___internal___contentDigest' |
  'image___children___internal___description' |
  'image___children___internal___fieldOwners' |
  'image___children___internal___ignoreType' |
  'image___children___internal___mediaType' |
  'image___children___internal___owner' |
  'image___children___internal___type' |
  'image___internal___content' |
  'image___internal___contentDigest' |
  'image___internal___description' |
  'image___internal___fieldOwners' |
  'image___internal___ignoreType' |
  'image___internal___mediaType' |
  'image___internal___owner' |
  'image___internal___type' |
  'image___contentful_id' |
  'image___file___url' |
  'image___file___details___size' |
  'image___file___fileName' |
  'image___file___contentType' |
  'image___title' |
  'image___description' |
  'image___node_locale' |
  'image___fixed___base64' |
  'image___fixed___tracedSVG' |
  'image___fixed___aspectRatio' |
  'image___fixed___width' |
  'image___fixed___height' |
  'image___fixed___src' |
  'image___fixed___srcSet' |
  'image___fixed___srcWebp' |
  'image___fixed___srcSetWebp' |
  'image___resolutions___base64' |
  'image___resolutions___tracedSVG' |
  'image___resolutions___aspectRatio' |
  'image___resolutions___width' |
  'image___resolutions___height' |
  'image___resolutions___src' |
  'image___resolutions___srcSet' |
  'image___resolutions___srcWebp' |
  'image___resolutions___srcSetWebp' |
  'image___fluid___base64' |
  'image___fluid___tracedSVG' |
  'image___fluid___aspectRatio' |
  'image___fluid___src' |
  'image___fluid___srcSet' |
  'image___fluid___srcWebp' |
  'image___fluid___srcSetWebp' |
  'image___fluid___sizes' |
  'image___sizes___base64' |
  'image___sizes___tracedSVG' |
  'image___sizes___aspectRatio' |
  'image___sizes___src' |
  'image___sizes___srcSet' |
  'image___sizes___srcWebp' |
  'image___sizes___srcSetWebp' |
  'image___sizes___sizes' |
  'image___resize___base64' |
  'image___resize___tracedSVG' |
  'image___resize___src' |
  'image___resize___width' |
  'image___resize___height' |
  'image___resize___aspectRatio' |
  'blog_post' |
  'blog_post___id' |
  'blog_post___parent___id' |
  'blog_post___parent___parent___id' |
  'blog_post___parent___parent___children' |
  'blog_post___parent___children' |
  'blog_post___parent___children___id' |
  'blog_post___parent___children___children' |
  'blog_post___parent___internal___content' |
  'blog_post___parent___internal___contentDigest' |
  'blog_post___parent___internal___description' |
  'blog_post___parent___internal___fieldOwners' |
  'blog_post___parent___internal___ignoreType' |
  'blog_post___parent___internal___mediaType' |
  'blog_post___parent___internal___owner' |
  'blog_post___parent___internal___type' |
  'blog_post___children' |
  'blog_post___children___id' |
  'blog_post___children___parent___id' |
  'blog_post___children___parent___children' |
  'blog_post___children___children' |
  'blog_post___children___children___id' |
  'blog_post___children___children___children' |
  'blog_post___children___internal___content' |
  'blog_post___children___internal___contentDigest' |
  'blog_post___children___internal___description' |
  'blog_post___children___internal___fieldOwners' |
  'blog_post___children___internal___ignoreType' |
  'blog_post___children___internal___mediaType' |
  'blog_post___children___internal___owner' |
  'blog_post___children___internal___type' |
  'blog_post___internal___content' |
  'blog_post___internal___contentDigest' |
  'blog_post___internal___description' |
  'blog_post___internal___fieldOwners' |
  'blog_post___internal___ignoreType' |
  'blog_post___internal___mediaType' |
  'blog_post___internal___owner' |
  'blog_post___internal___type' |
  'blog_post___title' |
  'blog_post___slug' |
  'blog_post___publishDate' |
  'blog_post___tags' |
  'blog_post___heroImage___id' |
  'blog_post___heroImage___parent___id' |
  'blog_post___heroImage___parent___children' |
  'blog_post___heroImage___children' |
  'blog_post___heroImage___children___id' |
  'blog_post___heroImage___children___children' |
  'blog_post___heroImage___internal___content' |
  'blog_post___heroImage___internal___contentDigest' |
  'blog_post___heroImage___internal___description' |
  'blog_post___heroImage___internal___fieldOwners' |
  'blog_post___heroImage___internal___ignoreType' |
  'blog_post___heroImage___internal___mediaType' |
  'blog_post___heroImage___internal___owner' |
  'blog_post___heroImage___internal___type' |
  'blog_post___heroImage___contentful_id' |
  'blog_post___heroImage___file___url' |
  'blog_post___heroImage___file___fileName' |
  'blog_post___heroImage___file___contentType' |
  'blog_post___heroImage___title' |
  'blog_post___heroImage___description' |
  'blog_post___heroImage___node_locale' |
  'blog_post___heroImage___fixed___base64' |
  'blog_post___heroImage___fixed___tracedSVG' |
  'blog_post___heroImage___fixed___aspectRatio' |
  'blog_post___heroImage___fixed___width' |
  'blog_post___heroImage___fixed___height' |
  'blog_post___heroImage___fixed___src' |
  'blog_post___heroImage___fixed___srcSet' |
  'blog_post___heroImage___fixed___srcWebp' |
  'blog_post___heroImage___fixed___srcSetWebp' |
  'blog_post___heroImage___resolutions___base64' |
  'blog_post___heroImage___resolutions___tracedSVG' |
  'blog_post___heroImage___resolutions___aspectRatio' |
  'blog_post___heroImage___resolutions___width' |
  'blog_post___heroImage___resolutions___height' |
  'blog_post___heroImage___resolutions___src' |
  'blog_post___heroImage___resolutions___srcSet' |
  'blog_post___heroImage___resolutions___srcWebp' |
  'blog_post___heroImage___resolutions___srcSetWebp' |
  'blog_post___heroImage___fluid___base64' |
  'blog_post___heroImage___fluid___tracedSVG' |
  'blog_post___heroImage___fluid___aspectRatio' |
  'blog_post___heroImage___fluid___src' |
  'blog_post___heroImage___fluid___srcSet' |
  'blog_post___heroImage___fluid___srcWebp' |
  'blog_post___heroImage___fluid___srcSetWebp' |
  'blog_post___heroImage___fluid___sizes' |
  'blog_post___heroImage___sizes___base64' |
  'blog_post___heroImage___sizes___tracedSVG' |
  'blog_post___heroImage___sizes___aspectRatio' |
  'blog_post___heroImage___sizes___src' |
  'blog_post___heroImage___sizes___srcSet' |
  'blog_post___heroImage___sizes___srcWebp' |
  'blog_post___heroImage___sizes___srcSetWebp' |
  'blog_post___heroImage___sizes___sizes' |
  'blog_post___heroImage___resize___base64' |
  'blog_post___heroImage___resize___tracedSVG' |
  'blog_post___heroImage___resize___src' |
  'blog_post___heroImage___resize___width' |
  'blog_post___heroImage___resize___height' |
  'blog_post___heroImage___resize___aspectRatio' |
  'blog_post___author___id' |
  'blog_post___author___parent___id' |
  'blog_post___author___parent___children' |
  'blog_post___author___children' |
  'blog_post___author___children___id' |
  'blog_post___author___children___children' |
  'blog_post___author___internal___content' |
  'blog_post___author___internal___contentDigest' |
  'blog_post___author___internal___description' |
  'blog_post___author___internal___fieldOwners' |
  'blog_post___author___internal___ignoreType' |
  'blog_post___author___internal___mediaType' |
  'blog_post___author___internal___owner' |
  'blog_post___author___internal___type' |
  'blog_post___author___name' |
  'blog_post___author___title' |
  'blog_post___author___company' |
  'blog_post___author___email' |
  'blog_post___author___phone' |
  'blog_post___author___facebook' |
  'blog_post___author___twitter' |
  'blog_post___author___github' |
  'blog_post___author___image___id' |
  'blog_post___author___image___children' |
  'blog_post___author___image___contentful_id' |
  'blog_post___author___image___title' |
  'blog_post___author___image___description' |
  'blog_post___author___image___node_locale' |
  'blog_post___author___blog_post' |
  'blog_post___author___blog_post___id' |
  'blog_post___author___blog_post___children' |
  'blog_post___author___blog_post___title' |
  'blog_post___author___blog_post___slug' |
  'blog_post___author___blog_post___publishDate' |
  'blog_post___author___blog_post___tags' |
  'blog_post___author___blog_post___spaceId' |
  'blog_post___author___blog_post___contentful_id' |
  'blog_post___author___blog_post___createdAt' |
  'blog_post___author___blog_post___updatedAt' |
  'blog_post___author___blog_post___node_locale' |
  'blog_post___author___shortBio___id' |
  'blog_post___author___shortBio___children' |
  'blog_post___author___shortBio___shortBio' |
  'blog_post___author___spaceId' |
  'blog_post___author___contentful_id' |
  'blog_post___author___createdAt' |
  'blog_post___author___updatedAt' |
  'blog_post___author___sys___revision' |
  'blog_post___author___node_locale' |
  'blog_post___author___childContentfulPersonShortBioTextNode___id' |
  'blog_post___author___childContentfulPersonShortBioTextNode___children' |
  'blog_post___author___childContentfulPersonShortBioTextNode___shortBio' |
  'blog_post___description___id' |
  'blog_post___description___parent___id' |
  'blog_post___description___parent___children' |
  'blog_post___description___children' |
  'blog_post___description___children___id' |
  'blog_post___description___children___children' |
  'blog_post___description___internal___content' |
  'blog_post___description___internal___contentDigest' |
  'blog_post___description___internal___description' |
  'blog_post___description___internal___fieldOwners' |
  'blog_post___description___internal___ignoreType' |
  'blog_post___description___internal___mediaType' |
  'blog_post___description___internal___owner' |
  'blog_post___description___internal___type' |
  'blog_post___description___description' |
  'blog_post___description___childMarkdownRemark___id' |
  'blog_post___description___childMarkdownRemark___excerpt' |
  'blog_post___description___childMarkdownRemark___rawMarkdownBody' |
  'blog_post___description___childMarkdownRemark___html' |
  'blog_post___description___childMarkdownRemark___htmlAst' |
  'blog_post___description___childMarkdownRemark___excerptAst' |
  'blog_post___description___childMarkdownRemark___headings' |
  'blog_post___description___childMarkdownRemark___timeToRead' |
  'blog_post___description___childMarkdownRemark___tableOfContents' |
  'blog_post___description___childMarkdownRemark___children' |
  'blog_post___body___id' |
  'blog_post___body___parent___id' |
  'blog_post___body___parent___children' |
  'blog_post___body___children' |
  'blog_post___body___children___id' |
  'blog_post___body___children___children' |
  'blog_post___body___internal___content' |
  'blog_post___body___internal___contentDigest' |
  'blog_post___body___internal___description' |
  'blog_post___body___internal___fieldOwners' |
  'blog_post___body___internal___ignoreType' |
  'blog_post___body___internal___mediaType' |
  'blog_post___body___internal___owner' |
  'blog_post___body___internal___type' |
  'blog_post___body___body' |
  'blog_post___body___childMarkdownRemark___id' |
  'blog_post___body___childMarkdownRemark___excerpt' |
  'blog_post___body___childMarkdownRemark___rawMarkdownBody' |
  'blog_post___body___childMarkdownRemark___html' |
  'blog_post___body___childMarkdownRemark___htmlAst' |
  'blog_post___body___childMarkdownRemark___excerptAst' |
  'blog_post___body___childMarkdownRemark___headings' |
  'blog_post___body___childMarkdownRemark___timeToRead' |
  'blog_post___body___childMarkdownRemark___tableOfContents' |
  'blog_post___body___childMarkdownRemark___children' |
  'blog_post___spaceId' |
  'blog_post___contentful_id' |
  'blog_post___createdAt' |
  'blog_post___updatedAt' |
  'blog_post___sys___revision' |
  'blog_post___node_locale' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___id' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___parent___id' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___parent___children' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___children' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___children___id' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___children___children' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___content' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___contentDigest' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___description' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___fieldOwners' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___ignoreType' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___mediaType' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___owner' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___type' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___description' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___id' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerpt' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___rawMarkdownBody' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___html' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___htmlAst' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerptAst' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___timeToRead' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___tableOfContents' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children' |
  'blog_post___childContentfulBlogPostBodyTextNode___id' |
  'blog_post___childContentfulBlogPostBodyTextNode___parent___id' |
  'blog_post___childContentfulBlogPostBodyTextNode___parent___children' |
  'blog_post___childContentfulBlogPostBodyTextNode___children' |
  'blog_post___childContentfulBlogPostBodyTextNode___children___id' |
  'blog_post___childContentfulBlogPostBodyTextNode___children___children' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___content' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___contentDigest' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___description' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___fieldOwners' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___ignoreType' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___mediaType' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___owner' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___type' |
  'blog_post___childContentfulBlogPostBodyTextNode___body' |
  'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___id' |
  'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerpt' |
  'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___rawMarkdownBody' |
  'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___html' |
  'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___htmlAst' |
  'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerptAst' |
  'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings' |
  'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___timeToRead' |
  'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___tableOfContents' |
  'blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___children' |
  'shortBio___id' |
  'shortBio___parent___id' |
  'shortBio___parent___parent___id' |
  'shortBio___parent___parent___children' |
  'shortBio___parent___children' |
  'shortBio___parent___children___id' |
  'shortBio___parent___children___children' |
  'shortBio___parent___internal___content' |
  'shortBio___parent___internal___contentDigest' |
  'shortBio___parent___internal___description' |
  'shortBio___parent___internal___fieldOwners' |
  'shortBio___parent___internal___ignoreType' |
  'shortBio___parent___internal___mediaType' |
  'shortBio___parent___internal___owner' |
  'shortBio___parent___internal___type' |
  'shortBio___children' |
  'shortBio___children___id' |
  'shortBio___children___parent___id' |
  'shortBio___children___parent___children' |
  'shortBio___children___children' |
  'shortBio___children___children___id' |
  'shortBio___children___children___children' |
  'shortBio___children___internal___content' |
  'shortBio___children___internal___contentDigest' |
  'shortBio___children___internal___description' |
  'shortBio___children___internal___fieldOwners' |
  'shortBio___children___internal___ignoreType' |
  'shortBio___children___internal___mediaType' |
  'shortBio___children___internal___owner' |
  'shortBio___children___internal___type' |
  'shortBio___internal___content' |
  'shortBio___internal___contentDigest' |
  'shortBio___internal___description' |
  'shortBio___internal___fieldOwners' |
  'shortBio___internal___ignoreType' |
  'shortBio___internal___mediaType' |
  'shortBio___internal___owner' |
  'shortBio___internal___type' |
  'shortBio___shortBio' |
  'shortBio___childMarkdownRemark___id' |
  'shortBio___childMarkdownRemark___frontmatter___title' |
  'shortBio___childMarkdownRemark___excerpt' |
  'shortBio___childMarkdownRemark___rawMarkdownBody' |
  'shortBio___childMarkdownRemark___html' |
  'shortBio___childMarkdownRemark___htmlAst' |
  'shortBio___childMarkdownRemark___excerptAst' |
  'shortBio___childMarkdownRemark___headings' |
  'shortBio___childMarkdownRemark___headings___value' |
  'shortBio___childMarkdownRemark___headings___depth' |
  'shortBio___childMarkdownRemark___timeToRead' |
  'shortBio___childMarkdownRemark___tableOfContents' |
  'shortBio___childMarkdownRemark___wordCount___paragraphs' |
  'shortBio___childMarkdownRemark___wordCount___sentences' |
  'shortBio___childMarkdownRemark___wordCount___words' |
  'shortBio___childMarkdownRemark___parent___id' |
  'shortBio___childMarkdownRemark___parent___children' |
  'shortBio___childMarkdownRemark___children' |
  'shortBio___childMarkdownRemark___children___id' |
  'shortBio___childMarkdownRemark___children___children' |
  'shortBio___childMarkdownRemark___internal___content' |
  'shortBio___childMarkdownRemark___internal___contentDigest' |
  'shortBio___childMarkdownRemark___internal___description' |
  'shortBio___childMarkdownRemark___internal___fieldOwners' |
  'shortBio___childMarkdownRemark___internal___ignoreType' |
  'shortBio___childMarkdownRemark___internal___mediaType' |
  'shortBio___childMarkdownRemark___internal___owner' |
  'shortBio___childMarkdownRemark___internal___type' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'childContentfulPersonShortBioTextNode___id' |
  'childContentfulPersonShortBioTextNode___parent___id' |
  'childContentfulPersonShortBioTextNode___parent___parent___id' |
  'childContentfulPersonShortBioTextNode___parent___parent___children' |
  'childContentfulPersonShortBioTextNode___parent___children' |
  'childContentfulPersonShortBioTextNode___parent___children___id' |
  'childContentfulPersonShortBioTextNode___parent___children___children' |
  'childContentfulPersonShortBioTextNode___parent___internal___content' |
  'childContentfulPersonShortBioTextNode___parent___internal___contentDigest' |
  'childContentfulPersonShortBioTextNode___parent___internal___description' |
  'childContentfulPersonShortBioTextNode___parent___internal___fieldOwners' |
  'childContentfulPersonShortBioTextNode___parent___internal___ignoreType' |
  'childContentfulPersonShortBioTextNode___parent___internal___mediaType' |
  'childContentfulPersonShortBioTextNode___parent___internal___owner' |
  'childContentfulPersonShortBioTextNode___parent___internal___type' |
  'childContentfulPersonShortBioTextNode___children' |
  'childContentfulPersonShortBioTextNode___children___id' |
  'childContentfulPersonShortBioTextNode___children___parent___id' |
  'childContentfulPersonShortBioTextNode___children___parent___children' |
  'childContentfulPersonShortBioTextNode___children___children' |
  'childContentfulPersonShortBioTextNode___children___children___id' |
  'childContentfulPersonShortBioTextNode___children___children___children' |
  'childContentfulPersonShortBioTextNode___children___internal___content' |
  'childContentfulPersonShortBioTextNode___children___internal___contentDigest' |
  'childContentfulPersonShortBioTextNode___children___internal___description' |
  'childContentfulPersonShortBioTextNode___children___internal___fieldOwners' |
  'childContentfulPersonShortBioTextNode___children___internal___ignoreType' |
  'childContentfulPersonShortBioTextNode___children___internal___mediaType' |
  'childContentfulPersonShortBioTextNode___children___internal___owner' |
  'childContentfulPersonShortBioTextNode___children___internal___type' |
  'childContentfulPersonShortBioTextNode___internal___content' |
  'childContentfulPersonShortBioTextNode___internal___contentDigest' |
  'childContentfulPersonShortBioTextNode___internal___description' |
  'childContentfulPersonShortBioTextNode___internal___fieldOwners' |
  'childContentfulPersonShortBioTextNode___internal___ignoreType' |
  'childContentfulPersonShortBioTextNode___internal___mediaType' |
  'childContentfulPersonShortBioTextNode___internal___owner' |
  'childContentfulPersonShortBioTextNode___internal___type' |
  'childContentfulPersonShortBioTextNode___shortBio' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___id' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___frontmatter___title' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___excerpt' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___html' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___htmlAst' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___excerptAst' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___value' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___depth' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___timeToRead' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___tableOfContents' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___sentences' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___words' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___parent___id' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___parent___children' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___children' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___children___id' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___children___children' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___content' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___contentDigest' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___description' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___ignoreType' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___mediaType' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___owner' |
  'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___type';

export type ContentfulPersonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  blog_post?: Maybe<ContentfulBlogPostFilterListInput>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPersonSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
};

export type ContentfulPersonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonEdge>;
  nodes: Array<ContentfulPerson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPersonShortBioTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  shortBio?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulPersonShortBioTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonShortBioTextNodeEdge>;
  nodes: Array<ContentfulPersonShortBioTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPersonShortBioTextNodeGroupConnection>;
};


export type ContentfulPersonShortBioTextNodeConnectionDistinctArgs = {
  field: ContentfulPersonShortBioTextNodeFieldsEnum;
};


export type ContentfulPersonShortBioTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPersonShortBioTextNodeFieldsEnum;
};

export type ContentfulPersonShortBioTextNodeEdge = {
  next?: Maybe<ContentfulPersonShortBioTextNode>;
  node: ContentfulPersonShortBioTextNode;
  previous?: Maybe<ContentfulPersonShortBioTextNode>;
};

export type ContentfulPersonShortBioTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'shortBio' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type';

export type ContentfulPersonShortBioTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  shortBio?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulPersonShortBioTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonShortBioTextNodeEdge>;
  nodes: Array<ContentfulPersonShortBioTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPersonShortBioTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonShortBioTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPersonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPersonSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPersonSysContentType>;
};

export type ContentfulPersonSysContentType = {
  sys?: Maybe<ContentfulPersonSysContentTypeSys>;
};

export type ContentfulPersonSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPersonSysContentTypeSysFilterInput>;
};

export type ContentfulPersonSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPersonSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPersonSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPersonSysContentTypeFilterInput>;
};

export type ContentfulProject = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  job?: Maybe<Array<Maybe<ContentfulJob>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulProjectSys>;
  node_locale?: Maybe<Scalars['String']>;
  description?: Maybe<ContentfulProjectDescriptionRichTextNode>;
  childContentfulProjectDescriptionRichTextNode?: Maybe<ContentfulProjectDescriptionRichTextNode>;
};


export type ContentfulProjectCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulProjectConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulProjectGroupConnection>;
};


export type ContentfulProjectConnectionDistinctArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulProjectFieldsEnum;
};

export type ContentfulProjectDescriptionRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Array<Maybe<ContentfulProjectDescriptionRichTextNodeContent>>>;
  nodeType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulProjectDescriptionRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulProjectDescriptionRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulProjectDescriptionRichTextNodeGroupConnection>;
};


export type ContentfulProjectDescriptionRichTextNodeConnectionDistinctArgs = {
  field: ContentfulProjectDescriptionRichTextNodeFieldsEnum;
};


export type ContentfulProjectDescriptionRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulProjectDescriptionRichTextNodeFieldsEnum;
};

export type ContentfulProjectDescriptionRichTextNodeContent = {
  content?: Maybe<Array<Maybe<ContentfulProjectDescriptionRichTextNodeContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulProjectDescriptionRichTextNodeContentContent = {
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulProjectDescriptionRichTextNodeContentContentContent>>>;
};

export type ContentfulProjectDescriptionRichTextNodeContentContentContent = {
  content?: Maybe<Array<Maybe<ContentfulProjectDescriptionRichTextNodeContentContentContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulProjectDescriptionRichTextNodeContentContentContentContent = {
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulProjectDescriptionRichTextNodeContentContentContentContentFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectDescriptionRichTextNodeContentContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulProjectDescriptionRichTextNodeContentContentContentContentFilterInput>;
};

export type ContentfulProjectDescriptionRichTextNodeContentContentContentFilterInput = {
  content?: Maybe<ContentfulProjectDescriptionRichTextNodeContentContentContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectDescriptionRichTextNodeContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulProjectDescriptionRichTextNodeContentContentContentFilterInput>;
};

export type ContentfulProjectDescriptionRichTextNodeContentContentFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulProjectDescriptionRichTextNodeContentContentContentFilterListInput>;
};

export type ContentfulProjectDescriptionRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulProjectDescriptionRichTextNodeContentContentFilterInput>;
};

export type ContentfulProjectDescriptionRichTextNodeContentFilterInput = {
  content?: Maybe<ContentfulProjectDescriptionRichTextNodeContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectDescriptionRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulProjectDescriptionRichTextNodeContentFilterInput>;
};

export type ContentfulProjectDescriptionRichTextNodeEdge = {
  next?: Maybe<ContentfulProjectDescriptionRichTextNode>;
  node: ContentfulProjectDescriptionRichTextNode;
  previous?: Maybe<ContentfulProjectDescriptionRichTextNode>;
};

export type ContentfulProjectDescriptionRichTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'content' |
  'content___content' |
  'content___content___value' |
  'content___content___nodeType' |
  'content___content___content' |
  'content___content___content___content' |
  'content___content___content___nodeType' |
  'content___nodeType' |
  'nodeType' |
  'description' |
  'json';

export type ContentfulProjectDescriptionRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulProjectDescriptionRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulProjectDescriptionRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulProjectDescriptionRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulProjectDescriptionRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProjectDescriptionRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulProjectEdge = {
  next?: Maybe<ContentfulProject>;
  node: ContentfulProject;
  previous?: Maybe<ContentfulProject>;
};

export type ContentfulProjectFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'slug' |
  'job' |
  'job___id' |
  'job___parent___id' |
  'job___parent___parent___id' |
  'job___parent___parent___children' |
  'job___parent___children' |
  'job___parent___children___id' |
  'job___parent___children___children' |
  'job___parent___internal___content' |
  'job___parent___internal___contentDigest' |
  'job___parent___internal___description' |
  'job___parent___internal___fieldOwners' |
  'job___parent___internal___ignoreType' |
  'job___parent___internal___mediaType' |
  'job___parent___internal___owner' |
  'job___parent___internal___type' |
  'job___children' |
  'job___children___id' |
  'job___children___parent___id' |
  'job___children___parent___children' |
  'job___children___children' |
  'job___children___children___id' |
  'job___children___children___children' |
  'job___children___internal___content' |
  'job___children___internal___contentDigest' |
  'job___children___internal___description' |
  'job___children___internal___fieldOwners' |
  'job___children___internal___ignoreType' |
  'job___children___internal___mediaType' |
  'job___children___internal___owner' |
  'job___children___internal___type' |
  'job___internal___content' |
  'job___internal___contentDigest' |
  'job___internal___description' |
  'job___internal___fieldOwners' |
  'job___internal___ignoreType' |
  'job___internal___mediaType' |
  'job___internal___owner' |
  'job___internal___type' |
  'job___jobTitle' |
  'job___startDate' |
  'job___endDate' |
  'job___technologiesUsed' |
  'job___company___id' |
  'job___company___parent___id' |
  'job___company___parent___children' |
  'job___company___children' |
  'job___company___children___id' |
  'job___company___children___children' |
  'job___company___internal___content' |
  'job___company___internal___contentDigest' |
  'job___company___internal___description' |
  'job___company___internal___fieldOwners' |
  'job___company___internal___ignoreType' |
  'job___company___internal___mediaType' |
  'job___company___internal___owner' |
  'job___company___internal___type' |
  'job___company___name' |
  'job___company___slug' |
  'job___company___job' |
  'job___company___job___id' |
  'job___company___job___children' |
  'job___company___job___jobTitle' |
  'job___company___job___startDate' |
  'job___company___job___endDate' |
  'job___company___job___technologiesUsed' |
  'job___company___job___projects' |
  'job___company___job___spaceId' |
  'job___company___job___contentful_id' |
  'job___company___job___createdAt' |
  'job___company___job___updatedAt' |
  'job___company___job___node_locale' |
  'job___company___spaceId' |
  'job___company___contentful_id' |
  'job___company___createdAt' |
  'job___company___updatedAt' |
  'job___company___sys___revision' |
  'job___company___node_locale' |
  'job___projects' |
  'job___projects___id' |
  'job___projects___parent___id' |
  'job___projects___parent___children' |
  'job___projects___children' |
  'job___projects___children___id' |
  'job___projects___children___children' |
  'job___projects___internal___content' |
  'job___projects___internal___contentDigest' |
  'job___projects___internal___description' |
  'job___projects___internal___fieldOwners' |
  'job___projects___internal___ignoreType' |
  'job___projects___internal___mediaType' |
  'job___projects___internal___owner' |
  'job___projects___internal___type' |
  'job___projects___title' |
  'job___projects___slug' |
  'job___projects___job' |
  'job___projects___job___id' |
  'job___projects___job___children' |
  'job___projects___job___jobTitle' |
  'job___projects___job___startDate' |
  'job___projects___job___endDate' |
  'job___projects___job___technologiesUsed' |
  'job___projects___job___projects' |
  'job___projects___job___spaceId' |
  'job___projects___job___contentful_id' |
  'job___projects___job___createdAt' |
  'job___projects___job___updatedAt' |
  'job___projects___job___node_locale' |
  'job___projects___spaceId' |
  'job___projects___contentful_id' |
  'job___projects___createdAt' |
  'job___projects___updatedAt' |
  'job___projects___sys___revision' |
  'job___projects___node_locale' |
  'job___projects___description___id' |
  'job___projects___description___children' |
  'job___projects___description___content' |
  'job___projects___description___nodeType' |
  'job___projects___description___description' |
  'job___projects___description___json' |
  'job___projects___childContentfulProjectDescriptionRichTextNode___id' |
  'job___projects___childContentfulProjectDescriptionRichTextNode___children' |
  'job___projects___childContentfulProjectDescriptionRichTextNode___content' |
  'job___projects___childContentfulProjectDescriptionRichTextNode___nodeType' |
  'job___projects___childContentfulProjectDescriptionRichTextNode___description' |
  'job___projects___childContentfulProjectDescriptionRichTextNode___json' |
  'job___summary___id' |
  'job___summary___parent___id' |
  'job___summary___parent___children' |
  'job___summary___children' |
  'job___summary___children___id' |
  'job___summary___children___children' |
  'job___summary___internal___content' |
  'job___summary___internal___contentDigest' |
  'job___summary___internal___description' |
  'job___summary___internal___fieldOwners' |
  'job___summary___internal___ignoreType' |
  'job___summary___internal___mediaType' |
  'job___summary___internal___owner' |
  'job___summary___internal___type' |
  'job___summary___content' |
  'job___summary___content___content' |
  'job___summary___content___nodeType' |
  'job___summary___nodeType' |
  'job___summary___summary' |
  'job___summary___json' |
  'job___spaceId' |
  'job___contentful_id' |
  'job___createdAt' |
  'job___updatedAt' |
  'job___sys___revision' |
  'job___node_locale' |
  'job___childContentfulJobSummaryRichTextNode___id' |
  'job___childContentfulJobSummaryRichTextNode___parent___id' |
  'job___childContentfulJobSummaryRichTextNode___parent___children' |
  'job___childContentfulJobSummaryRichTextNode___children' |
  'job___childContentfulJobSummaryRichTextNode___children___id' |
  'job___childContentfulJobSummaryRichTextNode___children___children' |
  'job___childContentfulJobSummaryRichTextNode___internal___content' |
  'job___childContentfulJobSummaryRichTextNode___internal___contentDigest' |
  'job___childContentfulJobSummaryRichTextNode___internal___description' |
  'job___childContentfulJobSummaryRichTextNode___internal___fieldOwners' |
  'job___childContentfulJobSummaryRichTextNode___internal___ignoreType' |
  'job___childContentfulJobSummaryRichTextNode___internal___mediaType' |
  'job___childContentfulJobSummaryRichTextNode___internal___owner' |
  'job___childContentfulJobSummaryRichTextNode___internal___type' |
  'job___childContentfulJobSummaryRichTextNode___content' |
  'job___childContentfulJobSummaryRichTextNode___content___content' |
  'job___childContentfulJobSummaryRichTextNode___content___nodeType' |
  'job___childContentfulJobSummaryRichTextNode___nodeType' |
  'job___childContentfulJobSummaryRichTextNode___summary' |
  'job___childContentfulJobSummaryRichTextNode___json' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'description___id' |
  'description___parent___id' |
  'description___parent___parent___id' |
  'description___parent___parent___children' |
  'description___parent___children' |
  'description___parent___children___id' |
  'description___parent___children___children' |
  'description___parent___internal___content' |
  'description___parent___internal___contentDigest' |
  'description___parent___internal___description' |
  'description___parent___internal___fieldOwners' |
  'description___parent___internal___ignoreType' |
  'description___parent___internal___mediaType' |
  'description___parent___internal___owner' |
  'description___parent___internal___type' |
  'description___children' |
  'description___children___id' |
  'description___children___parent___id' |
  'description___children___parent___children' |
  'description___children___children' |
  'description___children___children___id' |
  'description___children___children___children' |
  'description___children___internal___content' |
  'description___children___internal___contentDigest' |
  'description___children___internal___description' |
  'description___children___internal___fieldOwners' |
  'description___children___internal___ignoreType' |
  'description___children___internal___mediaType' |
  'description___children___internal___owner' |
  'description___children___internal___type' |
  'description___internal___content' |
  'description___internal___contentDigest' |
  'description___internal___description' |
  'description___internal___fieldOwners' |
  'description___internal___ignoreType' |
  'description___internal___mediaType' |
  'description___internal___owner' |
  'description___internal___type' |
  'description___content' |
  'description___content___content' |
  'description___content___content___value' |
  'description___content___content___nodeType' |
  'description___content___content___content' |
  'description___content___nodeType' |
  'description___nodeType' |
  'description___description' |
  'description___json' |
  'childContentfulProjectDescriptionRichTextNode___id' |
  'childContentfulProjectDescriptionRichTextNode___parent___id' |
  'childContentfulProjectDescriptionRichTextNode___parent___parent___id' |
  'childContentfulProjectDescriptionRichTextNode___parent___parent___children' |
  'childContentfulProjectDescriptionRichTextNode___parent___children' |
  'childContentfulProjectDescriptionRichTextNode___parent___children___id' |
  'childContentfulProjectDescriptionRichTextNode___parent___children___children' |
  'childContentfulProjectDescriptionRichTextNode___parent___internal___content' |
  'childContentfulProjectDescriptionRichTextNode___parent___internal___contentDigest' |
  'childContentfulProjectDescriptionRichTextNode___parent___internal___description' |
  'childContentfulProjectDescriptionRichTextNode___parent___internal___fieldOwners' |
  'childContentfulProjectDescriptionRichTextNode___parent___internal___ignoreType' |
  'childContentfulProjectDescriptionRichTextNode___parent___internal___mediaType' |
  'childContentfulProjectDescriptionRichTextNode___parent___internal___owner' |
  'childContentfulProjectDescriptionRichTextNode___parent___internal___type' |
  'childContentfulProjectDescriptionRichTextNode___children' |
  'childContentfulProjectDescriptionRichTextNode___children___id' |
  'childContentfulProjectDescriptionRichTextNode___children___parent___id' |
  'childContentfulProjectDescriptionRichTextNode___children___parent___children' |
  'childContentfulProjectDescriptionRichTextNode___children___children' |
  'childContentfulProjectDescriptionRichTextNode___children___children___id' |
  'childContentfulProjectDescriptionRichTextNode___children___children___children' |
  'childContentfulProjectDescriptionRichTextNode___children___internal___content' |
  'childContentfulProjectDescriptionRichTextNode___children___internal___contentDigest' |
  'childContentfulProjectDescriptionRichTextNode___children___internal___description' |
  'childContentfulProjectDescriptionRichTextNode___children___internal___fieldOwners' |
  'childContentfulProjectDescriptionRichTextNode___children___internal___ignoreType' |
  'childContentfulProjectDescriptionRichTextNode___children___internal___mediaType' |
  'childContentfulProjectDescriptionRichTextNode___children___internal___owner' |
  'childContentfulProjectDescriptionRichTextNode___children___internal___type' |
  'childContentfulProjectDescriptionRichTextNode___internal___content' |
  'childContentfulProjectDescriptionRichTextNode___internal___contentDigest' |
  'childContentfulProjectDescriptionRichTextNode___internal___description' |
  'childContentfulProjectDescriptionRichTextNode___internal___fieldOwners' |
  'childContentfulProjectDescriptionRichTextNode___internal___ignoreType' |
  'childContentfulProjectDescriptionRichTextNode___internal___mediaType' |
  'childContentfulProjectDescriptionRichTextNode___internal___owner' |
  'childContentfulProjectDescriptionRichTextNode___internal___type' |
  'childContentfulProjectDescriptionRichTextNode___content' |
  'childContentfulProjectDescriptionRichTextNode___content___content' |
  'childContentfulProjectDescriptionRichTextNode___content___content___value' |
  'childContentfulProjectDescriptionRichTextNode___content___content___nodeType' |
  'childContentfulProjectDescriptionRichTextNode___content___content___content' |
  'childContentfulProjectDescriptionRichTextNode___content___nodeType' |
  'childContentfulProjectDescriptionRichTextNode___nodeType' |
  'childContentfulProjectDescriptionRichTextNode___description' |
  'childContentfulProjectDescriptionRichTextNode___json';

export type ContentfulProjectFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  job?: Maybe<ContentfulJobFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulProjectDescriptionRichTextNodeFilterInput>;
  childContentfulProjectDescriptionRichTextNode?: Maybe<ContentfulProjectDescriptionRichTextNodeFilterInput>;
};

export type ContentfulProjectFilterListInput = {
  elemMatch?: Maybe<ContentfulProjectFilterInput>;
};

export type ContentfulProjectGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProjectFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulProjectSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulProjectSysContentType>;
};

export type ContentfulProjectSysContentType = {
  sys?: Maybe<ContentfulProjectSysContentTypeSys>;
};

export type ContentfulProjectSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulProjectSysContentTypeSysFilterInput>;
};

export type ContentfulProjectSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulProjectSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  birthtime?: Maybe<Scalars['Date']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  birthtime?: Maybe<Scalars['Date']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'childImageSharp___fixed___base64' |
  'childImageSharp___fixed___tracedSVG' |
  'childImageSharp___fixed___aspectRatio' |
  'childImageSharp___fixed___width' |
  'childImageSharp___fixed___height' |
  'childImageSharp___fixed___src' |
  'childImageSharp___fixed___srcSet' |
  'childImageSharp___fixed___srcWebp' |
  'childImageSharp___fixed___srcSetWebp' |
  'childImageSharp___fixed___originalName' |
  'childImageSharp___resolutions___base64' |
  'childImageSharp___resolutions___tracedSVG' |
  'childImageSharp___resolutions___aspectRatio' |
  'childImageSharp___resolutions___width' |
  'childImageSharp___resolutions___height' |
  'childImageSharp___resolutions___src' |
  'childImageSharp___resolutions___srcSet' |
  'childImageSharp___resolutions___srcWebp' |
  'childImageSharp___resolutions___srcSetWebp' |
  'childImageSharp___resolutions___originalName' |
  'childImageSharp___fluid___base64' |
  'childImageSharp___fluid___tracedSVG' |
  'childImageSharp___fluid___aspectRatio' |
  'childImageSharp___fluid___src' |
  'childImageSharp___fluid___srcSet' |
  'childImageSharp___fluid___srcWebp' |
  'childImageSharp___fluid___srcSetWebp' |
  'childImageSharp___fluid___sizes' |
  'childImageSharp___fluid___originalImg' |
  'childImageSharp___fluid___originalName' |
  'childImageSharp___fluid___presentationWidth' |
  'childImageSharp___fluid___presentationHeight' |
  'childImageSharp___sizes___base64' |
  'childImageSharp___sizes___tracedSVG' |
  'childImageSharp___sizes___aspectRatio' |
  'childImageSharp___sizes___src' |
  'childImageSharp___sizes___srcSet' |
  'childImageSharp___sizes___srcWebp' |
  'childImageSharp___sizes___srcSetWebp' |
  'childImageSharp___sizes___sizes' |
  'childImageSharp___sizes___originalImg' |
  'childImageSharp___sizes___originalName' |
  'childImageSharp___sizes___presentationWidth' |
  'childImageSharp___sizes___presentationHeight' |
  'childImageSharp___original___width' |
  'childImageSharp___original___height' |
  'childImageSharp___original___src' |
  'childImageSharp___resize___src' |
  'childImageSharp___resize___tracedSVG' |
  'childImageSharp___resize___width' |
  'childImageSharp___resize___height' |
  'childImageSharp___resize___aspectRatio' |
  'childImageSharp___resize___originalName' |
  'childImageSharp___id' |
  'childImageSharp___parent___id' |
  'childImageSharp___parent___parent___id' |
  'childImageSharp___parent___parent___children' |
  'childImageSharp___parent___children' |
  'childImageSharp___parent___children___id' |
  'childImageSharp___parent___children___children' |
  'childImageSharp___parent___internal___content' |
  'childImageSharp___parent___internal___contentDigest' |
  'childImageSharp___parent___internal___description' |
  'childImageSharp___parent___internal___fieldOwners' |
  'childImageSharp___parent___internal___ignoreType' |
  'childImageSharp___parent___internal___mediaType' |
  'childImageSharp___parent___internal___owner' |
  'childImageSharp___parent___internal___type' |
  'childImageSharp___children' |
  'childImageSharp___children___id' |
  'childImageSharp___children___parent___id' |
  'childImageSharp___children___parent___children' |
  'childImageSharp___children___children' |
  'childImageSharp___children___children___id' |
  'childImageSharp___children___children___children' |
  'childImageSharp___children___internal___content' |
  'childImageSharp___children___internal___contentDigest' |
  'childImageSharp___children___internal___description' |
  'childImageSharp___children___internal___fieldOwners' |
  'childImageSharp___children___internal___ignoreType' |
  'childImageSharp___children___internal___mediaType' |
  'childImageSharp___children___internal___owner' |
  'childImageSharp___children___internal___type' |
  'childImageSharp___internal___content' |
  'childImageSharp___internal___contentDigest' |
  'childImageSharp___internal___description' |
  'childImageSharp___internal___fieldOwners' |
  'childImageSharp___internal___ignoreType' |
  'childImageSharp___internal___mediaType' |
  'childImageSharp___internal___owner' |
  'childImageSharp___internal___type' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus = 
  'CENTER' |
  'NORTH' |
  'NORTHEAST' |
  'EAST' |
  'SOUTHEAST' |
  'SOUTH' |
  'SOUTHWEST' |
  'WEST' |
  'NORTHWEST' |
  'ENTROPY' |
  'ATTENTION';

export type ImageFit = 
  'COVER' |
  'CONTAIN' |
  'FILL';

export type ImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ImageResizingBehavior = 
  'NO_CHANGE' |
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  'PAD' |
  /** Crop a part of the original image to match the specified size. */
  'CROP' |
  /** 
 * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
 */
  'FILL' |
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  'THUMB' |
  /** Scale the image regardless of the original aspect ratio. */
  'SCALE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'fixed___originalName' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'resolutions___originalName' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'fluid___originalImg' |
  'fluid___originalName' |
  'fluid___presentationWidth' |
  'fluid___presentationHeight' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'sizes___originalImg' |
  'sizes___originalName' |
  'sizes___presentationWidth' |
  'sizes___presentationHeight' |
  'original___width' |
  'original___height' |
  'original___src' |
  'resize___src' |
  'resize___tracedSVG' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio' |
  'resize___originalName' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats = 
  'PLAIN' |
  'HTML' |
  'MARKDOWN';

export type MarkdownHeading = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum = 
  'id' |
  'frontmatter___title' |
  'excerpt' |
  'rawMarkdownBody' |
  'html' |
  'htmlAst' |
  'excerptAst' |
  'headings' |
  'headings___value' |
  'headings___depth' |
  'timeToRead' |
  'tableOfContents' |
  'wordCount___paragraphs' |
  'wordCount___sentences' |
  'wordCount___words' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  'TURNPOLICY_BLACK' |
  'TURNPOLICY_WHITE' |
  'TURNPOLICY_LEFT' |
  'TURNPOLICY_RIGHT' |
  'TURNPOLICY_MINORITY' |
  'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulCompany?: Maybe<ContentfulCompany>;
  allContentfulCompany: ContentfulCompanyConnection;
  contentfulProjectDescriptionRichTextNode?: Maybe<ContentfulProjectDescriptionRichTextNode>;
  allContentfulProjectDescriptionRichTextNode: ContentfulProjectDescriptionRichTextNodeConnection;
  contentfulProject?: Maybe<ContentfulProject>;
  allContentfulProject: ContentfulProjectConnection;
  contentfulJobSummaryRichTextNode?: Maybe<ContentfulJobSummaryRichTextNode>;
  allContentfulJobSummaryRichTextNode: ContentfulJobSummaryRichTextNodeConnection;
  contentfulJob?: Maybe<ContentfulJob>;
  allContentfulJob: ContentfulJobConnection;
  contentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNode>;
  allContentfulBlogPostBodyTextNode: ContentfulBlogPostBodyTextNodeConnection;
  contentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  allContentfulBlogPostDescriptionTextNode: ContentfulBlogPostDescriptionTextNodeConnection;
  contentfulBlogPost?: Maybe<ContentfulBlogPost>;
  allContentfulBlogPost: ContentfulBlogPostConnection;
  contentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNode>;
  allContentfulPersonShortBioTextNode: ContentfulPersonShortBioTextNodeConnection;
  contentfulPerson?: Maybe<ContentfulPerson>;
  allContentfulPerson: ContentfulPersonConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCompanyArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  job?: Maybe<ContentfulJobFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCompanySysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulCompanyArgs = {
  filter?: Maybe<ContentfulCompanyFilterInput>;
  sort?: Maybe<ContentfulCompanySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulProjectDescriptionRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulProjectDescriptionRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulProjectDescriptionRichTextNodeArgs = {
  filter?: Maybe<ContentfulProjectDescriptionRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulProjectDescriptionRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulProjectArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  job?: Maybe<ContentfulJobFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulProjectDescriptionRichTextNodeFilterInput>;
  childContentfulProjectDescriptionRichTextNode?: Maybe<ContentfulProjectDescriptionRichTextNodeFilterInput>;
};


export type QueryAllContentfulProjectArgs = {
  filter?: Maybe<ContentfulProjectFilterInput>;
  sort?: Maybe<ContentfulProjectSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulJobSummaryRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulJobSummaryRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  summary?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulJobSummaryRichTextNodeArgs = {
  filter?: Maybe<ContentfulJobSummaryRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulJobSummaryRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulJobArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  jobTitle?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  endDate?: Maybe<DateQueryOperatorInput>;
  technologiesUsed?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<ContentfulCompanyFilterInput>;
  projects?: Maybe<ContentfulProjectFilterListInput>;
  summary?: Maybe<ContentfulJobSummaryRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulJobSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulJobSummaryRichTextNode?: Maybe<ContentfulJobSummaryRichTextNodeFilterInput>;
};


export type QueryAllContentfulJobArgs = {
  filter?: Maybe<ContentfulJobFilterInput>;
  sort?: Maybe<ContentfulJobSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulBlogPostBodyTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPostBodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulBlogPostDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPostDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  heroImage?: Maybe<ContentfulAssetFilterInput>;
  author?: Maybe<ContentfulPersonFilterInput>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  body?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
};


export type QueryAllContentfulBlogPostArgs = {
  filter?: Maybe<ContentfulBlogPostFilterInput>;
  sort?: Maybe<ContentfulBlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPersonShortBioTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  shortBio?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulPersonShortBioTextNodeArgs = {
  filter?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  sort?: Maybe<ContentfulPersonShortBioTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPersonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  blog_post?: Maybe<ContentfulBlogPostFilterListInput>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPersonSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
};


export type QueryAllContentfulPersonArgs = {
  filter?: Maybe<ContentfulPersonFilterInput>;
  sort?: Maybe<ContentfulPersonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'siteMetadata___title' |
  'port' |
  'host' |
  'pathPrefix' |
  'polyfill' |
  'buildTime';

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  'path' |
  'component' |
  'internalComponentName' |
  'componentChunkName' |
  'matchPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'isCreatedByStatefulCreatePages' |
  'context___slug' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___fileName' |
  'pluginCreator___pluginOptions___isTSX' |
  'pluginCreator___pluginOptions___allExtensions' |
  'pluginCreator___pluginOptions___stylesProvider___injectFirst' |
  'pluginCreator___pluginOptions___fonts___google' |
  'pluginCreator___pluginOptions___modules' |
  'pluginCreator___pluginOptions___spaceId' |
  'pluginCreator___pluginOptions___accessToken' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___author' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___fileName' |
  'pluginOptions___isTSX' |
  'pluginOptions___allExtensions' |
  'pluginOptions___stylesProvider___injectFirst' |
  'pluginOptions___fonts___google' |
  'pluginOptions___fonts___google___family' |
  'pluginOptions___fonts___google___variants' |
  'pluginOptions___modules' |
  'pluginOptions___spaceId' |
  'pluginOptions___accessToken' |
  'pluginOptions___path' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___author' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  fileName?: Maybe<Scalars['String']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  stylesProvider?: Maybe<SitePluginPluginOptionsStylesProvider>;
  fonts?: Maybe<SitePluginPluginOptionsFonts>;
  modules?: Maybe<Array<Maybe<Scalars['String']>>>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  fileName?: Maybe<StringQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  stylesProvider?: Maybe<SitePluginPluginOptionsStylesProviderFilterInput>;
  fonts?: Maybe<SitePluginPluginOptionsFontsFilterInput>;
  modules?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsFonts = {
  google?: Maybe<Array<Maybe<SitePluginPluginOptionsFontsGoogle>>>;
};

export type SitePluginPluginOptionsFontsFilterInput = {
  google?: Maybe<SitePluginPluginOptionsFontsGoogleFilterListInput>;
};

export type SitePluginPluginOptionsFontsGoogle = {
  family?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsFontsGoogleFilterInput = {
  family?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFontsGoogleFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFontsGoogleFilterInput>;
};

export type SitePluginPluginOptionsStylesProvider = {
  injectFirst?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsStylesProviderFilterInput = {
  injectFirst?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type JobInfoFragment = (
  Pick<ContentfulJob, 'id' | 'jobTitle' | 'startDate' | 'endDate' | 'technologiesUsed'>
  & { company: Maybe<CompanyInfoFragment>, childContentfulJobSummaryRichTextNode: Maybe<Pick<ContentfulJobSummaryRichTextNode, 'json'>>, projects: Maybe<Array<Maybe<ProjectInfoFragment>>> }
);

export type ProjectInfoFragment = (
  Pick<ContentfulProject, 'id' | 'contentful_id' | 'title' | 'slug'>
  & { childContentfulProjectDescriptionRichTextNode: Maybe<Pick<ContentfulProjectDescriptionRichTextNode, 'json'>> }
);

export type CompanyInfoFragment = Pick<ContentfulCompany, 'id' | 'contentful_id' | 'slug' | 'name'>;

export type BlogIndexQueryQueryVariables = {};


export type BlogIndexQueryQuery = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, allContentfulBlogPost: { edges: Array<{ node: (
        Pick<ContentfulBlogPost, 'title' | 'slug' | 'publishDate' | 'tags'>
        & { heroImage: Maybe<{ fluid: Maybe<GatsbyContentfulFluid_TracedSvgFragment> }>, description: Maybe<{ childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }> }
      ) }> } };

export type CvQueryQueryVariables = {};


export type CvQueryQuery = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, allContentfulJob: { edges: Array<{ node: JobInfoFragment }> } };

export type HomeQueryQueryVariables = {};


export type HomeQueryQuery = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, allContentfulBlogPost: { edges: Array<{ node: (
        Pick<ContentfulBlogPost, 'title' | 'slug' | 'publishDate' | 'tags'>
        & { heroImage: Maybe<{ fluid: Maybe<GatsbyContentfulFluid_TracedSvgFragment> }>, description: Maybe<{ childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }> }
      ) }> }, allContentfulPerson: { edges: Array<{ node: (
        Pick<ContentfulPerson, 'name' | 'title'>
        & { shortBio: Maybe<Pick<ContentfulPersonShortBioTextNode, 'shortBio'>>, heroImage: Maybe<{ fluid: Maybe<GatsbyContentfulFluid_TracedSvgFragment> }> }
      ) }> } };

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
