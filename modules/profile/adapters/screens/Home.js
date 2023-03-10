import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Button, Avatar, Image } from "@rneui/base";
import Loading from "../../../../kernel/components/Loading";

export default function Home(props) {
const auth = getAuth();
  
  const [user, setUser] = useState(null);
  const [session, setSession]= useState(null);
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (credential)=>{
      setUser(credential);
      !credential ? setSession(false) : setSession(true);
    });
  }, [])

  if(session === null) return <Loading show={true} text="Cargando"/>
  return session ? (
        <View style={styles.container}>
            <View style={styles.stories}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView} >
            <View style={styles.rowStories}>
            <Avatar
                size={"large"}
                rounded
                source={require("../../../../assets/pic.jpg")}
                containerStyle={styles.avatar}>
              </Avatar>
            <Avatar
                size={"large"}
                rounded
                source={require("../../../../assets/pic.jpg")}
                containerStyle={styles.avatar}>
              </Avatar>
            <Avatar
                size={"large"}
                rounded
                source={require("../../../../assets/pic.jpg")}
                containerStyle={styles.avatar}>
              </Avatar>
            <Avatar
                size={"large"}
                rounded
                source={require("../../../../assets/pic.jpg")}
                containerStyle={styles.avatar}>
              </Avatar>
            <Avatar
                size={"large"}
                rounded
                source={require("../../../../assets/pic.jpg")}
                containerStyle={styles.avatar}>
              </Avatar>
            <Avatar
                size={"large"}
                rounded
                source={require("../../../../assets/pic.jpg")}
                containerStyle={styles.avatar}>
              </Avatar>
            </View>
            </ScrollView>
            </View>
            <View style={styles.publication}>
                <View style={styles.publicationHeader}>
                    <View style={styles.publicationHeaderLeft}>
                        <Avatar
                            size={"medium"}
                            rounded
                            source={require("../../../../assets/pic2.webp")}
                            containerStyle={styles.avatar}>
                        </Avatar>
                        <Text style={styles.publicationHeaderLeftText}>@UserWuuuu</Text>
                    </View>
                </View>
                <View style={styles.imgPublication}>
                    <Image
                        source={require("../../../../assets/pic2.webp")}
                        style={{width: "100%", height: 400}}
                    />
                </View>
                <View style={styles.caption}>
                    <Text>Un gran poder, conlleva una gran responsabilidad</Text>
                </View>
            </View>
        </View>
  ): (
    <View style={styles.IniciaSesion}>
        <Text>INICIA SESIÓN</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        minHeight: "100%",
        backgroundColor: "white",
      },
    stories: {
        height: 110
    },
    scrollView: {
        marginVertical: 10,
    },
    rowStories: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    avatar: {
        marginHorizontal: 10,
    },
    publication: {
        marginVertical: 10,
    },
    publicationHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    publicationHeaderLeft: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    publicationHeaderLeftText: {
        marginHorizontal: 10,
        fontWeight: "bold",
    },
    imgPublication: {
        marginHorizontal: 10,
    },
    caption: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    IniciaSesion: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})