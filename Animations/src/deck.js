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

      const position = new Animated.ValueXY();
      const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
          // console.log(gesture);
          position.setValue({x: gesture.dx, y: gesture.dy});
        },
        onPanResponderRelease: () => {}
      });
      // this.panResponder = panResponder;
      this.state = {panResponder, position}; //Its seen but not a good practice, creates confusion due to the rule that state should not b updated manually!!
    }

    renderCards(){
        return this.props.data.map(item => {
          return this.props.renderCard(item);
        });
    }

    render(){
      return(
        <Animated.View
        style={this.state.position.getLayout()}
        {...this.state.panResponder.panHandlers}>
          {this.renderCards()}
        </Animated.View>
      );
    }
  }
  export default Deck;
