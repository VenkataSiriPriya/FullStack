import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import ExTwo from './components/ExTwo.jsx'
import Parent from './components/Ex3/Parent.jsx'
import Content from './components/Ex4/Content.jsx'
import NavReducer from './components/Ex4/NavReducer.jsx'
import Form from './components/Ex5/Form.jsx';
import Navbar from './components/Ex5/Navbar.jsx';
import Users from './components/Ex6/Users.jsx'
import Weather from './components/Ex6/Weather.jsx'

import{createStore}from 'redux'
var store=createStore(NavReducer)
var customer=()=> createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<ExTwo/>}></Route>
      <Route path='/ex3'element={<Parent/>}></Route>
      <Route path='/q'element={<Content store={store}/>}/>
      <Route path='/form' element={<Form />} />
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/Ex6' element={<Users/>}/>
      <Route path='/s' element={<Weather/>}/>


    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
customer()
store.subscribe(customer)