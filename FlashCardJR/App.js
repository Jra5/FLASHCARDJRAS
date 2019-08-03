import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './App.cs';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';


class App extends Component{

  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
        {id:1, nombre:"Abeja", texto:"", imagen:require('./imagenes/Abeja.jpg') },
        {id:2, nombre:"Araña", texto:"", imagen:require('./imagenes/Araña.jpg') },
        {id:3, nombre:"Avispa", texto:"", imagen:require('./imagenes/Avispa.jpg') },
        {id:4, nombre:"Caracol", texto:"", imagen:require('./imagenes/Caracol.jpg') },
        {id:5, nombre:"Cucaracha", texto:"", imagen:require('./imagenes/Cucaracha.jpg')},
        {id:6, nombre:"Escarabajo", texto:"", imagen:require('./imagenes/Escarabajo.jpg')},
        {id:7, nombre:"Grillo", texto:"", imagen:require('./imagenes/Grillo.jpg')},
        {id:8, nombre:"Hormiga", texto:"", imagen:require('./imagenes/Hormiga.jpg')},
        {id:9, nombre:"Libelula", texto:"", imagen:require('./imagenes/Libelula.jpg')},
        {id:10, nombre:"Mantis", texto:"", imagen:require('./imagenes/Mantis.jpg')},
        {id:11, nombre:"Mariposa Monarca", texto:"", imagen:require('./Mariposa Monarca/Abeja.jpg')},
        {id:12, nombre:"Mariposa", texto:"", imagen:require('./imagenes/Mariposa.jpg')},
        {id:13, nombre:"Mariquita", texto:"", imagen:require('./imagenes/Mariquita.jpg')},
        {id:14, nombre:"Milpiés", texto:"", imagen:require('./imagenes/Milpiés.jpg')},
        {id:15, nombre:"Mosca", texto:"", imagen:require('./imagenes/Mosca.jpg')},
        {id:16, nombre:"Oruga", texto:"", imagen:require('./imagenes/Oruga.jpg')},
        {id:17, nombre:"Polilla Búho", texto:"", imagen:require('./imagenes/Polilla Búho.jpg')},
        {id:18, nombre:"Polilla Luna", texto:"", imagen:require('./imagenes/Polilla Luna')},
        {id:19, nombre:"Saltamontes", texto:"", imagen:require('./imagenes/Saltamontes.jpg')},
        {id:20, nombre:"Zapatero", texto:"", imagen:require('./imagenes/Zapatero.jpg')},
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

  updateCard(){
    const CurrentCards = this.state.cards;

    this.setState({
      CurrentCard: this.getRandomCard(CurrentCards)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card 
            texto={this.state.CurrentCard.texto}
            nombre={this.state.CurrentCard.nombre}
            imagen={this.state.imagen}
           />
        </div>

        <div className="BtnnRow">
         <DrawButton drawCard = {this.updateCard} />
        </div>
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
