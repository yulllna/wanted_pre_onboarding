import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'

function Dropdown(props) { 
    const symbols = ['All Symbol', 'BTCUSD.PERP', 'ETHUSD.PERP', 'BCHUSD.RERP', 'LTCUSD.PERP', 'XRPUSD.PERP'];
    const [Selected, setSelected] = useState(symbols[0]);
    const [searchValue, setSearchValue] = useState("");

    var listItems = symbols.map(function(string, index){
        return <li key={index}
                onClick={(e)=>{
                const { innerText } = e.target;
                setSelected(innerText);
                }}>{string}</li>;
    });
    const handleInputChange = (event) => {
        console.log(event.target.value);        
        setSearchValue(event.target.value)
    }
    return ( 
        <div className='container'> 
            <div className='dropdown-container'> 
                <div className='dropdown-box'>
                        <input 
                        id='dropdown'
                        className='dropdown-checkbox' type="checkbox"
                        value={searchValue}/>
                        <label className="dropdownLabel" htmlFor="dropdown">
                            <span>{Selected}</span>
                            <FontAwesomeIcon 
                            icon={faCaretDown}
                            className="arrow-icon" />
                        </label>
                    <div className='select-box'>
                        <div>
                            <FontAwesomeIcon 
                            icon={faSearch}
                            className="search-icon" />
                            <input 
                            className='db-search'
                            id='db-search'
                            type="search"
                            placeholder='Search Symbol'
                            name='search'
                            onChange={handleInputChange}>
                            </input>
                        </div>
                        <ul className='symbol-list'>
                        {listItems}
                        </ul>
                    </div>
                </div>
            </div> 
        </div> 
    ); 
} 
export default Dropdown;
