import React, { Component } from 'react';
import { View,
  Text,
  Animated,
  PanResponder,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

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

    getCardStyle(){
      const { position } = this.state;

      const rotate = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH * 1.5, 0 ,SCREEN_WIDTH * 1.5],
        outputRange: ['-120deg', '0deg', '120deg']
      });

      return{
        ...this.state.position.getLayout(),
        transform: [{rotate}]
      };
    }
    renderCards(){
        return this.props.data.map((item, index) => {
          if (index === 0){
            return(
              <Animated.View
              key = {item.id}
              style={this.getCardStyle()}
              {...this.state.panResponder.panHandlers}
              >
                {this.props.renderCard(item)}
              </Animated.View>
            )
          }
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
