import { ClipboardText } from 'phosphor-react';
import { Todo } from '../Todo';
import styles from './styles.module.css';

export function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.infos}>
          <p className={styles.created}>Tarefas criadas <span>0</span></p>
          <p className={styles.finished}>Concluídas <span>0</span></p>
      </div>
      <div className={styles.todos}>
        <div className={styles.noTodo}>
          <ClipboardText size={56} />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
        <Todo />
      </div>
    </div>
  )
}