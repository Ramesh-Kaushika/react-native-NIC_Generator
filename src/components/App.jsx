import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native';
import ButtonCom from './Button/ButtonCom';
import { Text, Button } from 'react-native-paper';
import TextCom from './TextField/TextCom';
import { Icon, MD3Colors } from 'react-native-paper';
import AvatarCom from './Avatar/AvatarCom';
import SplashScreen from 'react-native-splash-screen';



function App() {

  

  useEffect(() => {
    SplashScreen.hide()
  }, [])


  const [age, setAge] = useState('')
  const [birth, setBirth] = useState('')
  const [gender, setGender] = useState('')

  const [text, setText] = useState('');

  const getNICInfo = () => {

    console.log(text);

    const { validateNumber, getBirthYear, getGender } = require('nic-no-sri-lanka');
    setGender(getGender(text));
    setBirth(getBirthYear(text));

    const today = new Date();

    const year = today.getFullYear();

    const str = getBirthYear(text);


    let text2 = str.substring(14);


    const now = year - text2;

    setAge(now);
  }

  


  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
          },
        ]}>
      

          <ScrollView style={{flex: 1}}>  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
              <Text style={{ color: 'white', marginTop: 50, fontWeight: 'bold' }} variant="displaySmall">NIC Generator</Text>
              <AvatarCom />
            </View>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', }}>
              <TextCom onChangeText={(val) => setText(val)} value={text} />
              <ButtonCom onPress={() => (getNICInfo())} />
            </View>
            <View style={{ flex: 3, }}>
              <View style={styles.icon} >
                <Icon
                  source="account"
                  color={MD3Colors.error50}
                  size={40}
                />
                <Text style={{ color: 'white', paddingLeft: 10, }} variant="headlineLarge">Nic -: {text} </Text>
              </View>
              <View style={styles.icon} >
                <Icon
                  source="calendar-today"
                  color={MD3Colors.error50}
                  size={40}
                />
                <Text style={{ color: 'white', paddingLeft: 10, }} variant="headlineLarge">Birth of Date -: {birth}</Text>
              </View>
              <View style={styles.icon} >
                <Icon
                  source="face-agent"
                  color={MD3Colors.error50}
                  size={40}
                />
                <Text style={{ color: 'white', paddingLeft: 10, }} variant="headlineLarge">Gender -: {gender}</Text>

              </View>
              <View style={styles.icon} >
                <Icon
                  source="language-swift"
                  color={MD3Colors.error50}
                  size={40}
                />
                <Text style={{ color: 'white', paddingLeft: 10, }} variant="headlineLarge">Age -: {age}</Text>

              </View>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 100, }}>
                <Text style={styles.text} variant="titleLarge">Powerd by | Ramesh</Text>

              </View>

            </View>
          </ScrollView>



        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>

  );
      }

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    color: 'white',


  },
  icon: {
    flexDirection: 'row',
    marginTop: 50,

  },
});

