import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import { getCatsFetch } from './Cats/catsSlice';

function App() {
  const cat = useSelector(state => state.cats.catsData);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCatsFetch());
  },[dispatch]);

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
