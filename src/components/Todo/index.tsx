import { Trash } from 'phosphor-react';
import styles from './styles.module.css';

export function Todo() {
  return (
    <div className={styles.todo}>
      <div className={styles.todoContent}>
        <input type="checkbox" defaultChecked />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus officia culpa maiores ipsum vel aliquid architecto rerum quo omnis laudantium animi, atque aperiam, saepe, similique nesciunt sed? Odio, earum necessitatibus!</p>
        <Trash />
      </div>
    </div>
  )
}