import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Details.css";

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

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
      };

    return (
        
        <section className="container">
            <div classname="returnback" >
                <button onClick={handleClick}>Retour</button>
            </div>
            
            <div>
                <h1 className="Nom">{Personnages.name}</h1>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${(id)}.jpg`}/>
            </div>
        
        </section >        
    )
}