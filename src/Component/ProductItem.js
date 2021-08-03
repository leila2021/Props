import React from 'react'
import { Button } from 'react-bootstrap'

const ProductItem = ({item,fonct}) => {
    return (
      <tr>
          <td>  <Button onClick={() =>fonct(item.name)} variant="primary">Primary</Button>{' '}</td>
          <td>
              <img src={item.imgSrc} alt=""/>
          </td>
          <td>{item.name}</td>
          <td>{item.price}</td>
      </tr>
    )
}

export default ProductItem
