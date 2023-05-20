import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"
const Cardss = ({Data}) => {
  // console.log(Data);


  return (
    <div>
    <div className="Container" style={{ display: "flex", flexWrap: "wrap" , gap:"4rem" }}>

    {
      Data.map((items, id) => {
        return <Card key={id} style={{width:'25rem', marginTop: "2rem", alignItems: "center", }}>
          <Card.Img variant="top" src={items.image} style={{ width: "10vw", height: "20vh", marginTop: "1rem" }} />
          <Card.Body style={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
            <Card.Title>{items.title}</Card.Title>
            <Card.Title>Category:{items.category}</Card.Title>
            <Card.Title>Rating:{items.rating.rate}</Card.Title>

            <Card.Title>Price$:{items.price}</Card.Title>
          <div className="Container" style={{display:"flex",alignItems:"center",gap:"2rem"}}>
          <Link to={"/Cart"}>
          <Button variant="warning">Add To Cart</Button>
          
          </Link>
          <Link to={`/Product/${items.id}`} >
          <Button variant="secondary">Quick View</Button>
          
          </Link>

          </div>
           
            
          
          </Card.Body>
        </Card>


      })

    }
  </div>
    
    
    </div>
  )
}

export default Cardss