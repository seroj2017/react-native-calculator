import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default class ValueFieldComponent extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <View style={[styles.container, this.props.style]}>
        <Text style={styles.textStyle}>{this.props.btnValue}</Text>
      </View>
    )
  }
}

const heightComponent = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2021',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end'
  },
  textStyle: {
    color: '#FCFCFD',
    fontSize: 60
  }
});
