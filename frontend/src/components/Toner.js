import React, {useState,useEffect} from 'react';
import axios from 'axios';
import HomeNavBar from './HomeNavBar';
import {Row,Container} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ViewToner from './ViewToner';


export default function Toner() {

    const [products,setProducts] = useState([]);

   
    useEffect(() =>{

        function getProducts() {
            axios.get("http://localhost:5000/product/view").then((res) => {

                setProducts(res.data);
            }).catch((err) => {

                alert(err.message);
            })
        }

        getProducts();

    }, [])

    return (
        <>
            <HomeNavBar/>

           <Container className='justify-content-center p-2'>
           <Row>
              {products.map((product)=> {
                  return(
                    <ViewToner product={product}  />
                  )
              })}
           </Row>
           </Container>
            
                
            
        </>
    )
}