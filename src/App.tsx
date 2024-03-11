import { Header } from "./components/Header";

import styles from './App.module.css'
import { Input } from "./components/Input";
import { useState } from "react";
import { Button } from "./components/Button";
import { PlusCircle } from "@phosphor-icons/react";

export interface TodoTask {
  id: number;
  text: string;
  isOptChecked: boolean;
}

export function App() {

  const [ todotasks, setTodotasks ] = useState<TodoTask[]>([])
  const [ inputTodoValue, setInputTodoValue ] = useState('')

  const checkedOptTaskCounter = todotasks.reduce((previewValue, currentOptTask) => {
    if (currentOptTask.isOptChecked) {
      return previewValue + 1
    }

    return previewValue
  }, 0)

  function handleAddTaskTodo() {

    if (!inputTodoValue) {
      return;
    }

    const newTaskTodo: TodoTask = {
      id: new Date().getTime(),
      text: inputTodoValue,
      isOptChecked: false
    }

    setTodotasks((state) => [...state, newTaskTodo])
    setInputTodoValue('')
  }

  function handleDeleteTaskTodo(id: number) {
    const filteredTasksTodo = todotasks.filter((task) => task.id !== id)

    if(!confirm('DESEJA MESMO APAGAR ESSA TAREFA?')) {
      return;
    }

    setTodotasks(filteredTasksTodo)
  }

  function handleToggleTaskTodo({id, value}: {id: number, value: boolean}) {

    const updateTasksTodo = todotasks.map((task) => {
      if (task.id === id) {
        return { ...task, isOptChecked: value }
      }

      return { ...task }
    })

    setTodotasks(updateTasksTodo)
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input onChange={(e) => setInputTodoValue(e.target.value)}/>
          <Button onClick={handleAddTaskTodo}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold"/>
          </Button>
        </div>
      </section>
    </main>
  )
}
