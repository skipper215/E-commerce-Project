import { useNavigate } from "react-router-dom";

function SignUp({ setIsLoggedIn, user, setUser }) {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userInput = e.target.user.value;
        const passwordInput = e.target.password.value; 

        console.log("user:", user);
        console.log("typeof user:", typeof user);
        console.log("isArray:", Array.isArray(user));
        setUser([...user, {key: userInput, value: passwordInput}])
        setIsLoggedIn(true);
        navigate("/account");

    }

    return (
        <>
            <h2>Not a member yet? Sign up here!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="sign-up-user"> Email Address: </label> 

                <input type="text" name ="user"
                 id="sign-up-user" /> <br></br> 

                <label htmlFor="sign-up-password">Password: </label>

                <input type="text" name ="password"
                id="sign-up-password" /> <br></br>

                <button type="submit">Submit</button> 
            </form>
        </>
    )
}

export default SignUp;