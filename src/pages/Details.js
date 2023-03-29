import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Details.css"

export default function Details() {
    const [Personnages, setPersonnages] = useState([]);
    const { id } = useParams();

    const url = `https://swapi.dev/api/people/${id}`

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setPersonnages(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);
    console.log(Personnages)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
      };

    return (
        <section className="container">
            <div>
                <button className="returnback" onClick={handleClick}>Retour</button>
            </div>
        
            <div className="info">
                <h1 className="Nom">NOM DU PERSONNAGE : {Personnages.name}</h1>
                <h3>Taille : {Personnages.height} </h3>
                <img className="imagePersonnage" src={`https://starwars-visualguide.com/assets/img/characters/${(id)}.jpg`}/>
            </div>
        
        </section >        
    )
}