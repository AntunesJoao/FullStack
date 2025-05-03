import React, { useState, useEffect } from 'react'
import axios from "../axios-config"
import './Chamados.css'

const Chamados = () => {
  const [memories, setMemories] = useState([])

  useEffect(() => {
    const getMemories = async () => {
      try {
        const res = await axios.get("/memories")
        setMemories(res.data)
      } catch (err) {
        console.error("Erro ao buscar memórias:", err)
      }
    }

    getMemories()
  })


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
              <p>{comment.name}</p>
              <p>{comment.store}</p>
              <p>{comment.number}</p>
              {comment.src && (
                <img
                  src={`${axios.defaults.baseURL}${comment.src}`}
                  alt="Imagem do chamado"

                />
              )}
              <button
                onClick={() =>
                  handleDownload(
                    `${axios.defaults.baseURL}${comment.src}`,
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
