import styles from './Home.module.css'

import icone from '../img/moedas.png'

import LinkButton from '../layout/LinkButton'


function Home() {
   return (
      <section className={styles.home_container}>
         <h1>Bem-vindo ao <span>Costs!</span></h1>
         <p>Gerencie seus projetos da maneira que quiser!</p>
         <LinkButton to="/newproject" text="Criar Projeto" />
         <img className={styles.icone_moeda} src={icone} alt="Costs" />
      </section>
   )
}

export default Home