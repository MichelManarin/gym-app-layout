import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveInformationOnLocalCache = async (name: string, token: string) => {
  try {
    await AsyncStorage.setItem(name, token);
  } catch (error) {
    console.error("Erro ao manipular cache local: ", error);
  }
};

export const getInformationFromLocalCache = async (name: string): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(name);
  } catch (error) {
    console.error("Erro ao manipular cache local: ", error);
    return null;
  }
};

export const removeInformationFromLocalCache = async (name: string) => {
  try {
    await AsyncStorage.removeItem(name);
  } catch (error) {
    console.error("Erro ao manipular cache local: ", error);
  }
};
