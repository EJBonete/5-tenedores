import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopRestaurant from "../screens/TopRestaurants";

const Stack = createNativeStackNavigator();

export default function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="topRestauran"
        component={TopRestaurant}
        options={{ title: "Top 5" }}
      />
    </Stack.Navigator>
  );
}
