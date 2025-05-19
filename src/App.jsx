import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layouts from './components/Layouts/Layouts'
import Home from './Pages/Home'
import Registrations from './Pages/Registrations'
import Login from './Pages/Login'
import WebsiteSubmissionForm from './Pages/WebsiteSubmissionForm'
import MyWorkspace from './Pages/MyWorkspace'
import Pricing from './Pages/Pricing'
import Enterprise from './Pages/Enterprise'
import Examples from './Pages/Examples'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layouts/>}>
    <Route index element ={<Home/>}/>
    <Route path='/Registrations' element={<Registrations/>}/>
    <Route path='/Login' element ={<Login/>}/>
    <Route path='/WebsiteSubmissionForm' element ={<WebsiteSubmissionForm/>}/>
    <Route path='/MyWorkspace' element ={<MyWorkspace/>}/>
    <Route path='/Pricing' element ={<Pricing/>}/>
    <Route path='/Enterprise' element ={<Enterprise/>}/>
    <Route path='/Examples' element ={<Examples/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
