import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoApp } from './TodoApp'
import './style.css'
import { Provider } from 'react-redux'
import { store } from './store/slices/store'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <TodoApp />
    </Provider>,
  </React.StrictMode>,
)
