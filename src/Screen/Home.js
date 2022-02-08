import React, { useState, useEffect } from 'react';
import "./Home.css";
import Product from '../component/Product';
import axios from "axios";

function Home() {

  const [products, setProducts] = useState([])



  useEffect(() => {
    const getProductHandler = async () => {
      try {
        const res = await axios.get('https://server.jerryroy.repl.co/api/product')
        setProducts(res.data.product)
      } catch (err) {
        console.log(err)
      }
    }
    getProductHandler()
  }, [])


  console.log(products)

  return (
    <div className='home'>
      <div className='home-left'>
        <div className='product-container'>
          {
            products.map((item)=>{
              return <Product product={item} key={item._id} setProducts={setProducts}  />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
