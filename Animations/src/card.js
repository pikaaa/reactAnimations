import React, { Component } from 'react';
import { View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image } from 'react-native';

class FnBTableCell extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [1],
      detailedData: {
        imagesUri: '',
        deals: 'COUPLE COMBO',
        commodities: '1 Burger+ 1300 ml Coke + 1 Pepsi can + 1 Lays',
        actualPrice: '`300',
        discountedPrice: '`55',
        discountPercent: '10'
      }
    };
  }

  addItem = () => {
    console.log('adding item');
  }

  renderSeparator = () => {
    return(
      <View style={styles.separator}/>
    );
  }
  render(){
    let {deals, commodities, actualPrice, discountPercent,discountedPrice} = this.state.detailedData
    console.log(this.props.imageUri);
    return(
      <View style={{margin: 20}}>
        <View style={styles.cell}>
        <Image source={{uri: this.props.imageUri}} style = {styles.image}/>
        <View style={styles.fnbDetails}>
          <Text style={styles.deals}>{this.props.id}</Text>
          <Text numberOfLines={2} style={styles.commodities}>{commodities}</Text>
          <TouchableOpacity onPress={this.addItem} style={styles.addButton}>
            <View>
              <Text style= {{color: '#0078FF'}}>Add</Text>
            </View>
          </TouchableOpacity>
          <View style= {styles.pricingRow}>
            <Text>{discountedPrice}</Text>
            <Text style={styles.actualPrice}>  {actualPrice}</Text>
            <Text style={styles.discountPercent}> {discountPercent}%off</Text>
          </View>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    // flex: 1,
    height: 120,
    margin: 8
  },
  image: {
    flex: 1,
    margin: 8
  },
  fnbDetails: {
    flex: 3,
    margin: 8,
    // backgroundColor: 'blue'
  },
  separator: {
    backgroundColor: '#F5F5FA',
    height: 2,
    margin: 5
  },
  deals: {
    color: '#999999'
  },
  commodities: {
    // numberOfLines: 2
  },
  pricingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    position: 'absolute',
    // backgroundColor: 'white'
  },
  actualPrice: {
    color: '#999999',
    textDecorationLine: 'line-through',
  },
  discountPercent: {
    color: '#429D1C'
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#0078FF',
    right: 0,
    bottom: 0,
    position: 'absolute',
    marginBottom: 0,
    // position: 'absolute',
    marginRight: 0,
    width: 70,
    height: 27
  }
});
export default FnBTableCell;
