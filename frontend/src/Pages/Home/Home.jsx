import React from 'react'
import { Hero } from '../../Components/Hero/Hero'
import { Sobre } from '../../Components/Sobre/Sobre'
import { SaudeMental } from '../../Components/SaudeMental/SaudeMental'
import { Atendimento } from '../../Components/Atendimento/Atendimento'

export const Home = () => {
  return (
    <>
      <Hero/>
      <Sobre/>
      <SaudeMental/>
      <Atendimento/>
    </>
  )
}
