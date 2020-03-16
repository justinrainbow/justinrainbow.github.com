import { PageRendererProps } from 'gatsby';

declare global {
  interface PageWithData<Data extends {}> {
    data: Data;
    location: PageRendererProps['location'];
  }
}
