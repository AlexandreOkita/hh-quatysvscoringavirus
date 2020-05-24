//Importações
import React, { Component } from 'react';

//Importação da biblioteca React-Native-Chatbot
import Bot from 'react-native-chatbot';

//Instruções que o chatbot irá seguir:
const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];

//Exportação da classe Chatbot contendo o nosso component Bot e suas instruções
export default class ChatBot extends Component {
  render() {
    return (
      <Bot steps={steps} />
    );
  }
}