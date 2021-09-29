import React from 'react';
import Product from '../components/Product';
import { Link } from 'react-router-dom'
const ProductsPage = ({match}) => {
    return ( 
        <>
          <div>Strona produktu</div>
          <Product id={match.params.name}/>
          <Link to="/products">Powrót do listy produktów</Link>
        </>
        
     );
}
 
export default ProductsPage;