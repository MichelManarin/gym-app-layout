import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function BottomNav({ navigation }: { navigation: any }) {
  const route = useRoute();

  const activeColor = "#7F58FF";
  const inactiveColor = "#6A6A6A";

  const isActiveRoute = (path: string) => route.name === path;

  const onPressMenu = (path: string) => {
    navigation.navigate(path);
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => onPressMenu("Home")}>
          <Ionicons
            name="home-outline"
            size={24}
            color={isActiveRoute("Home") ? activeColor : inactiveColor}
          />
          <Text
            style={[
              styles.navLabel,
              { color: isActiveRoute("Home") ? activeColor : inactiveColor },
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => onPressMenu("Scanner")}>
          <Ionicons
            name="scan-outline"
            size={24}
            color={isActiveRoute("Scanner") ? activeColor : inactiveColor}
          />
          <Text
            style={[
              styles.navLabel,
              { color: isActiveRoute("Scanner") ? activeColor : inactiveColor },
            ]}
          >
            Scanner
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => onPressMenu("Stats")}>
          <Ionicons
            name="pie-chart-outline"
            size={24}
            color={isActiveRoute("Stats") ? activeColor : inactiveColor}
          />
          <Text
            style={[
              styles.navLabel,
              { color: isActiveRoute("Stats") ? activeColor : inactiveColor },
            ]}
          >
            Stats
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => onPressMenu("Diary")}>
          <Ionicons
            name="calendar-outline"
            size={24}
            color={isActiveRoute("Diary") ? activeColor : inactiveColor}
          />
          <Text
            style={[
              styles.navLabel,
              { color: isActiveRoute("Diary") ? activeColor : inactiveColor },
            ]}
          >
            Diário
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => onPressMenu("Config")}>
          <Ionicons
            name="settings-outline"
            size={24}
            color={isActiveRoute("Config") ? activeColor : inactiveColor}
          />
          <Text
            style={[
              styles.navLabel,
              { color: isActiveRoute("Config") ? activeColor : inactiveColor },
            ]}
          >
            Config
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNav: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingVertical: 8,
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
  },
  navLabel: {
    fontSize: 10,
    color: "#6A6A6A",
    marginTop: 4,
  },
});
