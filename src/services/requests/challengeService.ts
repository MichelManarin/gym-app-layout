import api from '../api';
import { getInformationFromLocalCache } from "../storage";
import { apiResponse } from '../dto/response/response';
import challengeResponse from '../dto/challenge';

export const list = async (): Promise<challengeResponse> => {
  try {
    
    const token = await getInformationFromLocalCache("auth_token");

    const response = await api.get<apiResponse<challengeResponse>>(
      '/challenge',
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
