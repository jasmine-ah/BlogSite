import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import NavBar from './pages/NavBar.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import Blogpost from './pages/Blogpost.jsx';
import DisplayPost from './pages/Displaypost.jsx';

function App() {
return(
  <BrowserRouter>
  <div>
    <NavBar/>
    <Routes>
    <Route path="/" element={<MainPage/>} />
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/displaypost" element={<DisplayPost/>}/>
    <Route path="/blogpost" element={<Blogpost/>}/>
    <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </div>
  
  </BrowserRouter>
)

  
}

export default App
