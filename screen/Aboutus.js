import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Aboutus = () => {
    return (
        <View style={styles.container}>
        <View style={styles.rect}>
            <Text style={styles.loremIpsum}>What is Solanumfy?</Text>
            <View style={styles.rect1}>
            <Text style={styles.infoTxt}>
            ✔ Turn your Android phone into a mobile crop doctor.
          </Text>
          <Text style={styles.infoTxt}>
            ✔ With just one photo, Solanumfy diagnosis infected Potato crops and
            offers treatments for disease like EarlyBlight and LateBlight.
          </Text>
          <Text style={styles.infoTxt}>
            ✔ Benefit from agricultural experts' know-how or help fellow
            farmers with your knowledge.
          </Text>
          <Text style={styles.infoTxt}>
            ✔ Early and accurate analysis, identification of plant disease are very helpful in reducing plant disease and improving the quality and quantity of food crop.
          </Text>
          <Text style={styles.infoTxt}>
            ✔ The CNN model automatically learn the features of images with 98.6% accuracy.
          </Text>
          <Text style={styles.infoTxt}>
            ✔ Deep Learning approaches like convolutionary neural network (CNN) can be employed to identify the plant diseases.
          </Text>
          <Text style={styles.loremIpsum1}>
          For queries & more information
          </Text>
          <Text style={styles.infoTxt2}>
          Contact:<Text style={styles.infoTxt1}>
             solanumfyhelp@gmail.com
            </Text>
          </Text>
          
            </View>
            </View>
        </View>
    )
}

export default Aboutus

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#60b49c",
        alignItems: 'center',
        justifyContent: 'center',
      },
      rect: {
        top: 86,
       width: 310,
        height: 600,
        position: 'absolute',
      backgroundColor: 'white',
       left: 24,
      borderRadius: 26,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
          width: 2,
          height: 2
        },
       elevation: 7,
        shadowOpacity: 0.16,
        shadowRadius: 12
      },
      loremIpsum: {
        // fontFamily: 'comicneuebold',
        color: '#195F57',
        fontSize: 26,
        marginTop: 19,
        marginLeft: 34,
        // textAlign:'center',
      },
      loremIpsum1: {
        // fontFamily: 'comicneuebold',
        color: '#195F57',
        fontSize: 16,
        marginLeft: 14,
        marginTop:34,
        textAlign:'justify',
      },
      rect1: {
        width: 268,
        height: 500,
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 26,
        marginTop: 20,
        marginLeft: 20,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
          width: 1,
          height: 1
        },
        elevation: 5,
        shadowOpacity: 0.16,
        shadowRadius: 10
      },
      infoTxt: {
        // fontFamily: 'comicneuebold',
        color: '#195F57',
        top: 15,
        left: 14,
        width: 220,
        paddingTop: 5,
        textAlign: 'justify',
        
        
      },
      infoTxt2: {
        // fontFamily: 'comicneuebold',
        color: '#195F57',
        top: 0,
        left: 16,
        width: 220,
        paddingTop: 5,
        textAlign: 'justify',
      },
      infoTxt1: {
        // fontFamily: 'comicneuebold',
        color: '#195F57',
         top: 0,
        left: 16,
        width: 220,
        // paddingTop: 5,
        textAlign: 'justify',
        fontSize: 12,
      },
})