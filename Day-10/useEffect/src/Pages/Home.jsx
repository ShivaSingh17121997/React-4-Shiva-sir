import { useEffect, useState } from "react";

function Home() {
    const [count, setCount] = useState(0)

    const [data, setData] = useState(0);

    const handleCount = () => {

        setCount(count + 1)
    }

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setData(data)
            });
    }, []);




    return <>
        <h1>Home</h1>
        <h1>{count}</h1>
        <button onClick={handleCount} >Count</button>


    </>
}


export default Home;