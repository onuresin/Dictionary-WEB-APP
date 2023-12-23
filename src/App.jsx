import { useEffect, useState } from "react";
import Header from "./Components/Header";

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [fetchWord, setFetchWord] = useState();
  
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`).then(r => r.json())
      setFetchWord(data[0])
    }
    fetchData();
  }, [searchTerm])


  return (
    <div className="container">
      <Header selectFont={selectFont} setSelectFont={setSelectFont}/>
    </div>
  )
}