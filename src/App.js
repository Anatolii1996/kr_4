import './App.scss';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from 'react-redux';

import Articles from './components/articles';
import Cards from './components/cards';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';

function App() {
  const store = useSelector(store => store);


  return (
    <div className="App">
      <Header/>
      <Articles />
      <Cards/>
    </div>
  );
}

export default App;
