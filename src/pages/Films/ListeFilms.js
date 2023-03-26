import React, { useState, useEffect } from "react";
import axios from 'axios';
const url = 'https://swapi.dev/api/films/'


export default function ListeFilms() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                getListeFilms(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    const getListeFilms = (films) => {
        let ListeFilms = []
        for (let i = 0; i < films.results.length; i++) {  
            ListeFilms.push(films.results[i]) 
        }
        setFilms(ListeFilms)
    }
    
    function getUrlId(url) {
        const urlId = url.split('/');
        return urlId[urlId.length - 2];
    }
    
    return (
        <section className="container">
            {films.map((prod) =>
                <div className="card">
                    <div className="id">{getUrlId(prod.url)}</div>
                        <div className="warpper">
                            <div className="card_img">
                            <img src={`https://starwars-visualguide.com/assets/img/films/${getUrlId(prod.url)}.jpg`} />
                            </div>
                            <div className="cardInfo">
                                <h1>{prod.title}</h1>
                            </div>
                        </div>
                </div>
            )}
        </section >        
    )
}