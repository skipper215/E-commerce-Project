import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search({ products }) {
    console.log(products);
    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    
    const onChange = (e) => {
        const input = e.target.value;
        if(!input) return setSuggestions([]);  
        setSuggestions(
            products
            .filter(p => p.name.toLowerCase().includes(input.toLowerCase()))
            .slice(0, 5) // returns top 5 items relevant
        );
        console.log(suggestions);
    } 

    
    const select = (product) => {
        console.log(product.loc);
        
        navigate(product.loc?.[0] || "/");
        
    }
    

    return (
        <>
            <input className="search-input" 
                    type="text"
                    onChange={onChange}
                    placeholder="Search products..." 
            />
            {suggestions.length > 0 && 
            (<ul className="suggestions">
                {suggestions.map(product => 
                    (<li onClick={() => select(product)}>
                        <img style={{height: "100px"}} src={product.img} /> <br />
                        {product.name} 
                    </li>))}
            </ul>)
            }
            

        </>
        
    )
    
}

export default Search;