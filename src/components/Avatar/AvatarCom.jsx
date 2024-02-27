import { View, Text } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';

export default function AvatarCom() {
  return (
    <Avatar.Image size={100} source={require('/Users/rameshkaushika/Desktop/React-N/AppleExp/src/components/Avatar/assets/334761993_228856212921885_6334961186959917911_n.jpg')} style={{marginTop: 20}} />
  )
}