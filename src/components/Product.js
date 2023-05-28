import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import styled from "styled-components";



const Product = ({ deliGoods, addToBasket }) => {
const {id} = useParams()
const [product, setProduct] = useState({})


//needed this as it would configure the product once the id had been found (hadnt been found prior)
useEffect(() => {
const productId = parseInt(id)
//finds the item in deliGoods that has an id that matches the productId
const foundProduct = deliGoods.find((deliItem) => deliItem.id === productId)
if (foundProduct) {
    setProduct(foundProduct)
}    
},[id])





return (

<div>
<ul>
        
        <li>Product: {product.name}</li>
        <li>Description: {product.description}</li>
        <li>
        <ProductImage img src={product.imageUrl} alt="goods.name"/>
        </li>
        <li>In Stock: {product.amount}</li>
        <li>£{product.price}</li>
        <button onClick={() => addToBasket(product.id)}> Add to Basket </button>

</ul>
</div> 

    )
}

const ProductImage = styled.img`
    width: 100px;
    height: 100px;
    opacity: 0.8;
`
export default Product