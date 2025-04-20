
import LocalStorage from "../LocalStorage";
import SignUp from "./SignUp";
import { useNavigate } from 'react-router-dom';

function SignIn({ setIsLoggedIn, user, setUser }) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Stop the form from reloading the page
        // check the array
        const userInput = e.target.user.value;
        const passwordInput = e.target.password.value;
        console.log("Submitted:", { user });
        user.forEach((account) => {
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

            <SignUp setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser}/>

        </>
    );
}

export default SignIn;