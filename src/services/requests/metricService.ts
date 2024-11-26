import api from '../api';
import { getInformationFromLocalCache } from "../storage";
import metricResponse from '../dto/response/metric';
import { apiResponse } from '../dto/response/response';

export const getMetric = async (option: string): Promise<metricResponse> => {
  try {
    
    const token = await getInformationFromLocalCache("auth_token");

    const response = await api.get<apiResponse<metricResponse>>(
      '/metric',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data?.data ?? {};

  } catch (error: any) {
    throw new Error('Erro ao recuperar as métricas');
  }
};
