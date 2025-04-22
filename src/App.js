import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Displaynav from './Components/Displaynav'
import { Cartvalue } from './Hooks/Cartcontext'

function App() {
  return (
    <div>
      <Cartvalue>
      <BrowserRouter basename="/foodorder">
      <Displaynav/>
      
      </BrowserRouter>
      </Cartvalue>
    </div>
  )
}

export default App