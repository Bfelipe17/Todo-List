import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { CreateTodo } from './components/CreateTodo'
import { Content } from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        {/* <CreateTodo /> */}
        <Content />
      </div>
    </div>
  )
}

export default App
