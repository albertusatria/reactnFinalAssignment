import {gql} from 'apollo-boost';

export const categoriesRoot = gql`
  {
    categoryList {
      children_count
      children {
        id
        level
        name
        path
        url_path
        url_key
        image
      }
    }
  }
`;

export const categoryById = gql`
  query category($id: Int!) {
    category(id: $id) {
      children_count
      children {
        id
        level
        name
        path
        url_path
        url_key
        image
      }
    }
  }
`;
