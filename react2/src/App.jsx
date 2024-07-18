import { useState } from "react";
import TicTacToe from "./components/tic-tac-toe";
import "./App.css";
import Timer from "./components/timer";
import Product from "./components/products";
import Cart from "./components/cart";
import CartProvider from './context/context'
import { useContext } from "react";
import { Cartcontext } from "./context/cart";
// import { Cartcontext } from "./context/context";
import Dragged from "./components/dragged";

const PRODUCTS = [
  {title: "Car", description: "An amazing Ride", price: 8000, icon: "🚗" },
  { title: "Book", description: "An amazing Book", price: 40, icon: "📕" },
  {
    title: "Microwave",
    description: "An amazing Heat Maker",
    price: 300,
    icon: "🥵",
  },
  {
    title: "Video-Game",
    description: "The Game of the year",
    price: 400,
    icon: "🎮",
  },
];

function App() {
  const {cart,addToCart}= useContext(Cartcontext)
  const [product] = useState(PRODUCTS);
  const [showCart,setShowCart]=useState(false)

  console.log(cart)


  return (
    <>
      <TicTacToe />
    <CartProvider>

      <button
        onClick={() => setShowCart((prev) => !prev)}
        className="bg-black/30 py-3 px-2 rounded-sm text-white"
      >
        Show Cart
      </button>
      {showCart &&
        cart.length > 0 &&
        cart.map((ele) => <Cart key={ele.title} {...ele} />)}
      <Timer/>
      <div className="flex justify-around py-10  flex-wrap">
        {product.map((ele) => (
          <Product addToCart={() => addToCart(ele)} key={ele.title} {...ele} />
        ))}
      </div>
    </CartProvider>
      <Dragged />
    </>
  );
}

export default App;
