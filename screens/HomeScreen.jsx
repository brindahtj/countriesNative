import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { addCountry } from "../reducers/country";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  const [country, setCountry] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const handleCountry = () => {
    if (country.length === 0 || !country.trim()) {
      setErrorMsg("Please enter a country !");
      return;
    }
    dispatch(addCountry(country));
    setErrorMsg("");
    navigation.navigate("TabNavigator", { screen: "Infos" });
  };
  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      enabled={true}
    >
      <Image style={style.img} source={require("../assets/flags.png")} />
      <Image style={style.fond} source={require("../assets/fond.jpeg")} />
      <Text style={style.title}> COUNTRIES</Text>
      <View style={style.background}>
        <TextInput
          style={style.input}
          onChangeText={(value) => setCountry(value)}
          placeholder="Search a country"
          value={country}
        />
        <TouchableOpacity style={style.button} onPress={() => handleCountry()}>
          <Text style={style.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 10,
    width: 300,
  },
  text: { color: "white" },
  input: {
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderRadius: 15,
    width: 300,
  },
  background: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -15,
    objectFit: "cover",
  },
  fond: {
    position: "absolute",
    opacity: 0.6,
    width: "100%",
    height: "100%",
    zIndex: -10,
  },
  title: {
    fontSize: 50,
    color: "white",
  },
});
