//{state} gerenciar e manipular o estado de uma informação(dado)
import React, { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultadoIMC from "./ResultadoIMC";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeigth] = React.useState(null)
    const [messageImc, setMessageImc] = useState('Informe sua Altura e o Peso')
    const [imc, setImc] = React.useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [classificacaoImc, setClassificacaoImc] = useState(null)

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2))
        //return setImc(20)
    }

    //Tentando implementar a Classificação de IMC
    //As funções set estão apenas atualizando o estado (setState) das variáveis"setVariavel('value')", 
    //e não atribuindo um novo valor diretamente à variável "setVariavel= 'value'". 


    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeigth(null)
            setMessageImc('Seu IMC é: ')
            classificarImc()
            setTextButton('Quer Calcular Novamente?')
            return
        }
        setClassificacaoImc(null)
        setImc(null)
        setTextButton('Calcular')
        setMessageImc('Informe sua Altura e o Peso')
    }

    function classificarImc() {
        if (imc < 18.5) {
            setClassificacaoImc('Magresa');
        } else if (imc <= 24.9) {
            setClassificacaoImc('Normal');
        } else if (imc <= 29.9) {
            setClassificacaoImc('Sobrepeso');
        } else if (imc <= 34.9) {
            setClassificacaoImc('Obesidade grau I');
        } else if (imc <= 39.9) {
            setClassificacaoImc('Obesidade grau II');
        } else {
            setClassificacaoImc('Obesidade grau III');
        }
    }

    return (
        //É o conteúdo que será mostrado. Pode conter outras views
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.72"
                    keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeigth}
                    value={weight}
                    placeholder="Ex. 79.455"
                    keyboardType="numeric"
                />
                <Button
                    title="Calcular IMC"
                    onPress={() => validationImc()}/>
            </View>
            {/*Valores que serão mostrados após o Cálculo do IMC*/}
            <ResultadoIMC messageResultadoImc={messageImc} resultadoImc={imc} classificacaoObesidade={classificacaoImc}/>
        </View>
    );
}