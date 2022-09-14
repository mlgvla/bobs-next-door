import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import {useState, useEffect} from 'react'

function App() {

  const [stores, setStores] = useState([])
  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search />
      <NewStoreForm />
      <StoreList />
    </div>
  );
}

export default App;
