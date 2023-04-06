 import {useRef, useState } from "react";
import { signup,login,logout,useAuth } from "./firebase";
 function App() {
  const[loading,setLoading]=useState(false)
  const currentUser=useAuth()
  const emailRef=useRef()
  const passwordRef=useRef()

  async function handleSignup(){
    setLoading(true)
    await signup(emailRef.current.value,passwordRef.current.value)
    setLoading(false)
  }
  async function handleLogin(){
    setLoading(true)
    try{
      await login(emailRef.current.value,passwordRef.current.value)
      setLoading(false)
    }
  catch{
    alert("create account first")
  }

  }
  async function handleLogOut(){
    setLoading(true)
      await logout()
  }

  return (
    <div>
      <center>
        <h4>Current User:{currentUser?.email}</h4>
      <lable>Email:</lable>
      <input type="Email"ref={emailRef} placeholder="Enter Your Email"/>
      <br/><br/> <lable>Password:</lable>
      <input type="password"ref={passwordRef} placeholder="Enter Your password"/>
      <br/><br/>
      <button  disabled={loading||currentUser}onClick={handleSignup}>Sigup</button>
      <button  disabled={loading||currentUser}onClick={ handleLogin} >Login</button>
      <button  disabled={loading || !currentUser}onClick={handleLogOut}>Logout</button>
      </center>

    </div> 

   );
}

export default App;
