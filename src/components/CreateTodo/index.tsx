import { PlusCircle } from 'phosphor-react';
import styles from './styles.module.css';

export function CreateTodo() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa"/>
      <button type="button">Criar <PlusCircle size={16} weight="bold" /> </button>
    </form>
  )
}