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
          <li onClick={() => scrollToSelection("inicio")}>Inicio</li>
          <li onClick={() => scrollToSelection("sobre")}>Sobre</li>
          <li onClick={() => scrollToSelection("saudeMental")}>Saúde Mental</li>
          <li onClick={() => scrollToSelection("localizacao")}>Localização</li>
          <button onClick={() => window.open("https://api.whatsapp.com/send/?phone=5535999215198&text&type=phone_number&app_absent=0&utm_source=ig")} rel="noreferrer" >Agendar Consulta</button>
        </ul>
      </H.Menu>
    </H.header>
  )
}
