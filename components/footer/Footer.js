
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import MaterialICon from 'react-native-vector-icons/MaterialIcons';

const Footer = ({ navigation }) => {

  return (
    <>
      <View style={styles.footer}>

        <TouchableOpacity onPress={ () => navigation.navigate('Homepage') }>
          <MaterialICon size={40} color="white" name="home" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={ () => navigation.navigate('Edit') }>
          <MaterialICon size={40} color="white" name="edit" />
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => navigation.navigate('Work') }>
          <MaterialICon size={40} color="white" name="work" />
        </TouchableOpacity>


        <TouchableOpacity onPress={ () => navigation.navigate('Bookmark') }>
          <MaterialICon size={40} color="white" name="bookmark" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={ () => navigation.navigate('Profile') }>
          <MaterialICon size={40} color="white" name="person" />
        </TouchableOpacity>

      </View>
    </>
  );
};


const styles = StyleSheet.create({
  footer : {
    height : 73,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    backgroundColor : '#51344D',
  }
});


export default Footer
