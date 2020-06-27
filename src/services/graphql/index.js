import {query} from '../graphql/api';
import {categoriesRoot, categoryById} from './schema/category';

export const getRootCategories = () => query(categoriesRoot);
export const getCategoryById = (data) => query(categoryById, data);
