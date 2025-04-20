
import LocalStorage from "../LocalStorage";
import SignUp from "./SignUp";
import { useNavigate } from 'react-router-dom';

function SignIn({ setIsLoggedIn }) {
    console.log(setIsLoggedIn);
    const navigate = useNavigate();
    const [user, setUser] = LocalStorage("user", [{key: "guest", value:"guest"}]);

    const handleSubmit = (e) => {
        //localStorage.clear(); // Resets everything (use carefully)
        e.preventDefault(); // Stop the form from reloading the page
        // check the database (user and pass variable here) for the user and pass  
        const userInput = e.target.user.value;
        const passwordInput = e.target.password.value;
        console.log("Submitted:", { user });
        user.forEach((account) => {
            console.log(account)
            console.log(account.key)
            console.log(account.value)
            if(account.key === userInput && account.value === passwordInput) {
                console.log("valid account");
                setIsLoggedIn(true);
                navigate('/account');

            } else {
                console.log("invalid")
            }
        })
        
    }

    return(
        <>
            <h2>Sign in:</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="sign-in-user"> Email Address: </label> 

                <input type="text" name="user"
                 id="sign-in-user" 
                 /> <br></br> 

                <label htmlFor="sign-in-password">Password: </label>

                <input type="text" name="password"
                id="sign-in-password"
                /> <br></br>

                <button type="submit">Submit</button> 
            </form>

        </>
    );
}

export default SignIn;