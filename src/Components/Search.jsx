import { useState } from "react";

export default function Search({searchTerm, setSearchTerm,fetchWord}) {
    const [error, setError] = useState(false);

    function handleSearch(e){
        e.preventDefault()
        if (e.target.searchInput.value === "") {
            setError(true)
            return
        }
        setSearchTerm(e.target.searchInput.value)
        setError(false)
    }
    return (
        <>
            <div className="search-container">
                <div className="searchBar">
                    <form onSubmit={handleSearch}>

                    </form>
                </div>
            </div>
        </>
    )




}
