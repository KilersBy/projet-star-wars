import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import laser from "../Personnages/laser.gif"

const url = 'https://swapi.dev/api/people/'

export default function ListePerso() {
const [personnages, setPersonnages] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
const [loader, setLoader] = useState(true);
const [recherche, setRecherche] = useState('');
const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/details/${id}`);
    }
    
    useEffect(() => {
        axios.get(`${url}?page=${currentPage}&search=${recherche}`)
            .then((res) => {
                getListePersonnages(res.data)
                setTotalPages(Math.ceil(res.data.count / 10));
                setLoader(false);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [currentPage, recherche]);
    
    const getListePersonnages = (personnages) => {
        let listePersonnages = [];
    
        for (let i = 0; i < personnages.results.length; i++) {
          if (personnages.results[i].name.toLowerCase().includes(recherche.toLowerCase())) {
            listePersonnages.push(personnages.results[i]);
          }
        }
    
        setPersonnages(listePersonnages);
      }
    
    function getUrlId(url) {
        const urlId = url.split('/');
        return urlId[urlId.length - 2];
    }
    
    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
        setLoader(true);
    }

    function handleSearchInputChange(event) {
        setRecherche(event.target.value);
        setCurrentPage(1);
        setLoader(true);
    }
    
    return (
        <section className="container" >
            <div>
                <HashLoader color={"#000000"} loading={loader} size={150} image={laser} />
            </div>
            <div className="search-container">
                <input type="text" placeholder="Recherche..." value={recherche} onChange={handleSearchInputChange} />
            </div>
            {personnages.map((prod) =>
                <div className="warpper" key={prod.name} onClick={() => handleClick(getUrlId(prod.url))}>
                    <div className="card_img">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(prod.url)}.jpg`} alt={prod.name} />
                    </div>
                    <div className="cardInfo" >
                        <h1>{prod.name}</h1>
                    </div>
                </div>
            )}
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Précédent</button>
                    </li>
                    {[...Array(totalPages)].map((_, i) => (
                        <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i}>
                            <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Suivant</button>
                    </li>
                </ul>
            </nav>
        </section >
    )}
    