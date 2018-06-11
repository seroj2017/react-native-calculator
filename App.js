import React, { Component } from 'react';
import ValueFieldComponent from './components/ValueFieldComponent';
import KeyboardComponent from './components/KeyboardComponent';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      result: 0,
      valueButton: 0,
      action: ''
    };
  }

  writeValue(val){
    if(this.state.valueButton.toString().match(/(\.)/)){
       this.setState({
        valueButton: this.state.valueButton + val
      });
    }
    else{
      this.setState({
        valueButton: this.state.valueButton == 0 ? val : this.state.valueButton + val
      });
    }
  }

  setAction(action){
      this.setState({
        action: action
      });
  }

  equalValue(action, newAction){
    if(action=='' && newAction){
      this.setState({
        action: newAction,
      });
      return false;
    }
    if(action=='+'){
      let value = (parseFloat(this.state.result) + parseFloat(this.state.valueButton)).toString();
      if(value.match(/(\.)/)){
        return this.setState({
          result: Number(parseFloat(value).toFixed(10)),
          valueButton: 0,
          action: newAction
        });
      }
      this.setState({
        result: parseFloat(value),
        valueButton: 0,
        action: newAction
      });
    }
    if(action=='-'){
      let value = (this.state.result == 0 ? parseFloat(this.state.valueButton) - parseFloat(this.state.result) : parseFloat(this.state.result) - parseFloat(this.state.valueButton)).toString();
      if(value.match(/(\.)/)){
        return this.setState({
          result: Number(parseFloat(value).toFixed(10)),
          valueButton: 0,
          action: newAction
        });
      }
      this.setState({
        result: parseFloat(value),
        valueButton: 0,
        action: newAction
      });
    }
    if(action=='/'){
      let value = (this.state.result == 0 ? parseFloat(this.state.valueButton) + parseFloat(this.state.result) : this.state.valueButton == 0 ? parseFloat(this.state.result) + parseFloat(this.state.valueButton) : parseFloat(this.state.result) / parseFloat(this.state.valueButton)).toString();
      if(value.match(/(\.)/)){
        return this.setState({
          result: Number(parseFloat(value).toFixed(10)),
          valueButton: 0,
          action: newAction
        });
      }
      this.setState({
        result: parseFloat(value),
        valueButton: 0,
        action: newAction
      });
    }
    if(action=='X'){
      let value = (this.state.result == 0 ? parseFloat(this.state.valueButton) + parseFloat(this.state.result) : this.state.valueButton == 0 ? parseFloat(this.state.result) + parseFloat(this.state.valueButton) : parseFloat(this.state.result) * parseFloat(this.state.valueButton)).toString();
      if(value.match(/(\.)/)){
        return this.setState({
          result: Number(parseFloat(value).toFixed(10)),
          valueButton: 0,
          action: newAction
        });
      }
      this.setState({
        result: parseFloat(value),
        valueButton: 0,
        action: newAction
      });
    }
  }

  presss(actionValue){
    if(actionValue == '%'){
      if(this.state.result == 0){
        return this.setState({
          valueButton: (parseFloat(this.state.valueButton) * 1)/100
        })
      }
      else{
        return this.setState({
          valueButton: (parseFloat(this.state.result) * (parseFloat(this.state.valueButton)/100))
        })
      }
    }
    if(actionValue=='C'){
      return this.setState({
        result: 0,
        valueButton: 0,
        action: ''
      });
    }
    if(actionValue=='+/_'){
      let number = parseFloat(this.state.valueButton);
      return this.setState({
        valueButton: number != 0 ? -number : 0
      });
    }
    if(actionValue=='.'){
      if(this.state.valueButton == 0){
        return this.setState({
          valueButton: this.state.valueButton + '.'
        });
      }
      else{
        let isDot = this.state.valueButton.match(/(\.)/);
        return this.setState({
          valueButton: isDot!= null ? this.state.valueButton : this.state.valueButton + '.'
        });
      }
    }
    if(actionValue=='='){
      this.equalValue(this.state.action);
      return this.setState({
        valueButton: 0,
        action: ''
      });
    }
    if(this.state.action){
       return this.equalValue(this.state.action, actionValue);
    }
    if(!this.state.action){
      this.equalValue(actionValue);
    }
    this.setAction(actionValue);
  }

  render() {
    return (
      <View style={styles.container}>
        <ValueFieldComponent btnValue={this.state.valueButton.toString().match(/(\.)/) || this.state.valueButton!=0 ? this.state.valueButton : this.state.result } style={{flex: 1}}/>
        <KeyboardComponent btnPress={(value)=>{ this.presss(value)}} numberBtnPress={(val)=>this.writeValue(val)}style={{flex: 2}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
