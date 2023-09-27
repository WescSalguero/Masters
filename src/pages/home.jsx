import React from 'react'

import Header from '../components/header'
import '../assets/css/Home.css'


import Curriculum from "../assets/images/Curriculum.png"
import Docencia from "../assets/images/Docencia.png"
import Filosofia from "../assets/images/Filosofía.png"
import MUD from "../assets/images/MDU.png"
import Investigación from "../assets/images/Investigación.png"
import Bibliotecología from "../assets/images/Bibliotecología.png"
import Editorial from "../assets/images/Editorial.png"
import Cultural from "../assets/images/Cultural.png"
import Antropología from "../assets/images/Antropología.png"
import Tecnología from "../assets/images/Tecnología.png"
import Footer from '../components/footer'
import Form from '../components/form'
const info = [
    { name: "Maestría en Curriculum", image: Curriculum, category: "Categoría en Ciencias", link: "https://drive.google.com/file/d/1Y1ejk_TXAhjXUY0kg3fJBByUZISLuZk0/view" },
    { name: "Maestría en Docencia universitaria", image: Docencia, category: "Categoría en Ciencias", link: "https://drive.google.com/file/d/1Qi9nm0-8jYlx_e56zpzxvDRM6Sjx_joN/view" },
    { name: "Maestria en Filosofía", image: Filosofia, category: "Categoría en Ciencias", link: "https://drive.google.com/file/d/1XGHf36dNP8BUGYVWRBxU5Mt6ZpzsxTOH/view" },
    { name: "MUD", image: MUD, category: "Con énfasis en tecnologías innovadoras de la educación", link: "https://drive.google.com/file/d/1wIEFgVPWgbqqueGGToLYz61v8rE8-NGk/view" },
    { name: "Maestria en Inversigación", image: Investigación, category: "Categoría en Ciencias", link: "https://drive.google.com/file/d/1u2DE5Ci1_L6O862xg4HQM1GmaZUDpOSX/view" },
    { name: "Maestria en bibliotecología y ciencia de la infomación", image: Bibliotecología, category: "", link: "https://drive.google.com/file/d/1NlpMp8gyI8JPPybdAOqBs3h4yUXG3zW8/view" },
    { name: "Maestria en edición editorial", image: Editorial, category: "", link: "https://drive.google.com/file/d/1uKOsxqwPkd12AZ6_1Tl8kFdvNoFfFJcR/view" },
    { name: "Maestria en expresión artística", image: Cultural, category: "Con énfasis en gestión cultural", link: "https://drive.google.com/file/d/1Q8RQDnz4nnaPFlMLUHz69YhdhzORET0A/view" },
    { name: "Maestria en filosofía", image: Antropología, category: "Con énfasis en antropología de la educación", link: "https://drive.google.com/file/d/1i6yMKOsxup4W1BPV7dYk6PLUdu_-Rb1V/view" },
    { name: "Maestría en Tecnología Educativa", image: Tecnología, category: "Con énfasis en entornos virtuales", link: "https://drive.google.com/file/d/1i6yMKOsxup4W1BPV7dYk6PLUdu_-Rb1V/view" }
]

const Home = () => {
    return (
        <>
            <Header />

            <div className="container">
                {info.map((item, index) => (
                    <div className="card mb-3" key={index}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.category}</p>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="card-link">Ver más información...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Form/>

            <Footer/>

        </>
    )
}

export default Home
