export const Toppings = () => {
    let toppings = ['Mushrooms','Pepperoni','Onions', 'Extra cheese', 'Olives', 'Tomatoes']
    return ( 
        <div className="toppings container">
            <h3>Step 2: Choose Toppings</h3>
            <ul>
                {toppings.map(topping => <li>{topping}</li>)}
            </ul>
            <Link to="order">
            <button>
                Order
            </button>
            </Link>
        </div>
     );
}