import React from 'react'

import { View , Text , TouchableOpacity , StyleSheet } from 'react-native'
import { windowWidth } from './Dimensions'
import { LalezarRegular } from './Fonts'

export const ActiveButton = ({sex , changeSex}) => {
  return (
    <TouchableOpacity 
      onPress={() => changeSex()}
      style={styles.activebutton}>
      <Text style={styles.activebuttonText}>{
        sex == 'male' ?
        'مرد'
        :
        'زن'
      }</Text>
    </TouchableOpacity>
  )
}


export const DeactiveButton = ({sex , changeSex}) => {
  return (
    <TouchableOpacity 
      onPress={() => changeSex()}
      style={styles.deactivebutton}>
      <Text style={styles.deactivebuttonText}>{
        sex == 'male' ?
        'زن'
        :
        'مرد'
      }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  activebutton : {
    backgroundColor : '#4D7C8A',
    width : windowWidth / 2,
    borderRadius : 55,
    
    justifyContent : 'center',
    alignItems : 'center'
  },
  deactivebutton : {
    backgroundColor : '#CEE0E5',
    width : windowWidth / 4,
    borderRadius : 55,
    
    justifyContent : 'center',
    alignItems : 'center'
  },
  activebuttonText : {
    color : 'white',
    fontFamily : LalezarRegular,
    fontSize : 20,
  },
  deactivebuttonText : {
    color : 'black',
    fontFamily : LalezarRegular,
    fontSize : 20,
  }
});