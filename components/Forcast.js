import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class Forcast extends React.Component{
    render(){
        return(
            <View >
                    <Text style={styles.main}>{this.props.main}</Text>
                    <Text style={styles.description}>{this.props.description}</Text>
                    <Text style={styles.temp}>{this.props.temp}°C</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: { 
      color: '#fff',
      fontSize : 40,
      opacity: 1,
    },
    description: { 
        color: '#fff',
        fontSize : 25,
        opacity: 1,
      },
      temp: { 
        color: '#fff',
        fontSize : 40,
        opacity:1,
      },
  });