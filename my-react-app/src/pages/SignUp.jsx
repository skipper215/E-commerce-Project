import LocalStorage from "../LocalStorage";

function SignUp() {

    const [user, setUser] = LocalStorage("user", "guest");
    const [password, setPassword] = LocalStorage("password", "guest");

    const handleSubmit = (e) => {
        e.preventDefault(); // Stop the form from reloading the page
        // check the database for the user and password 
        console.log("Submitted:", { user, password });
    }

    return (
        <>
            <h2>Not a member yet? Sign up here!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="sign-in-user"> Email Address: </label> 

                <input type="text"
                 id="sign-in-user" 
                 onChange={(e) => setUser(e.target.value)} /> <br></br> 

                <label htmlFor="sign-in-password">Password: </label>

                <input type="text" 
                id="sign-in-password"
                onChange={(e) => setPassword(e.target.value)} /> <br></br>

                <button type="submit">Submit</button> 
            </form>
        </>
    )
}

export default SignUp;