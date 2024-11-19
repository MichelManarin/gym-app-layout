import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from "react-native";
import BottomNav from '../../components/bottom-navigation';
import TopHeader from '../../components/user-information';
import ChallengeList from '../../components/challenge-list';

const { width, height } = Dimensions.get("window");

import {
  ProgressChart
} from "react-native-chart-kit";

const stats = [
  { id: "1", title: "Passos", value: "2546" },
  { id: "2", title: "Dormir", value: "8h 46m" },
  { id: "3", title: "Treino", value: "1h 27 mins" },
  { id: "4", title: "Meditação", value: "0 mins" },
];

const periods = ["Hoje", "Semana", "Mês", "Ano"];

export default function HomePage({ navigation }: { navigation: any }) {

  const [period, setPeriod] = useState("Hoje");

  const renderFooter = () => (
    <View style={{ paddingBottom: 70 }}>
      <ChallengeList />
    </View>
  )

  const renderHeader = () => (
    <View style={[styles.statsContainer, { margin: 5 }]}>
        <Text style={styles.title}>Calorias</Text>
      <View style={styles.filterContainer}>
        {periods.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.filterButton, period === item && styles.activeFilterButton]}
            onPress={() => setPeriod(item)}
          >
            <Text style={[styles.filterText, period === item && styles.activeFilterText]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.shadowBox}>
        <View style={[{ alignItems: "center", justifyContent: "center", width: width - 40 }]}>
          <ProgressChart
            data={{
              data: [0.7, 0.5],
            }}
            width={width - 40}
            height={150}
            strokeWidth={16}
            radius={32}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(127, 88, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            hideLegend={true}
          />
          <View style={styles.labelsContainer}>
            <View style={styles.labelItem}>
              <View style={[styles.colorDot, { backgroundColor: "#7F58FF" }]} />
              <View>
                <Text style={styles.labelText}>Consumidas</Text>
                <Text style={styles.labelSubText}>Total: 1500 kcal</Text>
              </View>
            </View>
            <View style={styles.labelItem}>
              <View style={[styles.colorDot, { backgroundColor: "rgba(127, 88, 255, 0.6)" }]} />
              <View>
                <Text style={styles.labelText}>Queimadas</Text>
                <Text style={styles.labelSubText}>Total: 1200 kcal</Text>
              </View>
            </View>
          </View>

        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#f7f8fc" }}>
      <TopHeader></TopHeader>
      <FlatList
        data={stats}
        style={styles.m0}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        renderItem={({ item }) => (
          <View style={styles.statBox} >
            <Text style={styles.statTitle}>{item.title}</Text>
            <Text style={styles.statValue}>{item.value}</Text>
          </View>
        )}
        contentContainerStyle={styles.container}
      />
      <BottomNav />
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
  statsContainer: {
    marginTop: 5,
  },
  statsTitle: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 10,
  },
  labelSubText: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },
  m0: {
    margin: 0,
  },
  statBox: {
    flex: 1,
    margin: 4,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center",
    marginTop: 10
  },
  statTitle: {
    fontSize: 14,
    color: "#555",
  },
  statValue: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
    marginTop: 5,
  },
  labelsContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  labelItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  colorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  labelText: {
    fontSize: 14,
    color: "#333",
  },
  shadowBox: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  filterButton: {
    padding: 8,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  activeFilterButton: {
    backgroundColor: "#7F58FF",
  },
  filterText: {
    fontSize: 14,
    color: "#555",
  },
  activeFilterText: {
    color: "#fff",
  },
});
