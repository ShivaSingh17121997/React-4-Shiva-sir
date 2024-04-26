import { useEffect, useReducer, useState } from "react";

function Home() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        console.log("email", email, "password", password)
        setEmail("")
        setPassword("")
    }

    function bajarangBali(val, val1) {
        return console.log("jai shree", val , val1)
    }



    return <>
        <h1>Counter</h1>

        <form onSubmit={handleForm} >

            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="enter email" />

            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" />

            <button>Login</button>

            <button onClick={() => bajarangBali("ram","shyam")} >bajarang</button>
        </form>


    </>
}


export default Home;