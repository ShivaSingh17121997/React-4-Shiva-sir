// use of useEffect hook

import React, { useEffect, useState } from 'react'

export default function Home() {
    const [product, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProducts(data)
            })
            .catch((err) => {
                console.log("kuch to gadbad hai")
            });
    }, [])

    return (
        <div>
            {
                product.map((item, i) => {
                    return <>
                        <img width="300px" src={item.image} />
                        <h1>{item.title}</h1>

                    </>
                })
            }

        </div>
    )
}
