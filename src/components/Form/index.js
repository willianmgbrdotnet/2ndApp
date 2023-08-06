//{state} gerenciar e manipular o estado de uma informação(dado)
import React, {useState} from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultadoIMC from "./ResultadoIMC";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeigth] = React.useState(null)
    const [messageImc, setMessageImc] = useState('Informe sua Altura e o Peso')
    const [imc, setImc] = React.useState(null)
    const [textButton, setTextButton] = useState('Calcular')

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeigth(null)
            setMessageImc('Seu IMC é: ')
            setTextButton('Quer Calcular Novamente?')
            return
        }
        setImc(null)
        setTextButton('Calcular')
        setMessageImc('Informe sua Altura e o Peso')
    }

    return(
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
                onPress={() => validationImc()}
                title="Calcular IMC"/>
            </View>
            {/*Ainda não implementado*/}
            <ResultadoIMC messageResultadoImc={messageImc} resultadoImc={imc}/>
        </View>
    );
}