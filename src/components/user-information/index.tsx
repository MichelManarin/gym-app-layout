import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Avatar from '../../assets/avatar.png'; 

const { width } = Dimensions.get("window");

export default function TopHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <View>
          <Text style={styles.greetingText}>Olá Michel 👋</Text>
          <Text style={styles.scheduleText}>Verifique suas pendências</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image 
            source={require('../../assets/avatar.png')}
            style={styles.avatar} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: width,
    height: 125, 
    backgroundColor: "#7F58FF", 
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 50, 
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetingText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  scheduleText: {
    fontSize: 16,
    color: "#EEE",
    marginTop: 0,
  },
  avatarContainer: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#FFF", 
    justifyContent: "center",
    alignItems: "center",
    elevation: 3, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
