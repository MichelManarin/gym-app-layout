import React, { useEffect, useContext } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

import { getInformationFromLocalCache } from "../../services/storage";

import { validateTokenRequest, logoutRequest } from "../../services/requests/authService";

export default function LoadingPage({ navigation }: { navigation: any }) { 

  useEffect(() => {
    const checkAuthentication = async () => {
      try {          

        const token = await getInformationFromLocalCache("auth_token") ?? "";

        if (!token) {
          navigation.navigate("Login");
        }

        await validateTokenRequest(token);

        navigation.navigate("Home");

      } catch (error) {
        console.log("error", error);
        navigation.navigate('Login');
      }
    };

    checkAuthentication();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#7F58FF" />
      <Text style={styles.title}>Queimando calorias...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F8FC",
  },
  title: {
    paddingTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
    color: '#3B3B3B',
    fontFamily: 'Poppins_700Bold',
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: "#3B3B3B",
    textAlign: "center",
  },
});
