import styles from './ContainerCards.module.css'
import CardSimulador from './CardSimulador'

const ContainerCards = () => {

    return (
        <div className={styles.divPrincipalCards}>

            <CardSimulador
                titulo='Financiamento de imóvel'
                descricao='Simule um financiamento de um imóvel com as taxas de juros praticadas atualmente'
                palavrasChave='Simulador, Financimento, Imóvel, Casa'
                imagem='./icons8-casa-48.png'
                linkButton='/SimuladorFinanciarImovel'
                cor='#f0f0f5'
            />

            <CardSimulador
                titulo='Financiamento de carro'
                descricao='Simule um financiamento de um carro com as taxas de juros praticadas atualmente'
                palavrasChave='Simulador, Financimento, Carro, Veículo'
                imagem='./icons8-carro-48.png'
                linkButton='/SimuladorFinanciarCarro'
                cor='#f0f0f5'
            />

            <CardSimulador
                titulo='Simulador de Investimento'
                descricao='Simule os principais investimentos e quanto tempo para alcançar seus objetivos'
                palavrasChave='Simulador, Financimento, Investimentos, Bolsa de valores'
                imagem='./icons8-investidor-48.png'
                linkButton='/SimuladorInvestimento'
                cor='#f0f0f5'
            />

            <CardSimulador
                titulo='Conversor de moeda'
                descricao='Converta moedas de diversor países usando a cotação do dia em tempo real'
                palavrasChave='Conversor, Cotação, Moedas, Simulador'
                imagem='./icons8-moeda-48.png'
                linkButton='/SimuladorConversorMoeda'
                cor='#f0f0f5'
            />

        </div>
    )
}

export default ContainerCards