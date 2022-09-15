import { PlusCircle } from 'phosphor-react';
import { FormEvent } from 'react';
import styles from './styles.module.css';

interface CreateTodoProps {
  onCreateTodo: (event: FormEvent) => void;
  setTodoContent: (content: string) => void;
}

export function CreateTodo({ onCreateTodo, setTodoContent }: CreateTodoProps) {
  return (
    <form className={styles.form} onSubmit={onCreateTodo}>
      <input type="text" placeholder="Adicione uma nova tarefa" onChange={(e) => setTodoContent(e.target.value)}/>
      <button type="submit">Criar <PlusCircle size={16} weight="bold"/> </button>
    </form>
  )
}