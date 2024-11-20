import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import BottomNav from '../../components/bottom-navigation';
import TopHeader from '../../components/user-information';

const { width, height } = Dimensions.get("window");

export default function StatsPage({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#f7f8fc" }}>
      <TopHeader></TopHeader>
      <View style={styles.container}>
        <Text style={styles.title}>Estatísticas</Text>
      </View>
      <BottomNav navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F8FC",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#3B3B3B',
    fontFamily: 'Poppins_700Bold',
  },
});