import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './App.cs';
import Card from './Card/Card'


class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      cards: [
        {id:1, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:2, nombre:"Insecto 2", texto:"Este es un Insecto"},
        {id:3, nombre:"Insecto 3", texto:"Este es un Insecto"},
        {id:4, nombre:"Insecto 4", texto:"Este es un Insecto"},
        {id:5, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:6, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:7, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:8, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:9, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:10, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:11, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:12, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:13, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:14, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:15, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:16, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:17, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:18, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:19, nombre:"Insecto 1", texto:"Este es un Insecto"},
        {id:20, nombre:"Insecto 1", texto:"Este es un Insecto"},
      ]
    }
  }

  componentWillMount(){
    const CurrentCards = this.state.cards;

    this.setState({
      cards: CurrentCards,
      CurrentCard = this.getRandomCard(CurrentCards)
    })
  }

  getRandomCard(CurrentCards){
    var card = CurrentCards[Math.floor(Math.random() * CurrentCards.length)];
    return card;
  }

  render() {
    return (
      <div className="App">
          <Card texto={this.state.CurrentCard.texto}/>
      </div>
    );
  }
}

export default App;





/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
