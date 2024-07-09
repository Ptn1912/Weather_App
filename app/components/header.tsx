import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Header=()=>{
    return(
     <View style={styles.container}>
        <Text style={styles.title}>天気予報アプリ</Text>
     </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        padding:10
    },
    title: {
        textAlign:'center',
      fontSize:25,
      fontWeight:'bold'
    },
  });
  
export default Header;