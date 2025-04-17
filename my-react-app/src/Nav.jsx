
import { Link } from "react-router-dom"

function Nav() {
    return(
        <>
            <nav className="navbar">
                <h2 className="logo"><Link to="/" >Clothing Store</Link></h2>
                <ul className="nav-links">
                    <li><Link to="/featured"> Featured </Link></li>
                    <li><Link to="/men"> Men </Link></li>
                    <li><Link to="/women"> Women </Link></li>
                    <li><Link to="/accessories"> Accessories </Link></li>
                </ul>

                <div className="account"> 
                    <ul className="account-links"> 
                        <li><Link to="/sign-in"> Sign In </Link></li>
                        <li><Link to="/cart"> Cart </Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav; 

