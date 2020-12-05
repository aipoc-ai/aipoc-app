import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.img_container}>
          <Image style={styles.img} source={require('./1169130.png') } />
        </View>
        <View style={styles.heading}>
          <Text style={styles.text}>AIPOC</Text>
          <Text style={styles.offline}></Text>
        </View>
        <View>
          <View style={styles.weather}>
            <Text style={styles.text}>Deep</Text>
            <Text style={styles.time}>Deep</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text:{
    color:'white',
    fontSize:20,
    
  },
  img:{
    height:100,
    width:100,
    borderRadius:100,
  },
  offline:{
    fontSize:20,
    color:'white',
  },
  heading:{
    flexDirection:'row',
    marginTop:-50,
    marginLeft:54,
    
  },
  img_container:{
    marginTop:50,
    marginRight:20,
    alignItems: 'flex-end'
  },
  weather:{

    marginTop: 150,
    marginLeft:54,
    borderColor:'red',
    height:100,
    width:100,
    borderWidth:1,
  },
  time: {
    alignItems: 'flex-end',
    borderColor:'red',

    borderWidth:1,
  }
});
