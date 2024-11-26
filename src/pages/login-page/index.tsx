import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import api from "../../services/api";
import { AppContext } from "../../contexts/AppContext";
import { saveInformationOnLocalCache } from "../../services/storage";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Por favor, insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("A senha é obrigatória"),
});

export default function LoginPage({ navigation }: { navigation: any }) {
  const { setIsAuthenticated } = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const response = await api.post("auth/login", values);

      console.log("response ", response.data); 
      const { token } = response.data || {};

      await saveInformationOnLocalCache("auth_token", token);

      setIsAuthenticated(true); 

      navigation.navigate("Home");
    } catch (error: any) {

      setIsAuthenticated(false); 
      console.log("errro.respponse ", error)
      if (error.response) {
        setIsAuthenticated(false); 
        const { message, errors } = error.response.data;

        if (message === "Invalid credentials") {
          setErrorMessage("Credenciais inválidas. Por favor, tente novamente.");
        } else if (message === "Validation error" && Array.isArray(errors)) {
          const errorMessages = errors.map((err: any) => `${err.field}: ${err.message}`).join("\n");
          setErrorMessage(errorMessages);
        } else {
          setErrorMessage("Ocorreu um erro desconhecido. Tente novamente mais tarde.");
        }
      } else {
        setErrorMessage("Não foi possível conectar ao servidor. Verifique sua conexão com a internet.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo de volta!</Text>

      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Informe seu e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Informe sua senha"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}


            <TouchableOpacity onPress={handleSubmit as any} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Não tem uma conta?{" "}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate("SignUp")}
        >
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3B3B3B",
  },
  form: {
    width: "100%",
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333",
    marginTop: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  errorMessage: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "#7F58FF",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#3B3B3B",
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: "underline",
  },
  signupText: {
    fontSize: 14,
    color: "#777",
    marginTop: 20,
  },
  signupLink: {
    color: "#7F58FF",
    fontWeight: "bold",
  },
});
