import { useParams } from "react-router-dom"
import Product from "./Product"
import { Link } from "react-router-dom"



const ProductList = ({ deliGoods, addToBasket}) => {
    return (
        <div>
            <header>
                <h1> Deli Goods </h1>
            </header>
            {deliGoods.map((goods) => (
                <div key={goods.id}>
                <Link to={`/product/${goods.id}`}>
                <p>{goods.name}</p>
                </Link>
        
                <button onClick={() => addToBasket(goods.id)}> Add To Basket </button>
                </div>
            ))}
            <Link to="/Basket"> View Basket </Link>
        </div>
    )
}




export default ProductList