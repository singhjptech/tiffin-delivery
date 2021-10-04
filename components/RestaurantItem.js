import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const localRestaurant = [
  {
    name: "Alabama's All American Eatery",
    image_url:
      "https://s3-media0.fl.yelpcdn.com/bphoto/TV6kxfeK9_PaMvfCIWtl_g/l.jpg",
    categories: ["American", "Breakfast & Brunch"],
    price: "££",
    reviews: 36,
    rating: 4,
  },
  {
    name: "Albert's Schloss",
    image_url:
      "https://s3-media0.fl.yelpcdn.com/bphoto/SyseOZWILJWbcFvB7vronw/o.jpg",
    categories: ["Bars", "German", "Czech"],
    price: "££",
    reviews: 94,
    rating: 4.5,
  },
  {
    name: "Gaucho Grill",
    image_url:
      "https://s3-media0.fl.yelpcdn.com/bphoto/TC4EZmJgtrls3ohJLRzxbg/l.jpg",
    categories: ["Bars", "Argentine", "Steakhouse"],
    price: "££",
    reviews: 81,
    rating: 4.5,
  },
];

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      }}
      style={{
        width: "100%",
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Viet Shack Kitchen
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>4.5</Text>
    </View>
  </View>
);
