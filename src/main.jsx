import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Test from './pages/Test.jsx';
import BookAppointment from './pages/BookAppointment.jsx';
import UserDashboard from './components/UserDashboard.jsx';
import LabDashboard from './components/Dashboard/LabDashboard.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/test' element={<Test />} />
      <Route path='/book-appointment' element={<BookAppointment />} />
      <Route path='/user-dashboard' element={<UserDashboard />} />
      <Route path='/lab-dashboard' element={<LabDashboard />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
