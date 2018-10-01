import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';
import Forcast from './Forcast';




export default class Weather extends React.Component {

  
    constructor(props){
        super(props);
        this.state = {
            forcast:{
                main: 'main',
                description: 'description',
                temp: 0
            }
        }
    }

    componentDidUpdate = (prevprops) => {
        if(prevprops.zipCode !== this.props.zipCode){
          this.fetchData()
        }
      }
    
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            forcast: {
              main: json.weather[0].main,
              description: json.weather[0].description,
              temp: json.main.temp
            }
          })
        })
        .catch((error) => {
          console.warn(error);
        });
      }
    
      componentDidMount = () => this.fetchData()

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/bg.png')} style={styles.backdrop}>
                <View style={styles.layout}>
                    <Text style={styles.zipCode}>Zip code is {this.props.zipCode}.</Text>
                    <Forcast {...this.state.forcast} />
                </View>
                <View style={styles.blank}></View>
                </ImageBackground>
            </View>
            
    );
  }
}

const styles = StyleSheet.create({
  container: { paddingTop: 0,
    
  },
  backdrop: {width: '100%', height: '100%'},

  layout:{
    flex : 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    opacity: 0.5,
  },
  zipCode: { 
    color: 'white',
    fontSize : 25,
    opacity: 1,
  },
  blank: {
    flex : 1.5,
    
  },
});