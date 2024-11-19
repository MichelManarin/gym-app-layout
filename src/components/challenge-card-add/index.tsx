import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

interface CreateChallengeCardProps {
  onPress: () => void; 
}

export default function CreateChallengeCard({ onPress }: CreateChallengeCardProps) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.cardContent}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="add" size={24} color="#000000" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.challengeText}>Criar Novo Desafio</Text>
          <Text style={styles.stepsText}>Defina suas metas e objetivos</Text>
        </View>
      </View>
    </TouchableOpacity>
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
});
