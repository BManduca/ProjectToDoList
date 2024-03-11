import styles from './Header.module.css'

interface Props {
    todoTasksCounter: number;
    checkedToDoTasksCounter: number;
}

export function Header({ todoTasksCounter, checkedToDoTasksCounter }: Props) {

    return (
        <header className={styles.container}>
            <aside>
                <p>Tarefas criadas</p>
                <span>{todoTasksCounter}</span>
            </aside>

            <aside>
                <p>Concluídas</p>
                <span>
                    {todoTasksCounter === 0 
                        ? todoTasksCounter 
                        : `${checkedToDoTasksCounter} de ${todoTasksCounter}`}
                </span>
            </aside>
        </header>
    )
}