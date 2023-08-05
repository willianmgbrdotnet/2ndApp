//
import React from "react"
import { View, Text, TextInput } from "react-native"

export default function Form(){
    return(
        //É o conteúdo que será mostrado. Pode conter outras views
        <View>
            <View>
                
                <Text>Altura</Text>
                <TextInput
                placeholder="Ex. 1.72"
                keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                placeholder="Ex. 79.455"
                keyboardType="numeric"
                />
            </View>
        </View>
    );
}