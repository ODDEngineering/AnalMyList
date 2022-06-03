import React, { useEffect, useState } from 'react'
import { Message } from '@anal-my-list/api-interfaces'
import { Provider } from 'react-redux'
import { store } from '../../state'
import { Home } from '../home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from '../about'
import { Login } from '../login'

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
