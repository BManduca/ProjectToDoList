import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.containerToDo}>
            <img src="../../public/Logo.svg" alt="logo da aplicação ToDo" />
        </header>
    )
}