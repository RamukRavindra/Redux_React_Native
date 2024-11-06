import React from 'react'
import { Provider } from 'react-redux'
import { todoStore, store } from './src/redux/store'
import TodoListScreen from './src/screens/counterScreen/TodoList/TodoListScreen'

const App = () => {
  return (
    // <Provider store={store}>
    //   <Counter />
    // </Provider>
    <Provider store={todoStore}>
      <TodoListScreen />
    </Provider>
  )
}

export default App;