import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WeatherInfo = ({ weather, getIconImage }:Props) => {
  return (
    <View style={styles.weatherContainer}>
      <Image style={styles.imageIcon} source={getIconImage()} />
      <Text style={styles.cityName}>{weather.name}</Text>
      <Text style={styles.temperature}>{weather.main.temp}°C</Text>
      <Text style={styles.weatherDescription}>{weather.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  imageIcon: {
    width: 150,
    height: 150,
  },
  cityName: {
    fontSize: 30,
    color: '#fff',
  },
  temperature: {
    fontWeight: 'bold',
    fontSize: 48,
    color: '#fff',
  },
  weatherDescription: {
    fontSize:25,
    color: '#fff',
  },
});

export default WeatherInfo;
