
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,getAuth, onAuthStateChanged} from "firebase/auth"
import { useEffect, useState } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyDcdD1YEgTce0V4400Jwgbr_hk20RMhqE4",
  authDomain: "login-56c7d.firebaseapp.com",
  projectId: "login-56c7d",
  storageBucket: "login-56c7d.appspot.com",
  messagingSenderId: "700202001486",
  appId: "1:700202001486:web:8e2ae194310a1a80b98f1f",
  measurementId: "G-LC1QXCW3QJ"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth()

export function signup(email,password){
    return  createUserWithEmailAndPassword(auth,email,password)
}

export function login(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}
export function logout(){
    return signOut(auth)
}

export function useAuth(){
    const [currentUser,setCurrentUser]=useState()
    useEffect(()=>{
        const x=onAuthStateChanged(auth,user=>setCurrentUser(user))
        return x
    },[])
    return currentUser
}