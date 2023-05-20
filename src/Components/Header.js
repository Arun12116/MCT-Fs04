import React from 'react'

import { useState, useEffect } from "react"
import Cardss from '../Pages/Cardss';
const Header = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((response) => {
            response.json().then((data) => {
                setProduct(data)

            })
        })

    }, [])
    return (
        <>
        <div className="header" style={{  width: "81.90vw", height: "90vh",  marginLeft:"18rem"}}>
        <Cardss Data={product}/>
        
        
        </div>
        
                    

        </>
    )
}

export default Header