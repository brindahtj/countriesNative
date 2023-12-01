import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import country from "./reducers/country";

import HomeScreen from "./screens/HomeScreen";
import InfosScreen from "./screens/InfosScreen";
import CountriesScreen from "./screens/CountriesScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const store = configureStore({
  reducer: { country },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = "";

          if (route.name === "Infos") {
            iconName = "info";
          } else if (route.name === "Countries") {
            iconName = "globe";
          }
          return <FontAwesome name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: "#B733D0",
        tabBarInactiveTintColor: "#335561",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Infos" component={InfosScreen} />
      <Tab.Screen name="Countries" component={CountriesScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
