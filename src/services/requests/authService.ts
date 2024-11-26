import api from '../../services/api';
import { saveInformationOnLocalCache, removeInformationFromLocalCache } from "../../services/storage";
import LoginResponse from "../../services/dto/login-response";

export const validateTokenRequest = async (token : string): Promise<LoginResponse> => {
  try {

    const response = await api.post<LoginResponse>(
      '/auth/validate',
      {}, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      removeInformationFromLocalCache('auth_token');
    }

    throw new Error('Erro na validação do token. Tente novamente.');
  }
};



export const loginRequest = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await api.post('/auth/login', {
      username,
      password,
    });

    const { token } = response.data || {};

    saveInformationOnLocalCache("auth_token", token);

    return response.data;
  } catch (error) {

    removeInformationFromLocalCache("auth_token");

    console.error('Erro na autenticação:', error);
    throw error;
  }
};

export const logoutRequest = async (): Promise<void> => {
  try {
    removeInformationFromLocalCache('auth_token');
  } catch (error) {
    console.error('Erro ao realizar logout:', error);
    throw error;
  }
};
