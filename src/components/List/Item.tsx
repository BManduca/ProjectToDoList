import { Trash, Check } from "@phosphor-icons/react";

import { TodoTask } from "../../App";

import styles from './Item.module.css'

interface Props {
    data: TodoTask
    removeTaskToDo: (id: number) => void
    toggleTaskToDoStatus: ({id, value}: {id: number; value: boolean}) => void
}

export function Item({ data, removeTaskToDo, toggleTaskToDoStatus }: Props) {

    function handleTaskToogle() {
        toggleTaskToDoStatus({ id: data.id, value: !data.isOptChecked })
    }

    function handleRemove() {
        removeTaskToDo(data.id)
    }

    const checkboxCheckedClassname = data.isOptChecked 
        ? styles['checkbox-checked'] 
        : styles['checkbox-unchecked']
    
        const paragraphCheckedClassname = data.isOptChecked 
        ? styles['paragraph-checked']
        : ''

    return (
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox" onClick={handleTaskToogle}>
                    <input readOnly type="checkbox" checked={data.isOptChecked} />
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        { data.isOptChecked && <Check size={12} /> }
                    </span>
                    <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                        {data.text}
                    </p>
                </label>
            </div>

            <button onClick={handleRemove}>
                <Trash size={16} color="#808080" />
            </button>
        </div>
    )
}