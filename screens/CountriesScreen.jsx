import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function CountriesScreen() {
  const countries = useSelector((state) => state.country.value);

  console.log(countries);
  const arr = countries.lastCountries.map((country, i) => {
    return (
      <View key={i} style={style.placeCard}>
        <View style={style.jc}>
          <Image
            style={style.img}
            source={{
              uri: country.img,
            }}
          />
          <Text style={style.name}>{country.name}</Text>
        </View>
        <FontAwesome
          name="trash-o"
          style={style.icon}
          onPress={() => handlePressRemove(country.nameCity)}
        />
      </View>
    );
  });
  return (
    <View style={style.container}>
      <Text style={style.title}>Last Research</Text>

      <ScrollView contentContainerStyle={style.scrollView}>{arr}</ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: { fontSize: 30 },
  scrollView: {
    alignItems: "center",
    marginTop: 20,
    maxWidth: "100%",
  },
  img: {
    width: 10,
    height: 15,
    objectFit: "cover",
  },
  placeCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  icon: {
    color: "#B733D0",
    fontSize: 23,
  },
  jc: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
});
