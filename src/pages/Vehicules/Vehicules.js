import React from "react";
import ListeVehicules from "./ListeVehicules";
import "../../styles/vehicules.css";

function Personnages() {
    return (
        <section>
            <div className="row">
                <ListeVehicules />
            </div>
        </section>
    );
}
export default Personnages;