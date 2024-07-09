import React, { useState } from "react";
import { View, StyleSheet, Image, TextInput, Dimensions, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import SearchInput from "../components/searchInput";
import WeatherInfo from "../components/weatherInfo";
import { fetchWeather } from "../api/FetchWeather";
import Header from "../components/header";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const API_KEY = 'ff145875c252cf31aa626b0e4bc59207'; 

const Home = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);

  const handleFetchWeather = async () => {
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };
  const getBackGroundImage =() =>{
    if(!weather){
      return require('../../assets/images/night.png')
    }
    return weather.main.temp>20
    ? require('../../assets/images/sun.png')
    : require('../../assets/images/rain.jpg')
  }
  const getIconImage =() =>{
    if(!weather){
      return null
    }
    return weather.main.temp>20
    ? require('../../assets/images/sun2.png')
    : require('../../assets/images/heavyrain.png')
  }
  return (
    <>
    <Header/>
    <View style={styles.background}>
      <Image style={styles.image} source={getBackGroundImage()} />
      <View style={styles.container}>
        <SearchInput city={city} setCity={setCity} fetchWeather={handleFetchWeather} />
        {weather && <WeatherInfo weather={weather} getIconImage={getIconImage} />}
      </View>
    </View>
   </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 2,
    justifyContent: 'flex-start',
    margin:15,
  },
  image: {
    width: width,
    height: height,
    position: 'absolute',
  },
});

export default Home;

