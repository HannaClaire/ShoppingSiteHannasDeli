import { useParams } from "react-router-dom";

const Basket = ({ basketItems, deliGoods }) => {
    return (
        <div>
            <header>
                <h1>Here's what's in your basket so far!</h1>
            </header>
            {basketItems.map((itemId) => {
                const item = deliGoods.find((deliItem) => deliItem.id === itemId);
                if (item) {
                    return (
                        <div key={item.id}>
                            <p>{item.name}</p>
                        </div>
                    );
                }
                
            })}
        </div>
    );
};

export default Basket;

