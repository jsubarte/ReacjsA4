import React from 'react';

function SearchBar({value, onSearch}){

    return (
        <form className="container-fluid mt-3">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" value={value} onChange={(clave) => {onSearch(clave.target.value)}} />
            </div>
        </form>
    );

}

export default SearchBar;