
import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import { logout } from "./store/authSlice"

import './App.css'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
authService.getCurrentUser()
.then((useData)=>{
  if(useData){
    dispatch(login({useData}))
  }else{
    dispatch(logout())
  }
})
.finally(()=>setLoading(false))

  },[])

 return !loading? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block '>
      <Headers/>
      <main>
        {/* <Outlet/> */}
        todo
      </main>
      <Footer/>
    </div>
  </div>
 ) : (null)
}

export default App
