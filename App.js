import "./App.css";
import React from "react";
import {useState, useEffect} from 'react'
import Products from "./components/Products";
function App() {
   const [data, dataSet] = useState([])

   useEffect(() => {
     async function fetchMyAPI() {
       let response = await fetch('https://fakestoreapi.com/products')
       response = await response.json()
       dataSet(response)
     }
 
     fetchMyAPI()
   }, [])
  return (
   <div>
<Products data={data}/>

      

 
   </div>



  )
}

  
export default App;
  
