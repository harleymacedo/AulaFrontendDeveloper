import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/Index.module.css';
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {

  return (
    <>  
      <Head>
        <title>Simule Agora - Plataforma de simulação</title>
        <meta name="description" content="Simule agora financiamento de imovel, grátis e rápido." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />    
      </Head>
      
      <div className={styles.containerPrincipal}>

        <div className={styles.containerCabecalho}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <a href='/' style={{textDecoration: 'none', color: 'black', marginRight: '20px'}}>  
              <button style={{padding: '4px', color: 'green', border: '1px solid green', borderRadius: '3px'}}>
                Inicio
              </button> 
            </a>
            <a href='/' style={{textDecoration: 'none', color: 'black'}}> <h1>Simule Agora</h1></a>
            {/* <a href='/' style={{textDecoration: 'none', color: 'black', marginLeft: '20px'}}>  <img src='/favicon.ico' /> </a> */}
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>                  
              <h3>Contato</h3>                
          </div>
        </div>

        <div className={styles.containerCentral}>
          <div className={styles.cardSimulacaoMiniatura}>
            <img src='icons8-cartao-de-visitas-100.png' style={{width: '30px', height: '30px'}}/>
          </div>
          <h5>Email: renatakpmacedo@gmail.com</h5>
        </div>

        <div className={styles.containerRodape}>
          <p><span><img src='/favicon.ico' style={{width: '30px', height: '30px'}} /></span> | Simule agora - 2023 | <a href='/contato' style={{textDecoration: 'none'}}><span>Contato</span></a></p>
        </div>

      </div>
    </>
  )
}
