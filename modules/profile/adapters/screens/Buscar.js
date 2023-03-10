import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, Button, Image, Icon} from "@rneui/base";
import { getAuth } from "firebase/auth";


export default function Buscar() {
  //Validar que el usuario este logueado usando firebase
  const auth = getAuth();
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Input
          placeholder="Buscar"
          leftIcon={{
            type: "material-community",
            name: "magnify",
            color: "#c2c2c2"
          }}
          containerStyle={styles.input}
          keyboardType="default"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.imgRow}>
            <Image 
             source={require("../../../../assets/pic.jpg")}
             style={{width: 100, height: 100, marginHorizontal: 10}}
            />
            <Image 
             source={require("../../../../assets/pic2.webp")}
             style={{width: 100, height: 100, marginHorizontal: 10}}
            />
            <Image 
             source={require("../../../../assets/pic3.webp")}
             style={{width: 100, height: 100, marginHorizontal: 10}}
            />

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: "100%"
  },
  search: {
    marginVertical: 25,
  },
  input: {
    width: "90%",
    alignSelf: "center"
  },
  imgRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    },
})