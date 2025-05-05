import React from 'react'
 import './Home.css'
 import axios from "../axios-config"
 
 import { useState } from 'react'
 
 const Home = () => {
 
   const [inputs, setInput] = useState({})
   const [image, setImage] = useState(null)
 
   const handleSubmit = async (event) =>{
     event.preventDefault()
     
     console.log(inputs, image)
 
     const formData = new FormData()
     formData.append("image", image)
     formData.append("name", inputs.nome)
     formData.append("store", inputs.loja)
     formData.append("number", inputs.numero)
 
     for (let pair of formData.entries()) {
       console.log(pair[0], pair[1]);
     }
     try {
       
       const response = await axios.post("/memories", formData);
       
 
 
     } catch (error) {
       console.log(error)
       
     }
   }
 
 
   const handleChange =(event) =>{
     if(event.target.name ==="image"){
       setImage(event.target.files[0])
     
   } else {
     setInput({...inputs, [event.target.name]: event.target.value})
   }
 }
 
  
 
   return (
     <div className='home-container'>
       <header>
         <div className="img-container">
           <img src="" alt="" />
         </div>
       </header>
 
       <form onSubmit={handleSubmit}>
         <div className="form-title">
           <h3>Criar chamados</h3>
         </div>
         <div className="form-container">
           <input type="text" placeholder='Nome do supervisor' name='nome' onChange={handleChange}/>
           <input type="text" placeholder='Loja' name="loja" onChange={handleChange} />
           <input type="number" placeholder='Número da loja' name="numero" onChange={handleChange} />
           <input type="file" placeholder='Imagem' name='image' onChange={handleChange} />
         </div>
         <div className="btn">
           <button type='submit'>Enviar</button>
         </div>
       </form>
     </div>
   )
 }
 
 export default Home