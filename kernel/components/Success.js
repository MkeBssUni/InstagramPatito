import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Overlay, Image } from '@rneui/base'

export default function Success(props) {
    const {show, text} = props;
  return (
    <Overlay
    isVisible={show}
    windowsBackgroundColor= 'rgb(0,0,0,0.5)'
    overlayBackgroundColor='transparent'
    overlayStyle={styles.overlay}
    >
        <View style={styles.container} >
            <Image
            source={{uri:'https://media.giphy.com/media/xeFrOKonlFTHWFCSCs/giphy.gif'}}
            style={styles.gif}
            />

            {text && <Text style={styles.text} >{text}</Text>}
        </View>
    </Overlay>
  )
}

const styles = StyleSheet.create({
    overlay:{
        height:160,
        width:250,
        backgroundColor:'#fff',
        borderColor:'#fff',
        borderWidth:2,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color: 'green',
        textTransform: 'uppercase',
        marginTop: 10,
        textAlign: 'center',
    },
    gif:{
        width:100,
        height:100,
    }
})