//Comandos Padrão
import React from "react"
import { View, Text } from "react-native"

//Recebe o resultado do cálculo e retorna segundo a View
export default function ResultadoIMC(props){
    return(
        <View>
            <Text>{props.messageResultadoImc}</Text>
            <Text>{props.resultadoImc}</Text>
            <Text>{props.classificacaoObesidade}</Text>
        </View>
    );
}


//Observação
//Uso de props:
//