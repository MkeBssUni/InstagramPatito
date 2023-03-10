import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Avatar, Image } from "@rneui/base";
import Loading from "../../../../kernel/components/Loading";
import Success from "../../../../kernel/components/Success";
import Error from "../../../../kernel/components/Error";
import Confirmation from "../../../../kernel/components/Confirmation";
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { getAuth, updateProfile } from "firebase/auth";
import * as Imagepicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default function UserLogged(props) {
    const { user } = props;
    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false)  
    const auth = getAuth();
  
    const uploadImage = async (uri) => {
      setShow(true);
      const response = await fetch(uri);
      const { _bodyBlob } = response;
      const storage = getStorage();
      const storageRef = ref(storage, `avatars/${user.uid}`);
      return uploadBytes(storageRef, _bodyBlob);
    };
  
    const uploadPhotoProfile = () => {
      const storage = getStorage();
      getDownloadURL(ref(storage, `avatars/${user.uid}`))
        .then(async (url) => {
          updateProfile(auth.currentUser,{
            photoURL: url
          })
          setShow(false)
          setShowSuccess(true)
          setTimeout(() => {
            setShowSuccess(false)
          }, 2000);
        })
        .catch((err) => {
          setShow(false)
          console.log("Error al obtener la imagen", err);
        });
    };
  
    const changeAvatar = async () => {
      const resultPermission = await Permissions.askAsync(Permissions.CAMERA);
      if (resultPermission.permissions.camera.status !== "denied") {
        let result = await Imagepicker.launchCameraAsync({
          mediaTypes: Imagepicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1, 
        });
        if (!result.canceled) {
          uploadImage(result.assets[0].uri)
            .then((response) => {
              uploadPhotoProfile();
            })
            .catch((err) => {
              console.log("Error al actualizar la imagen", err);
              setShow(false);
              setShowError(true)
              setTimeout(() => {
                setShowError(false)
              }, 2000);
            });
        } else {}
      }
    };
    return (
      <View style={styles.container}>
        {user && (
          <View style={styles.infoContainer}>
          <Avatar
            size={"xlarge"}
            rounded
            source={require("../../../../assets/pic.jpg")}
            containerStyle={styles.avatar}
          >
          </Avatar>
          <View>
            <Text style={styles.displayName}>Spider-Man Negro sis</Text>
            <Text>{user ? user.email : "sin email"}</Text>
          </View>
        </View>
        )}
        <Button
          title="Cerrar sesión"
          buttonStyle={styles.btnLogout}
          onPress={() => setShowConfirmation(true)}
        />
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
        <Loading show={show} text="Actualizando" />
        <Success show={showSuccess} text="Confirmado" />
        <Error show={showError} text="Error" />
        <Confirmation show={showConfirmation} 
          onConfirm={()=> auth.signOut()} 
          onCancel={()=> setShowConfirmation(false)}
        text="¿Estás seguro de cerrar sesión?" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      minHeight: "100%",
      backgroundColor: "white",
    },
    btnLogout: {
      width: "75%",
      borderRadius: 5,
      alignSelf: "center",
      marginVertical: 50,
      backgroundColor: "purple",
    },
    infoContainer: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      paddingVertical: 30,
    },
    avatar: {
      marginRight: 16,
    },
    displayName: {
      fontWeight: "bold",
      paddingBottom: 5,
    },
    imgRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    }
  });
  