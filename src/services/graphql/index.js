import {query} from '../graphql/api';
import {categoriesRoot, productListByCategoryId} from './schema/category';

export const getRootCategories = () => query(categoriesRoot);
export const getProductsByCategoryId = (data) =>
  query(productListByCategoryId, data);
