import React from 'react'
import { useFetch } from './2-useFetch'


const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const { loading, products } = useFetch(url)  
  console.log(products);
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
      <ul>
        {products.map((product) => <li key={product.id}>
            <div>
                <img src="https://images2.imgbox.com/89/59/6An8aqJL_o.jpeg"
 alt="" />
                <h3> {product.fields.name}</h3>
                <h4>{product.fields.price}</h4>
            </div>
        </li>)}
      </ul>
    </div>
  )
}

export default Example