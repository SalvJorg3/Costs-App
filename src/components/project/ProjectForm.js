import styles from '../project/ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
        <div>
            <Input 
              type="text" 
              text="Nome do projeto" 
              name="name" 
              placeholder="Insira o nome do projeto"
            />
        </div>    
            <div>
            <Input 
              type="number" 
              text="Orçamento do projeto" 
              name="budget" 
              placeholder="Insira o orçamento total"
            />
            </div>
            <div>
            <Select name="category_id" text="Selecione a categoria" />
            </div>
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm