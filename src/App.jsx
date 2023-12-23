import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import FoundWord from "./Components/FoundWord";

export default function App() {
  const [selectFont, setSelectFont] = useState('sans-serif')
  const [searchTerm, setSearchTerm] = useState('');
  const [fetchWord, setFetchWord] = useState(null); 
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
      const jsonData = await response.json();

      // setSearchTerm(jsonData[0]); 
      setFetchWord(jsonData[0]);

      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {

    fetchData();
  }, [searchTerm]);

  return (
    <div className={`container ${selectFont}`}>
      <Header selectFont={selectFont} setSelectFont={setSelectFont}/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <FoundWord fetchWord={fetchWord} setFetchWord={setFetchWord}/>
    </div>
  );
}