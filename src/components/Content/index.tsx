import { ClipboardText } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { CreateTodo } from '../CreateTodo';
import { Todo } from '../Todo';
import styles from './styles.module.css';

interface ITodo {
  id: number;
  content: string;
  isCompleted: boolean;
}


export function Content() {
  const [allTodos, setAllTodos] = useState<ITodo[]>([]);
  const [todoContent, setTodoContent] = useState('');
  const [completedTodos, setCompletedTodos] = useState(0);

  function addTodo(event: FormEvent) {
    event.preventDefault();

    const todoAlreadyExists = allTodos.find(todo => todo.content === todoContent);

    if (!todoAlreadyExists) {
      const newTodo: ITodo = {
        id: Math.random(),
        content: todoContent,
        isCompleted: false,
      }
      setAllTodos([...allTodos, newTodo]);
    }
  }

  function updateTodo(todoContent: string) {
    const updatedTodos = allTodos.map(todo => {
      if (todo.content === todoContent) {
        todo.isCompleted = !todo.isCompleted;
        todo.isCompleted ? setCompletedTodos(completedTodos + 1) : setCompletedTodos(completedTodos - 1);
      }
      return todo;
    })

    setAllTodos(updatedTodos);
  }

  function deleteTodo() {
    const todosWithoutDeletedOne = allTodos.filter(todo => todo.content !== todoContent);
    setAllTodos(todosWithoutDeletedOne);
  }

  return (
    <div className={styles.content}>
      <CreateTodo onCreateTodo={addTodo} setTodoContent={setTodoContent}/>
      <div className={styles.infos}>
          <p className={styles.created}>Tarefas criadas <span>{allTodos.length}</span></p>
          <p className={styles.finished}>Concluídas <span>{completedTodos}</span></p>
      </div>
      <div className={styles.todos}>
        {allTodos.length === 0 ? (
          <div className={styles.noTodo}>
          <ClipboardText size={56} />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
        ) : (
          allTodos.map(todo => (
            <Todo key={todo.id} content={todo.content} isCompleted={todo.isCompleted} onUpdateTodo={updateTodo} onDeleteTodo={deleteTodo}/>
          ))
        )}
      </div>
    </div>
  )
}