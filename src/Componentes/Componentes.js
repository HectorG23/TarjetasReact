import React from "react";
import Lista from "./ListadeTarjeta";
import Saludo from "./Saludo";
import Boton from "./Boton";

const Componentes = ({data}) => (
    <React.Fragment>
    <Saludo
        username="los niches"
    />
    <Lista
        exercises={data}
        />
        <Boton/>
    </React.Fragment>
)
export default Componentes