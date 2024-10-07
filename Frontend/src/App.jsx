import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import NavBar from './pages/NavBar.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';

function App() {
return(
  <BrowserRouter>
  <div>
    <NavBar/>
    <Routes>
    <Route path="/" element={<MainPage/>} />
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </div>
  
  </BrowserRouter>
)

  
}

export default App
