import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './App.css';
import Card from './src/Card/Card';
import DrawButton from './src/DrawButton/DrawButton';


class App extends Component{

  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
        {id:1, nombre:"Abeja", texto:"lcbjksdbckjsdbvkjfdbv", imagen:require('./src/imagenes/Abeja.jpg') },
        {id:2, nombre:"Araña", texto:"", imagen:require('./src/imagenes/Araña.jpg') },
        {id:3, nombre:"Avispa", texto:"", imagen:require('./src/imagenes/Avispa.jpg') },
        {id:4, nombre:"Caracol", texto:"", imagen:require('./src/imagenes/Caracol.jpg') },
        {id:5, nombre:"Cucaracha", texto:"", imagen:require('./src/imagenes/Cucarachas.jpg')},
        {id:6, nombre:"Escarabajo", texto:"", imagen:require('./src/imagenes/Escarabajo.jpg')},
        {id:7, nombre:"Grillo", texto:"", imagen:require('./src/imagenes/Grillos.jpg')},
        {id:8, nombre:"Hormiga", texto:"", imagen:require('./src/imagenes/Hormiga.jpg')},
        {id:9, nombre:"Libelula", texto:"", imagen:require('./src/imagenes/Libelula.jpg')},
        {id:10, nombre:"Mantis", texto:"", imagen:require('./src/imagenes/Mantis.jpg')},
        {id:11, nombre:"Mariposa Monarca", texto:"", imagen:require('./src/imagenes/Mariposa Monarca.jpg')},
        {id:12, nombre:"Mariposa", texto:"", imagen:require('./src/imagenes/Mariposa.jpg')},
        {id:13, nombre:"Mariquita", texto:"", imagen:require('./src/imagenes/Mariquita.jpg')},
        {id:14, nombre:"Milpiés", texto:"", imagen:require('./src/imagenes/Milpiés.jpg')},
        {id:15, nombre:"Mosca", texto:"", imagen:require('./src/imagenes/Mosca.jpg')},
        {id:16, nombre:"Oruga", texto:"", imagen:require('./src/imagenes/Oruga.jpg')},
        {id:17, nombre:"Polilla Búho", texto:"", imagen:require('./src/imagenes/Polilla Búho.jpg')},
        {id:18, nombre:"Polilla Luna", texto:"", imagen:require('./src/imagenes/Polilla Luna.jpg')},
        {id:19, nombre:"Saltamontes", texto:"", imagen:require('./src/imagenes/Saltamontes.jpg')},
        {id:20, nombre:"Zapatero", texto:"", imagen:require('./src/imagenes/Zapatero.jpg')},
      ]
    }
  }

  componentWillMount(){
    const CurrentCards = this.state.cards;

    this.setState({
      cards: CurrentCards,
      CurrentCard : this.getRandomCard(CurrentCards)
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
      <View style={styles.container}>
        <Text> Hola Mundo </Text>
        <View className="cardRow">
          <Card 
            texto={this.state.CurrentCard.texto}
            nombre={this.state.CurrentCard.nombre}
            imagen={this.state.imagen}
           />
        </View>

        <View className="BtnnRow">
         <DrawButton drawCard = {this.updateCard} />
        </View>
      </View>
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
