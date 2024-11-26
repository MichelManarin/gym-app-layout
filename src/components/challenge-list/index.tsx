import React, { useContext } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { AppContext } from "../../contexts/AppContext";

import ChallengeCard from "../challenge-card"; 
import CreateChallengeCard from "../challenge-card-add"; 

export default function ChallengeList() {
  const { challenges } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desafios</Text>
      <FlatList
        data={challenges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.id === "9999" ? (
            <CreateChallengeCard
              onPress={() => alert("Criar um novo desafio!")}
            />
          ) : (
            <ChallengeCard
              title={item.title}
              steps={item.steps}
              onPress={() => alert(`Você selecionou: ${item.title}`)}
            />
          )
        }
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
    paddingTop: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3B3B3B',
    fontFamily: 'Poppins_700Bold',
  },
});
