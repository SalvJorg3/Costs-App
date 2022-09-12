import styles from './Container.modules.css'


function Container(props) {
    return <div className={`${styles.cont}`}>{props.children}</div>
}

export default Container