'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router =  useRouter()
  const [name, setName]=useState("Sajid")
  const [age, setAge] = useState(25)

const updateInfo = () => {
  setName("Azhad")
  setAge(23)
}

// path passes by parameter
const navigate = (path) => {
    router.push(path)
}

  return (
    <main>
      <h1>Homeome Page</h1>
      <h1>Events, Function and State {name}</h1> 
      <button onClick={()=> updateInfo( )}>Update state</button>
      <br/>
     <Link href="/login">Go to Login</Link>
     <br/>
     <Link href="/about">Go to About</Link>
     <br/>
     <br/>
     <button onClick={() => navigate('/about')}>Got To About</button> 
     <br/>
     <button onClick={() => router.push('/about')}>Got To Login</button> 
    </main>
  );
}


// const User = (props) => {
//   const {name,age,updateInfo}=props
//   return(
//     <div>
//       <h2>User name is {name} and Age is {age}</h2>
//        <button onClick={updateInfo}>Update Info</button>
//     </div>
//   )
// }
