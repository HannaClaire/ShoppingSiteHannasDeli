import { Link } from 'react-router-dom'



const Navbar = () => {

    return (
    <>
        <ul>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/ProductList"> Deli Goods </Link>
            </li>
            <li>
                <Link to="/Basket"> Basket </Link>
            </li>
        </ul>
    </>
    )
}

export default Navbar