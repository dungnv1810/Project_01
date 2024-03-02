import React from 'react';
import Navbar from './Component/Navbar';
import Abounts from './Component/Abounts';
import Projects from './Component/Projects';
import Talks from './Component/Talks';
import Blogs from './Component/Blogs'
import Resumes from './Component/Resumes';
import Contacts from './Component/Contacts';
import Pages  from './Component/Pages';
import Footer from './Component/Footer';
import Footers from './Component/Footers';
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Abounts/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/talks' element={<Talks/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/resumes' element={<Resumes/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/pages' element={<Pages/>}/>
      </Routes>
      <Footer/>
      <Footers/>
    </div>
  );
}

export default App;
