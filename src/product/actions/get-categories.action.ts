import { ICategoryResponse } from '../types';
import { ProductApi } from '../api/client';

export const getCategories = async (
  organizationId: string,
  params?: { [key: string]: any },
): Promise<ICategoryResponse[]> => {
  const response = await ProductApi.getCategories(organizationId, params);
  return response.data;
};
