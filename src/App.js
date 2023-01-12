import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import User from './pages/User';
import Photos from './pages/Photos';
import Header from './components/header';


import { Route, Routes } from 'react-router-dom';

function App() {
  const store = useSelector(store => store);


  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/photos' element={<Photos />} />
      </Route>
    </Routes>
  );
}

export default App;
