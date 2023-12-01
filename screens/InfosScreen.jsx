import { Text, View, Image, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addResearch } from "../reducers/country";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function InfosScreen() {
  const [dataCountry, setDataCountry] = useState([]);
  const dispatch = useDispatch();
  const date = new Date();
  const year = date.getFullYear();
  const api_key_countries = process.env.NEXT_PUBLIC_API_KEY_COUNTRIES;
  const addCountryToStore = () => {
    dispatch(
      addResearch({
        img: dataCountry[0].flags.png,
        name: dataCountry[0].name.common,
      })
    );
  };
  const country = useSelector((state) => state.country.value);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country.country}`)
      .then((response) => response.json())
      .then((data1) => {
        setDataCountry(data1);
        addCountryToStore();
      });
  }, []);

  console.log(country);

  const pays = dataCountry.map((data, i) => {
    return (
      <View style={style.container} key={i}>
        <View style={style.background}>
          <Image
            style={style.img}
            source={{
              uri: data.flags.png,
            }}
          />

          <View>
            <Text style={style.title}>{data.name.common}</Text>
            <View style={style.form}>
              <FontAwesome name="map" size={30} style={style.margin} />
              <Text style={style.text}>{data.region}</Text>
            </View>
            <View style={style.form}>
              <FontAwesome name="users" size={30} />
              <Text style={style.text}>
                {Math.trunc(data.population / 1000000)} million(s)
              </Text>
            </View>
            <View style={style.form}>
              <FontAwesome name="commenting" size={30} />
              <Text style={style.text}>{Object.values(data.languages)[0]}</Text>
            </View>
            <View style={style.form}>
              <FontAwesome name="bitcoin" size={30} />
              <Text style={style.text}>
                {Object.values(data.currencies)[0].name}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  });
  return pays;
}

style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    marginLeft: 15,
    marginTop: 5,
  },
  background: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 30,
    borderRadius: 15,
  },
  img: {
    width: 250,
    height: 150,
    marginLeft: 5,
  },
  form: {
    flexDirection: "row",
    marginLeft: 20,
  },
});
