import React, { useState } from 'react'
import * as H from './Styles'
import { IoMdMenu } from "react-icons/io";

export const Header = () => {

  const [open, setOpen] = useState(false);

  const scrollToSelection = (id) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    setOpen(false)
  }
 
  return (
    <H.header>
      <h2>Dra. Juliana Azevedo</h2>

      <button className='menuButton' onClick={() => setOpen(!open)}>
        <IoMdMenu size={35} />
      </button>


      <H.Menu open={open}>
        <ul>
          <li onClick={() => scrollToSelection("inicio")}><a>Inicio</a></li>
          <li onClick={() => scrollToSelection("sobre")}><a>Sobre</a> </li>
          <li onClick={() => scrollToSelection("saudeMental")}><a>Saúde Mental</a> </li>
          <li onClick={() => scrollToSelection("localizacao")}><a>Localização</a> </li>
          <button>Agendar Consulta</button>
        </ul>
      </H.Menu>
    </H.header>
  )
}
