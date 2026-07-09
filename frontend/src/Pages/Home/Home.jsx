import React from 'react'
import { Hero } from '../../Components/Hero/Hero'
import { Sobre } from '../../Components/Sobre/Sobre'
import { SaudeMental } from '../../Components/SaudeMental/SaudeMental'

export const Home = () => {
  return (
    <>
      <Hero/>
      <Sobre/>
      <SaudeMental/>
    </>
  )
}
