import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import CustomButtonGroup from '../../components/footer-bottom-group';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import Illustration from '../../assets/gym.png'; 

const { height } = Dimensions.get('window'); 

const WelcomePage = ({ navigation }: { navigation: any }) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const onPressContinue = () => {
    navigation.navigate('Goals');
  }

  const onPressBack = () => {
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.logo}>GYM APP</Text>
          <Text style={styles.title}>Pronto para começar?</Text>
          <Text style={styles.description}>
            Junte-se a 20 mil pessoas que usam o melhor app de dieta e torne-se a sua melhor versão!
          </Text>
          <Image source={Illustration} style={styles.image} resizeMode="contain" />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <CustomButtonGroup laterText="Pular" onPressContinue={onPressContinue} onPressBack={onPressBack} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 30,
    fontWeight: '700',
    color: '#7F58FF',
    marginBottom: 10,
    fontFamily: 'Poppins_700Bold',
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
  image: {
    width: '100%',
    marginTop: 40,
    height: height * 0.3, 
    marginBottom: 30,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#777",
    marginBottom: 30,
  },
  footer: {
    width: '100%',
    backgroundColor: '#F7F8FC',
    margin: 0,
    padding: 0,
  },
});

export default WelcomePage;
