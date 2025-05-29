import AppName from './components/AppName'
import TodoForm from './components/TodoForm'
import TodoItem from './components/ToDoItem'

import './App.css'

function App() {
 

  return (
    <>
      <center className='todoContainer'>
       <AppName/>
       <TodoForm/>
       <div className="todoItemContainer">
       <TodoItem/>
       </div>
      </center>
    </>
  )
}

export default App
