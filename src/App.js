import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import Search from './components/Search';
import Delete from './components/Delete';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<AddBook/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/Delete' element={<Delete/>}/>
      <Route path='/View' element={<View/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
