import { useState } from "react";

export default function Search({searchTerm, setSearchTerm,fetchWord}) {
    const [error, setError] = useState(false);
    function handleSearch(e){
        e.preventDefault()
        const inputValue = e.target.searchInput.value.trim();

        if (e.target.searchInput.value === "") {
            setError(true)
            return;
        }
        setSearchTerm(e.target.searchInput.value)
        setError(false)
    }
    return (
        <>
            <div className="search-container">
                <div className={`searchBar ${error ? 'error' : ''}`}>
                    <form onSubmit={handleSearch}> 
                        {error ? <input type="text" name="searchInput" placeholder="Search for any word..."/> :
                        <input type="text" name="searchInput" placeholder="Search for any word.." />
                        } <button type="submit"><img src="images/icon_noir_search.svg" alt="" /></button>
                        {error && <p className="hoaydaa">Whoops, cant be empty...</p>}
                    </form>
                </div>
            </div>
        </>
    )
}
