import React, { useState, useEffect } from "react";
import axios from 'axios';
const url = 'https://swapi.dev/api/vehicles/'


export default function ListeVehicule() {
    const [vehicules, setVehicules] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                getListeVehicules(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    const getListeVehicules = (vehicules) => {
        let ListeVehicules = []
        for (let i = 0; i < vehicules.results.length; i++) {  
            ListeVehicules.push(vehicules.results[i]) 
        }
        setVehicules(ListeVehicules)
    }

    function getUrlId(url) {
        const urlId = url.split('/');
        return urlId[urlId.length - 2];
    }
    
    return (
        <section className="container">
            {vehicules.map((prod) =>
                <div className="card">
                    <div className="id">{getUrlId(prod.url)}</div>
                        <div className="warpper">
                            <div className="card_img">
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${getUrlId(prod.url)}.jpg`}/>
                            </div>
                            <div className="cardInfo">
                                <h1>{prod.name}</h1>
                            </div>
                        </div>
                </div>
            )}
        </section >        
    )
}