import React, { useState } from 'react'
import * as H from './Styles'
import { IoMdMenu } from "react-icons/io";

export const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <H.header>
      <h2>Dra. Juliana Azevedo</h2>

      <button onClick={() => setOpen(!open)}>
        <IoMdMenu size={35} />
      </button>


      <H.Menu open={open}>
        <ul>
          <li><a>Inicio</a></li>
          <li><a>Sobre</a> </li>
          <li><a>Saúde Mental</a> </li>
          <li><a>Localização</a> </li>
          <button>Agendar Consulta</button>
        </ul>
      </H.Menu>
    </H.header>
  )
}
