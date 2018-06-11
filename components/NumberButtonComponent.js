import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

export default class NumberButtonComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TouchableOpacity onPress={()=>this.props.buttonPress(this.props.content)}>
        <View  {...this.props}  style={styles.container}>
          <Text style={styles.textStyle}>{this.props.content}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#848788',
    backgroundColor: '#CED1D4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 50,
    textAlign: 'center'
  }
});

NumberButtonComponent.propTypes = {
  content: PropTypes.string.isRequired
}
