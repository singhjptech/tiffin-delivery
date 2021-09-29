import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Catagories from "../components/Catagories";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "./SearchBar";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Catagories />
    </SafeAreaView>
  );
}
