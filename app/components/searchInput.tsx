import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchInput = ({ cityName, setCityName, fetchWeather }:SearchInputProps) => {
  const handleInputChange = (text:string) => {
    const japaneseRegex = /[\u3040-\u30FF\u4E00-\u9FAF\u3400-\u4DBF]/;
    if (japaneseRegex.test(text)) {
      Alert.alert("半角英数で入力してください");
    } else {
      setCityName(text);
    }
  };
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter City"
        value={cityName}
        onChangeText={handleInputChange}
      />
      <TouchableOpacity onPress={fetchWeather}>
        <Ionicons style={styles.icon} name="search" size={24} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 30,
    marginHorizontal: 28,
    padding: 5,
    paddingLeft: 15,
    elevation: 5,
  },
  input: {
    fontSize:17,
    flex: 1,
    padding: 5,
  },
  icon: {
    padding:10,
    borderRadius:20,
    color:'#fff',
    backgroundColor:'#000',
    paddingHorizontal: 10,
  },
});

export default SearchInput;
