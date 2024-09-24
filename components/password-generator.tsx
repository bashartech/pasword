
import { useState } from 'react';
import React from 'react'


export default function passwordGenerator() {

    const [password, setPassword] = useState("")
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "1234567890"
    const specialChar = "§$&?ß#"
    const allCharac = upperCase + lowerCase + specialChar
    
    const createPassword = () =>{
        let password = ""
        password += numbers[Math.floor(Math.random()* numbers.length )]
        password += upperCase[Math.floor(Math.random()* upperCase.length )]
        password += lowerCase[Math.floor(Math.random()* lowerCase.length )]
        password += specialChar[Math.floor(Math.random()* specialChar.length )]
        password += numbers[Math.floor(Math.random()* numbers.length )]
        password += specialChar[Math.floor(Math.random()* specialChar.length )]
        password += lowerCase[Math.floor(Math.random()* lowerCase.length )]
        password += numbers[Math.floor(Math.random()* numbers.length )]
        setPassword(password)
    }
    const copyPassword = () => {
        if(password){
            navigator.clipboard.writeText(password)
            .then(()=>{
                alert("Password copied to clipboard!")
            })
            .catch((err)=>{
                console.log("Failed to copy", err)
            })
        }

    }


  return (
    <div>
         <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
       <div className="main">
      <div className="passwordGenerator">
        <h1>Generate a</h1>
        <span><h1>Random Password</h1></span>
        <div className="input">
          <input type="text" id="password" placeholder="Password" value={password} />
          <i className="fa-regular fa-copy" 
        onClick={copyPassword}
          ></i>
        </div>
        <button
          onClick={createPassword}
        >
          <i className="fa-solid fa-bolt" ></i> Generate Password
        </button>
      </div>
    </div>
    </div>
  )
}
