import React from 'react'
import * as L from './Styles'
import { Marker, Popup, MapContainer } from "react-leaflet"
import { TileLayer } from 'react-leaflet/TileLayer'
import { Icon } from 'leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import location from '../../Assets/img/locationGreen.png'
import telephone from '../../Assets/img/telephone.png'
import clockGreen from '../../Assets/img/clockGreen.png'

export const Localizacao = () => {
    return (
        <L.main>
            <L.titleDiv>
                <h3>ONDE ESTAMOS</h3>
                <h2>Local de Atendimento</h2>
                <p>Os atendimentos presenciais são realizados em um espaço moderno e acolhedor, projetado para oferecer conforto e privacidade.</p>
            </L.titleDiv>

            <L.locationDiv>
                <div>
                    <MapContainer center={[-22.228402497927878, -45.93934999098994]} zoom={18} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-22.228402497927878, -45.93934999098994]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} >
                            <Popup>
                                Pronto Clínica Luna <br />
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

                <L.locationBody>
                    <h3>Pronto Clínica Luna</h3>

                    <L.cardContainer>
                        <L.card>
                            <span className='imgDiv'>
                                <img src={location} alt="ícone de localização" />
                            </span>

                            <span>
                            <h4>Endereço</h4>
                            <p>Rua Exemplo, 123 - Centro <br />
                                Pouso Alegre - MG <br />
                                CEP: 37550-000 <br /></p>
                            </span>
                        </L.card>

                        <L.card>
                            <span className='imgDiv'>
                                <img src={telephone} alt="ícone de telefone" />
                            </span>

                            <span>
                            <h4>Contato</h4>
                            <p>(35) 99999-9999contato <br />
                                @draJulianaazevedo.com.br </p>
                            </span>
                        </L.card>

                        <L.card>
                            <span className='imgDiv'>
                                <img src={clockGreen} alt="ícone de relógio" />
                            </span>

                            <span>
                            <h4>Horário de Atendimento</h4>
                            <p>Segunda a Sexta: 8h às 18h <br />
                                Sábado: 8h às 12h</p>
                            </span>
                        </L.card>
                    </L.cardContainer>

                    <button>Ver Rotas no Google Maps</button>
                </L.locationBody>

            </L.locationDiv>
        </L.main>
    )
}
