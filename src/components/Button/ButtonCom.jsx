import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';


const ButtonCom = ({onPress}) => (
    <Button icon="send" mode="contained" onPress={() => onPress()} style={styles.text}
    labelStyle={{fontSize: 20}} >
     SUBMIT
    </Button>
);

export default ButtonCom;

const styles = StyleSheet.create({
    text:{
      
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
})