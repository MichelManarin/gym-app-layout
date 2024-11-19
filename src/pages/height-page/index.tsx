import React, { useState, useContext  } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import CustomButtonGroup from '../../components/footer-bottom-group';
import { AppContext } from "../../contexts/AppContext";
// import SectionsWheelPicker from 'react-native-ui-lib/sectionsWheelPicker';

const { height } = Dimensions.get('window');

export default function HeightPage({ navigation }: { navigation: any }) {
  const [userWeight, setUserWeight] = useState("");

  const { userHeight, setUserHeight } = useContext(AppContext);

  // const heightOptions = Array.from({ length: 101 }, (_, i) => {
  //   const heightInMeters = (100 + i) / 100; 
  //   return {
  //     label: heightInMeters.toFixed(2).replace(".", ",") + "m", // 
  //     value: heightInMeters,
  //   };
  // });

  const onPressContinue = () => {
    navigation.navigate('Home');
  }

  
  const onPressBack = () => {
    navigation.goBack('Welcome');
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Qual sua altura e peso?</Text>
        <Text style={styles.description}>
          Usaremos isso para definir metas e objetivos personalizados para o seu perfil.
        </Text>
        {/* <View style={styles.inputContainer}>
          <SectionsWheelPicker
            sections={sections}
          /> 
        </View> */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Informe sua altura em cm"
            keyboardType="numeric"
            value={userHeight}
            onChangeText={(text) => setUserHeight(text)}
          />
           <TextInput
            style={styles.input}
            placeholder="Informe seu peso"
            keyboardType="numeric"
            value={userWeight}
            onChangeText={(text) => setUserWeight(text)}
          />
          {/* <Text>{userHeight}</Text> */}
        </View>
      </View>

      <View style={styles.footer}>
        <CustomButtonGroup doItText="Finalizar" onPressBack={onPressBack} onPressContinue={onPressContinue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
    color: '#3B3B3B',
    fontFamily: 'Poppins_700Bold',
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#777",
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
    marginTop: 40
  },
  input: {
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    marginTop: 15
  },
  footer: {
    width: '100%',
    backgroundColor: '#F7F8FC',
    padding: 0,
  },
});
