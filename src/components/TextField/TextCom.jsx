
import React from 'react'
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function TextCom({onChangeText,value}) {

    

    return (
        <TextInput
            label="Enter NIC"
            value={value}
            onChangeText={onChangeText}
            style={styles.input}
        />

    )
}

const styles = StyleSheet.create({
    input:{
        fontSize: 30,
                width: 320,
                height: 100,
                margin: 40,
                fontWeight: 'bold'
              
                
    },

})