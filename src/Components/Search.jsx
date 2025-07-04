import { useState } from "react";
import Noir from "../images/icon_noir_search.svg"
export default function Search({searchTerm, setSearchTerm, fetchWord}) {
    const [error, setError] = useState(false);

    function handleSearch(e) {
        e.preventDefault();

        const inputValue = e.target.searchInput.value.trim();

        if (inputValue === "") {           // <--- BURADA TRIM KULLAN
            setError(true);
            return;
        }
        setSearchTerm(inputValue);         // <--- ARANAN KELİMEYİ TRIM’LE SET ET
        setError(false);
    }
    return (
        <>
            <div className="search-container">
                <div className={`searchBar ${error ? 'error' : ''}`}>
                    <form onSubmit={handleSearch}> 
                        <input type="text" name="searchInput" placeholder="Search for any word..." />
                        <button type="submit" style={{ border: 'none', padding: 0, backgroundColor: 'transparent' }}>
                            <img src={Noir} alt="" />
                        </button>
                    </form>
                </div>
                {error && (
                    <span className="error-message">
                        <p className="hoaydaa">Whoops, cant be empty...</p>
                    </span>
                )}
            </div>
        </>
    )
}
