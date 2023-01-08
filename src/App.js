import './App.scss';
import { useSelector } from 'react-redux';

import Articles from './components/articles';

function App() {
  const store = useSelector(store => store);
  
  
  return (
    <div className="App">
      
      <Articles/>
    </div>
  );
}

export default App;
