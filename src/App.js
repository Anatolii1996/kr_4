import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './redux/action/actionCreator';

function App() {
  const store = useSelector(store => store);
  const dispatch= useDispatch();
 
  const handlePosts = ()=>{
  dispatch(getPosts());
  }

  return (
    <div className="App">
      <button onClick={handlePosts}>Get Posts</button>
    </div>
  );
}

export default App;
