import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

export default class ButtonComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TouchableOpacity onPress={()=>this.props.pressButton(this.props.content)}>
        <View  {...this.props}  style={[styles.container, {backgroundColor: this.props.bgColor ? this.props.bgColor : styles.container.backgroundColor}]}>
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
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 50
  }
});

ButtonComponent.propTypes = {
  content: PropTypes.string.isRequired
}
