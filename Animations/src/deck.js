import React, { Component } from 'react';
import { View,
  Text,
  Animated,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  Image } from 'react-native';

  class Deck extends Component{
    constructor(props){
      super(props);
      const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => {},
        onPanResponderMove: (event, gesture) => {
          console.log(gesture);
        },
        onPanResponderRelease: () => {}
      });
      // this.panResponder = panResponder;
      this.state = {panResponder}; //Its seen but not a good practice, creates confusion
    }

    renderCards(){
        return this.props.data.map(item => {
          return this.props.renderCard(item);
        });
    }

    render(){
      return(
        <View>
          {this.renderCards()}
        </View>
      );
    }
  }
  export default Deck;
