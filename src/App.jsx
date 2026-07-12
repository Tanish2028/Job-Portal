import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import ApplyJob from './Pages/ApplyJob.jsx'
import Application from './Pages/Application.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/apply-job/:id' element={<ApplyJob />}></Route>
        <Route path='/applications' element={<Application />}></Route>
      </Routes>
    </div>
  )
}

export default App
