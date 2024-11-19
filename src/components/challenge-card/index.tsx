import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get("window");

interface ChallengeCardProps {
  title: string; 
  steps: string; 
  onPress: () => void; 
}

export default function ChallengeCard({ title, steps, onPress }: ChallengeCardProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="directions-walk" size={24} color="#000" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.challengeText}>{title}</Text>
          <Text style={styles.stepsText}>{steps}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <MaterialIcons name="chevron-right" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.9,
    backgroundColor: "#e4dcff",
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    alignSelf: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  challengeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  stepsText: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#7F58FF",
    justifyContent: "center",
    alignItems: "center",
  },
});
