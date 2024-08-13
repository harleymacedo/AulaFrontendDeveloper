import {useState} from 'react'
import style from './SimuladorConversorMoeda.module.css'
import axios from 'axios'

const SimuladorEnergiaSolar = (props) => {


    return (
        <div className={style.divPrincipal} style={{backgroundColor: props.cor}}>

            <h3>Simulador de Energia Solar</h3>
            
        </div>
    )
}

export default SimuladorEnergiaSolar