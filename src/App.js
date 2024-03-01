import './App.css';
import {Routes, Route,HashRouter } from 'react-router-dom'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Layout from './pages/Layout';
import Footer from './components/footer/Footer';
import { useEffect } from 'react';
import PageNotFound from './pages/PageNotFound';
function App() {
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
  return (
    <HashRouter>
     <Routes>
     <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='services' element={<Services />}/>
      <Route path='about' element={<About />}/>
      <Route path='*' element={<PageNotFound/>}/>
     </Route>
    </Routes>
    <Footer />
    </HashRouter>
  );
}
export default App;
