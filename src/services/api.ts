import axios from "axios";
import { Alert } from "react-native";
import { navigate } from "./navigation-service"; 

const API_BASE_URL = "http://192.168.16.108:3000/";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, config } = error.response;

      if (status === 404) {
        Alert.alert("Erro", "Recurso não encontrado. Você será redirecionado ao login.");
        navigate("Login");
      }

      if (status === 401 && !config.url.endsWith("/login") && !config.url.endsWith("/validate")) {
        Alert.alert("Sessão Expirada", "Por favor, faça login novamente.");
        navigate("Login");
      }
    } else {
      Alert.alert("Erro", "Ocorreu um erro.. tente novamente mais tarde");
    }

    return Promise.reject(error);
  }
);

export default api;
