import "./App.css"
import Search from "./components/Search"
import NewStoreForm from "./components/NewStoreForm"
import StoreList from "./components/StoreList"
import { useState, useEffect } from "react"

function App() {
  const [stores, setStores] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const baseUrl = "http://localhost:8085/stores"

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then(setStores)
  }, [])

  function handleAddStore(newStore) {
    const { name, image, season, episode, episodeUrl, url } = newStore

    const newStoreBody = {
      name,
      image,
      episode: parseInt(episode),
      season: parseInt(season),
      episodeUrl,
      url,
    }

    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStoreBody),
    })
      .then((res) => res.json())
      .then((addedStore) => setStores([...stores, addedStore]))
  }
  // want to filter all the stores and send those filtered stores to the Store List to be displayed

  const filteredStores = stores.filter((store) => {
    if (searchTerm === "") {
      return true
    } else {
      return store.name.toLowerCase().includes(searchTerm.toLowerCase())
    }
  })

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" alt="" />
      <h1>Neighbor Stores</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewStoreForm onAddStore={handleAddStore} />
      <StoreList stores={filteredStores} />
    </div>
  )
}

export default App
