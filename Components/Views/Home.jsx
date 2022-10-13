import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';
const Home = () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    useEffect(() => {
        
        getUsers()
    },[])

    const getUsers = async() => {
        const docRef = doc(db, "users", "SF");
        const docSnap = await getDoc(docRef).then((res) => console.log(res));
    }
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})