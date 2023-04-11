/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityComponent,
  useColorScheme,
  View,
} from 'react-native';
import Modal from "react-native-modal";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [visible, setVisible] = useState(false);

  const showModal = () => {
     setVisible(true);
  } 
  const hideModal = () => setVisible(false);

  return (
    <SafeAreaView style={styles.ctr}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
        <TouchableOpacity onPress={showModal} style={[styles.btn,{backgroundColor:visible == true ? "#BDBDBD" : "white"}]}>
          <Text style={[styles.text,
             { color:visible == true ? "white" : "black"}]}>Continue</Text>
        </TouchableOpacity>

        <Modal
          isVisible={visible}
          animationIn='slideInUp'
          animationOut='slideOutDown'
          hasBackdrop={false}
          coverScreen={true}
          panResponderThreshold={4}
          onBackdropPress={hideModal}
          onBackButtonPress={hideModal}
          style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={styles.modelfooterCamera}>
            <View style={{ paddingLeft:'3%', paddingRight:'3%' }}>
              <Text style={{
                  color: "black", fontSize:RFPercentage(2.2),fontWeight:"500"
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula ligula sed orci luctus fermentum. Nullam dapinus orci id volutpat scelerisque</Text>
            </View>
          </View>
        </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ctr:{
     flex:1,
     justifyContent:'center',
     backgroundColor:"#EEEEEE"
  },
  btn:{
    marginBottom:"40%",
    padding:15,
    marginLeft:80,
    marginRight:80
  },
  text:{
    fontSize:RFPercentage(2.4),
    fontWeight:"bold",
    textAlign:'center'
  },
  modelfooterCamera: {
    backgroundColor:"#FFFFFF",
    top: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    width:wp('100%'),
    alignSelf:'center',
    paddingTop:hp('2.5%'),
    paddingBottom:hp('2.5%'),
    paddingLeft:hp('2%'),
    elevation: 20,
    shadowColor: 'gray',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
},
});

export default App;
