import React from "react";
import ListePerso from "./ListePerso";
import "../../styles/Pages.css";
import ListeFavoris from "./ListeFavoris";

function Personnages() {
    return (
        <section>
            <div className="row">
                <ListePerso />
            </div>
        </section>
    );
}
export default Personnages;