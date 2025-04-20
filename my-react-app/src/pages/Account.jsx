import { useNavigate } from 'react-router-dom';

function Account({ setIsLoggedIn }){

    const navigate = useNavigate();
    
    const handleLogOut = () => {
        console.log("logging out");
        setIsLoggedIn(false);
        navigate("/");
    }

    return (
        <>
            <h1>My Account</h1>
            <button onClick={handleLogOut}>Log out</button> 
        </>
    )
}

export default Account;