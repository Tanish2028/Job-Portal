import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import ApplyJob from './Pages/ApplyJob.jsx'
import Application from './Pages/Application.jsx'
import RecruiterLogin from './Components/RecruiterLogin.jsx'
import { AppContext } from './Context/AppContext.jsx'
import DashBoard from './Pages/DashBoard.jsx'
import AddJob from './Pages/AddJob.jsx'
import ManageJobs from './Pages/ManageJobs.jsx'
import ViewApplication from './Pages/ViewApplication.jsx'
import 'quill/dist/quill.snow.css'
const App = () => {

  const {showRecruiterLogin} = useContext(AppContext)
  return (
    <div>
      {
        showRecruiterLogin && <RecruiterLogin/>
      }
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/apply-job/:id' element={<ApplyJob />}></Route>
        <Route path='/applications' element={<Application />}></Route>
        <Route path='/dashboard' element={<DashBoard />} />
          <Route path='add-job' element={<AddJob/>} />
          <Route path='manage-jobs' element={<ManageJobs />} />
          <Route path='view-applications' element={<ViewApplication />} />

      </Routes>
    </div>
  )
}

export default App
