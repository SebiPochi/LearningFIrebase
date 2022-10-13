import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';
import { Input } from '@rneui/base';
import { Button } from '@rneui/themed';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from '@react-navigation/native'
const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const handleCrearCuenta = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigation.navigate("Home")
        })
        .catch((error) => {
            console.log(error);
          // ..
        });
    }

    const handleIniciarSesion = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigation.navigate("Home")
          // ...
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <View>
            <Text>{email}, {password}</Text>
            <Input 
                placeholder='email'
                value={email}
                onChangeText={setEmail}
            />
            <Input 
                placeholder='password'
                value={password}
                onChangeText={setPassword}
            />
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Button title='Crear Cuenta' onPress={handleCrearCuenta}/>
                <Button title='Iniciar Sesion' onPress={handleIniciarSesion}/>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})