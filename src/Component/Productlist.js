import React from 'react';
import { Table } from 'react-bootstrap';
import ProductItem from './ProductItem';

const Productlist = ({produits}) => {
    const handelclick=(ch) => {
        alert(`le nom de produit est ${ch}`)
    }
    return (
        <div>
         <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th> produit</th>
      <th>nom</th>
      <th>prix</th>
    </tr>
  </thead>
  <tbody>
{
    produits.map((el)=> (
        <ProductItem item={el} fonct={handelclick}/>
    )



    )
}
  </tbody>
</Table>
        </div>
    )
}

export default Productlist
