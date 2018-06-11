import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ButtonComponent from './ButtonComponent';
import NumberButtonComponent from './NumberButtonComponent';



export default class KeyboardComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  onLayout = (e) => {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
      x: e.nativeEvent.layout.x,
      y: e.nativeEvent.layout.y
    })
  }

  buttonPress(btnValue){
    this.props.btnPress(btnValue);
  }

  numberPress(number){
    this.props.numberBtnPress(number);
  }

  render(){
    let this_height = Dimensions.get('window').height * 2/3
    let this_width = Dimensions.get('window').width

    let width_ =  this_width/4
    let height_ =  this_height/5

    return(
      <View style={[styles.keyboardStyle, this.props.style]}>
        <ButtonComponent content='C' height={height_} width={width_} pressButton={(valueButton)=> this.buttonPress(valueButton)}/>
        <ButtonComponent content='+/_' height={height_} width={width_} pressButton={(valueButton)=> this.buttonPress(valueButton)}/>
        <ButtonComponent content='%' height={height_} width={width_} pressButton={(valueButton)=> this.buttonPress(valueButton)}/>
        <ButtonComponent content='/' bgColor='#E79237' height={height_} width={width_} pressButton={(valueButton)=> this.buttonPress(valueButton)}/>
        <NumberButtonComponent content='7' height={height_} width={width_} buttonPress={(valueButton)=> this.numberPress(valueButton)}/>
        <NumberButtonComponent content='8' height={height_} width={width_} buttonPress={(valueButton)=> this.numberPress(valueButton)}/>
        <NumberButtonComponent content='9' height={height_} width={width_} buttonPress={(valueButton)=> this.numberPress(valueButton)}/>
        <ButtonComponent content='X' bgColor='#E79237' height={height_} width={width_} pressButton={(valueButton)=> this.buttonPress(valueButton)}/>
        <NumberButtonComponent content='4' height={height_} width={width_} buttonPress={(valueButton)=> this.numberPress(valueButton)}/>
        <NumberButtonComponent content='5' height={height_} width={width_} buttonPress={(valueButton)=> this.numberPress(valueButton)}/>
        <NumberButtonComponent content='6' height={height_} width={width_} buttonPress={(valueButton)=> this.numberPress(valueButton)}/>
        <ButtonComponent content='-' bgColor='#E79237' height={height_} width={width_} pressButton={(valueButton)=> this.buttonPress(valueButton)}/>
        <NumberButtonComponent content='1' height={height_} width={width_} buttonPress={(valueButton)=> this.numberPress(valueButton)}/>
        <NumberButtonComponent content='2' height={height_} width={width_} buttonPress={(valueButton)=> this.numberPress(valueButton)}/>
        <NumberButtonComponent content='3' height={height_} width={width_} buttonPress={(valueButton)=> this.numberPress(valueButton)}/>
        <ButtonComponent content='+' bgColor='#E79237' height={height_} width={width_} pressButton={(valueButton)=> this.buttonPress(valueButton)}/>
        <NumberButtonComponent content='0' height={height_} width={2*width_} buttonPress={(valueButton)=> this.numberPress(valueButton)}/>
        <ButtonComponent content='.' height={height_} width={width_} pressButton={(valueButton)=> this.buttonPress(valueButton)}/>
        <ButtonComponent content='=' bgColor='#E79237' height={height_} width={width_} pressButton={(valueButton)=> this.buttonPress(valueButton)}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  keyboardStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
