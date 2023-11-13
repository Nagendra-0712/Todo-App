// import React from 'react'
// import TodoApp from './Todo-App/TodoApp'

// const App = () => {
//   return (
//     <>
//     <TodoApp/>
//     </>
//   )
// }

// export default App

//! 09-11-2023 (crud app)

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Crud App/Create'
import Home from './Crud App/Home'
import Update from './Crud App/Update'
import Read from './Crud App/Read'

const App = () => {
  return (
  <>
  {/* <h1>Crud operation</h1> */}
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={< Home/>} />
      <Route path='/create' element={< Create/>} />
      <Route path='/update/:id' element={< Update/>} />
      <Route path='/read/:id' element={< Read/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App