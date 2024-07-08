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
     <h1>CATS SPECIES GALLERY</h1>
     <p>With Lots of Love from Cats gallery</p>
     <hr/>
     <div className='Gallery'>
      {cat.map((cats) => 
        <div key={cats.id} className='row'>
         <div className='column-left'>
          <img
          alt={cats.id}
          src={cats.catsreference_image_id}
          width="200px"
          height="200px"
          />
         </div>
         <div className='column-right'>
          <div>{cats.name}</div>
          <div>{cats.description}</div>
         </div>
        </div>
      )}
     </div>
    </div>
  );
}

export default App;
