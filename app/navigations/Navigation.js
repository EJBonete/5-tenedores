import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import RestaurantStack from "./RestaurantStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

const Tab = createBottomTabNavigator();

export default function navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarInactiveTintColor: "#646464",
          tabBarActiveTintColor: "#00a680",
          tabBarIcon: ({ color }) => screenOption(route, color),
        })}
      >
        <Tab.Screen
          name="restaurants-stack"
          component={RestaurantStack}
          options={{ title: "Restaurante", headerShown: false }}
        />
        <Tab.Screen
          name="favorites-stack"
          component={FavoritesStack}
          options={{ title: " Favoritos", headerShown: false }}
        />
        <Tab.Screen
          name="TopRestaurants-stack"
          component={TopRestaurantsStack}
          options={{ title: " Top5", headerShown: false }}
        />
        <Tab.Screen
          name="search-Stack"
          component={SearchStack}
          options={{ title: "Buscar", headerShown: false }}
        />
        <Tab.Screen
          name="Account-Stack"
          component={AccountStack}
          options={{ title: "Cuenta", headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOption(route, color) {
  let iconName;
  switch (route.name) {
    case "restaurants-stack":
      iconName = "compass-outline";
      break;
    case "favorites-stack":
      iconName = "heart-outline";
      break;
    case "TopRestaurants-stack":
      iconName = "star-outline";
      break;
    case "search-Stack":
      iconName = "magnify";
      break;
    case "Account-Stack":
      iconName = "home-outline";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
