import React, { useState, useEffect } from 'react'
 import axios from "../axios-config"
 import './Chamados.css'
 
 const Chamados = () => {
   const [memories, setMemories] = useState([])
 
   useEffect(() => {
     const getMemories = async () => {
       try {
         const res = await axios.get("https://fullstack-production-7c40.up.railway.app/memories")
         
         console.log(res.data); // Veja se é um array

       } catch (err) {
         console.error("Erro ao buscar memórias:", err)
       }
     }
 
     getMemories()
   }, [])
 
 
   const handleDownload = async (url, filename) => {
     try {
       const response = await fetch(url, { mode: 'cors' })
       const blob = await response.blob()
       const link = document.createElement('a')
       link.href = window.URL.createObjectURL(blob)
       link.download = filename
       document.body.appendChild(link)
       link.click()
       link.remove()
     } catch (err) {
       console.error('Erro ao baixar a imagem:', err)
     }
   }
 
 
   return (
     <div className='main'>
       <h1>Chamados</h1>
       <div className="chamados">
         {memories.length > 0 && memories.map((memory) => {
           const comment = memory.comments[0]
           return (
             <div className="memory" key={memory._id}>
               <p>{comment[0].name}</p>
               <p>{comment[0].store}</p>
               <p>{comment[0].number}</p>
               {comment[0].src && (
                 <img
                   src={`${axios.defaults.baseURL}${comment[0].src}`}
                   alt="Imagem do chamado"
 
                 />
               )}
               <button
                 onClick={() =>
                   handleDownload(
                     `${axios.defaults.baseURL}${comment[0].src}`,
                     `chamado-${memory._id}.jpg`
                   )
                 }
               >
                 Baixar imagem
               </button>
             </div>
           );
         })}
       </div>
     </div>
   )
 }
 
 export default Chamados