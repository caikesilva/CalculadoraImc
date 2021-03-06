import React, { useState } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import styled from 'styled-components';

const Pagina = styled.SafeAreaView`
  background-color: #ffffff;
  flex: 1;
  align-items: center;
`;

const Cabecalho = styled.Text`
  padding-top: 15px;
  font-family: 'Times New Roman';
  font-weight: bold;
  color: #1ED789;
  font-size: 40px;
  padding-bottom: 30px;
`;

const AreaInput = styled.SafeAreaView`
  padding: 5px;
  align-items: flex-start;
  flex-direction: row;
`;

const TextoLabel = styled.Text`
  font-family: 'Times New Roman';
  font-weight: bold;
  color: #1ED789;
  font-size: 30px;
`;

const TextoSimpes = styled.Text`
  font-family: 'Times New Roman';
  font-weight: normal;
  color: #C3C0C0;
  font-size: 25px;
`
const TextoResultado = styled.Text`
  font-family: 'Times New Roman';
  font-weight: normal;
  color: ${(props) => props.cor};
  font-size: 50px;
  text-align: center;
`

const Espaco = styled.SafeAreaView`
  height: 20px;
`

const AreaResultado = styled.SafeAreaView`
  width: 90%;
  height: 300px;
  background-color: #FEFBFB;
  border: 0.8px;
  border-radius: 25px;
  align-items: center;
`


const Input = styled.TextInput`
  width: 65%;
  height: 50px;
  font-size: 20px;
  background-color: #FEFBFB;
  border: 1px solid;
  padding: 11px;
  border-radius: 20px;
`

const Botao = styled.Button`
`

export default () => {
  const [peso, alterarPeso] = useState(0);
  const [altura, alteraAltura] = useState(0);
  const [resultado, alteraResultado] = useState(0);

  return (
    <Pagina>
      <Cabecalho>Calculadora IMC</Cabecalho>
      <AreaInput>
        <TextoLabel>Peso:  </TextoLabel> 
        <Input keyboardType='numeric' onChangeText={(peso) => alterarPeso(peso)}/>
      </AreaInput>
      <AreaInput>
        <TextoLabel>Altura: </TextoLabel>
        <Input keyboardType='numeric' onChangeText={(altura) => alteraAltura(altura)}/>
      </AreaInput>
      <Espaco/>
      <Botao title="Calcular" onPress={() => alteraResultado(parseFloat(peso) / Math.pow(parseFloat(altura), 2))}/>
      <Espaco/>
      {resultado > 0 &&<TextoLabel>Resultado</TextoLabel>}
      <Espaco/>    
      { resultado > 0 &&
        <AreaResultado>
          <TextoSimpes>Você está com </TextoSimpes>
          <Espaco/>
          {resultado < 18.5 && <TextoResultado cor="red">Magreza</TextoResultado>}
          {resultado > 18.5 && resultado < 24.9 && <TextoResultado cor="green">Peso Normal</TextoResultado>} 
          {resultado > 24.9 && resultado < 29.9 && <TextoResultado cor="yellow">Sobrepeso</TextoResultado>}
          {resultado > 29.9 && resultado < 39.9 && <TextoResultado cor="orange">Obesidade</TextoResultado>}                       
          {resultado > 39.9 && <TextoResultado cor="black">Obesidade Grave</TextoResultado>}
          <Espaco/>
          <TextoSimpes>IMC</TextoSimpes>
          <Espaco/>
          <TextoLabel>{resultado.toFixed(2)}</TextoLabel>
        </AreaResultado>
      }
      
    </Pagina>
  )
}