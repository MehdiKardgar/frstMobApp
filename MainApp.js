/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { useRef ,  useState , useEffect , createContext } from 'react';

import Navigator from './components/stack/Homestack';

// import Homepage from './components/homepage/Homepage';
import Splashscreen from './components/splashscreen/Splashscreen';
import Phone from './components/phone/Phone';

import axios from 'axios';

import { useSelector , useDispatch } from 'react-redux'

import { CONFIRM_SMS_URL } from './components/URL/Urls';

import { getData , removeData , existsData } from './components/AsyncStorage/SecureStorage';

const requestToServerForConfirmSms = async (userInfo) => {
  try {
    let result = await axios({
      method: 'POST',
      url: CONFIRM_SMS_URL,
      headers: {
        'Content-Type': 'application/json'
      },
      data : {
        "phone" : `${userInfo.phoneNumber}`,
        "sms" : `${userInfo.sms}`
      }
    });
    // console.log(result.data);
    return result.data;
  } catch (e) {
    console.log("Error on Request to Server...")
  }
}


const MainApp = () => {

  const theme = useSelector(state => state.ThemeReducer.theme)

  const ThemeContext = createContext(theme);

  const [splash , setSplash] = useState(true);

  const [phoneReady , setPhoneReady]   = useState(false);

  useEffect( () => {
    const doTheJob = async () => {
      // await removeData();
      let userInfo = await getData();
      console.log(userInfo);
      let result = await requestToServerForConfirmSms(userInfo);
      console.log(result);
      if( userInfo && userInfo.phoneNumber && userInfo.sms ) {
          if ( result && result.success == true ) {
            setSplash(false);
            setPhoneReady(true);
            // console.log('1')
          } else {
            setSplash(false);
            setPhoneReady(false);
            // console.log('2')
          }
          
      } else {
        // removeData();
        setSplash(false);
        // console.log('3')
      }
    }
    doTheJob();
    // setTimeout( () => {
    //   setSplash(false);
    // } , 1000)
  } );

  if(splash) {
    return (
      <Splashscreen />
    );
  } else if( phoneReady == false) {
    return (
      <Phone setPhoneReady={setPhoneReady}/>
    );
  } else {
    return (
      <ThemeContext.Provider theme={theme}>
        <Navigator />
      </ThemeContext.Provider>
    );
  }
  
};


export default MainApp;
