import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class Ball extends Component{
  componentDidMount(){
    
  }
  render(){
    return(
      <View style={styles.ball}/>
    );
  }
}

const styles=StyleSheet.create({
  container:{

  },
  ball:{
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
});

export default Ball;
