import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import CustomButtonGroup from '../../components/footer-bottom-group';

const { height } = Dimensions.get('window');

export default function BodyInformationsPage({ navigation }: { navigation: any }) {
  const [selectedGoal, setSelectedGoal] = useState("");

  const goals = [
    { id: "lose_weight", label: "Perca peso", icon: "🏋️‍♀️" },
    { id: "get_fitter", label: "Torne-se fitness", icon: "🏃‍♂️" },
    { id: "gain_muscle", label: "Ganhe músculo", icon: "💪" },
  ];

  const onPressContinue = () => {
    navigation.navigate('Height');
  }

  const onPressBack = () => {
    navigation.navigate('Welcome');
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Qual seu objetivo ?</Text>
        <Text style={styles.description}>
          Usaremos isso para definir metas e objetivos personalizados para o seu perfil
        </Text>

        <View style={styles.goalsContainer}>
          {goals.map((goal) => (
            <TouchableOpacity
              key={goal.id}
              style={[
                styles.goalButton,
                selectedGoal === goal.id && styles.selectedGoalButton,
              ]}
              onPress={() => setSelectedGoal(goal.id)}
            >
              <Text style={styles.icon}>{goal.icon}</Text>
              <Text
                style={[
                  styles.goalLabel,
                  selectedGoal === goal.id && styles.selectedGoalLabel,
                ]}
              >
                {goal.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <CustomButtonGroup doItText={"Prosseguir"} onPressBack={onPressBack} onPressContinue={onPressContinue} />
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
  goalsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 40,
  },
  goalButton: {
    width: 100,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eceff5",
    borderRadius: 10,
    padding: 10,
    margin: 5
  },
  selectedGoalButton: {
    backgroundColor: "#7a5eff",
  },
  icon: {
    fontSize: 24,
    marginBottom: 10,
  },
  goalLabel: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
  },
  selectedGoalLabel: {
    color: "#fff",
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
  footer: {
    width: '100%',
    backgroundColor: '#F7F8FC',
    padding: 0,
  },
});
