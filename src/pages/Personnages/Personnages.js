import React from "react";
import ListePerso from "./ListePerso";
import "../../styles/Pages.css";

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