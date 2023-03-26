import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const url = 'https://swapi.dev/api/people/'

export default function ListePerso() {
    const [personnages, setPersonnages] = useState([]);

    const [selectedId, setSelectedId] = useState(null);
    
    const navigate = useNavigate();

    const handleClick = (id) => {
    navigate(`/details/${id}`);
  }

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                getListePersonnages(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    const getListePersonnages = (Personnages) => {
        let ListePersonnages = []
        for (let i = 0; i < Personnages.results.length; i++) {  
            ListePersonnages.push(Personnages.results[i]) 
        }
        setPersonnages(ListePersonnages)
    }
    console.log(personnages)
    

    function getUrlId(url) {
        const urlId = url.split('/');
        return urlId[urlId.length - 2];
    }
    
    return (
        <section className="container" >
            {personnages.map((prod) =>
                    <div className="warpper" onClick={() => handleClick(getUrlId(prod.url))}>
                            <div className="card_img">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(prod.url)}.jpg`}/>
                            </div>
                            <div className="cardInfo" >
                                <h1>{prod.name}</h1>
                            </div>
                    </div>
            )}
        </section >        
    )
}