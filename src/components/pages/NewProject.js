import styles from '../pages/NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto e depois adicione os custos</p>
            <ProjectForm btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject