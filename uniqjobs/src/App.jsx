import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import MainLayout from '../src/layouts/MainLayout';
import Home from './pages/Home';

function App() {
 

  return (
    <BrowserRouter basename="/uniqjobs">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
