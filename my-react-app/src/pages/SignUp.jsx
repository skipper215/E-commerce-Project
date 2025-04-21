import { useNavigate } from "react-router-dom";
import { useState } from 'react'

function SignUp({ setIsLoggedIn, user, setUser }) {

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const userInput = e.target.user.value;
        const passwordInput = e.target.password.value; 
        
        //check for duplicate emails 
        const emailExists = user.some((user) => user.key === userInput);
        if(emailExists) {
            console.log("email address already exists");
            setError("email address already exists");
        } else if(!passwordInput) {
            setError("No password entered!");
        } else {
            setUser([...user, {key: userInput, value: passwordInput}])
            setIsLoggedIn(true);
            setError("");
            console.log("user:", user);
            navigate("/account");
            
        }
        

    }

    return (
        <>
            <h2>Not a member yet? Sign up here!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="sign-up-user"> Email Address: </label> 
                <input type="text" name ="user" id="sign-up-user" /> 
                <br></br>

                <label htmlFor="sign-up-password">Password: </label>
                <input type="text" name ="password"
                id="sign-up-password" /> 
                <br></br>

                <button type="submit">Submit</button> 
            </form>

            {error && <p style={{color: "red"}}>{error}</p>} <br></br> 
                 
            
        </>
    )
}

export default SignUp;