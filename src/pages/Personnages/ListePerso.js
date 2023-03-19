import React, { useState, useEffect } from "react";
import axios from 'axios';
const url = 'https://swapi.dev/api/people/'


export default function ListePerso() {
    const [personnages, setPersonnages] = useState([]);

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
    
    return (
        <section className="container">
            {personnages.map((prod) =>
                <div className="card">
                    <div className="warpper">
                        <div className="card_img"/>
                        <div className="cardInfo">
                            <h1>{prod.name}</h1>
                        </div>
                    </div>
                </div>
            )}
        </section >
    )
}