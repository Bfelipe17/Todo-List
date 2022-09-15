import { Trash } from 'phosphor-react';
import styles from './styles.module.css';

interface TodoProps {
  content: string;
  isCompleted: boolean;
  onUpdateTodo: (content: string) => void;
  onDeleteTodo: (content: string) => void;
}

export function Todo({ content, isCompleted, onUpdateTodo, onDeleteTodo }: TodoProps) {
  function handleUpdateTodo() {
     onUpdateTodo(content)
  }

  function handleDeleteTodo() {
    onDeleteTodo(content)
  }

  return (
    <div className={styles.todo}>
      <div className={styles.todoContent}>
        <input type="checkbox" onClick={handleUpdateTodo}/>
        <p className={isCompleted ? styles.line : ""}>{content}</p>
        <Trash onClick={handleDeleteTodo} />
      </div>
    </div>
  )
}