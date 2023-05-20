import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaFacebook, FaInstagram} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"
import {MdOutlineDone} from "react-icons/md"
import {GoLocation} from "react-icons/go"




const Home = () => {
    return (
        <>
            <div className="home-Container">
                <div className="home-Body-Container">

                    <div className="left-section">
                        <div className="left-body">
                        <div className="logo">
                        <img src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg " alt="logo" />
                        </div>
                            <div className="menu-section">
                            <Link to={"/Home"} style={{textDecoration:"none",color:"black"}}>
                            <h3>Home</h3>
                            
                            </Link>
                                <h3>Menu</h3>
                                <h3>Events</h3>
                                <h3>Blog</h3>
                                <h3>Landing</h3>

                            </div>
                            <div className="icon-Section">

                                {<AiOutlineTwitter style={{margin:"0.2rem"}}/>}
                                {<FaFacebook style={{margin:"0.2rem"}}/>}
                                {<FaInstagram style={{margin:"0.2rem"}}/>}
                                {<AiFillLinkedin style={{margin:"0.2rem",}}/>}
                            </div>
                            <div className="order-btn">
                                <button>OrderOnline</button>
                            </div>
                        </div>


                    </div>


                    <div className="right-section">
                        <div className="right-section-two">
                            <div className="right-section-in-left">
                                <div className="heading">
                                    <h1>Devlivery To The Door Step</h1>
                                    <p>{<MdOutlineDone style={{fontSize:"2rem"}}/>}Choose your interegnets</p>
                                    <p>{<MdOutlineDone style={{fontSize:"2rem"}}/>}Geet Free Delivery 27/7</p>
                                    <p>{<MdOutlineDone style={{fontSize:"2rem"}}/>}Sepcial Gift Coupons</p>

                                </div>
                                <div className="btn-section">
                                    <input type="text" placeholder='Email' />
                                    <button>Subscribe</button>
                                </div>
                                <div className="location">
                                    <h3>{<GoLocation/>}Check my delivery Zone</h3>
                                </div>
                            </div>
                            <div className="right-section-in-right">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-4CZBTPPrpgBfBDnL5D9MP0S2AywHP9O0g&usqp=CAU" alt="helo" />

                            </div>

                        </div>
                      
                    </div>





                </div>

            </div>

        </>
    )
}

export default Home