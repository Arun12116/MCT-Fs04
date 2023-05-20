import React from 'react'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./ProductDeatiles.css"
const ProductDeatiles = () => {
    const { id } = useParams();
    // console.log(id);
    const [singleItems, setSingleItems] = useState({});
    console.log(singleItems);


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`).then((res) => {
            res.json().then((data) => {
                // console.log(data);
                setSingleItems(data)
            })

        })

    }, [id])

    return (
        <>

            <div className="single-items-Container">
                <div className="First">
                    <div className="single-items-Body">
                        <div className="image">
                            <img src={singleItems.image} alt="singleimg" />
                        </div>

                    </div>
                    <div className="second">
                        <div className="about">
                            <div className="about">
                                <h3>{singleItems.title}</h3>
                                <p>Rate:{singleItems.rate}</p>
                                <p>Price$:{singleItems.price}</p>
                                <p className='decrip'>{singleItems.description}</p>
                            </div>
                            <div className="btn">
                                <Link to={"/Order"}>
                                    <button>Add To Cart</button>

                                </Link>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default ProductDeatiles