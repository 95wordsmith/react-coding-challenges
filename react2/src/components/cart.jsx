const Cart = ({title,price}) => {
  return ( 
  <div className="bg-red-300/20 w-full p-4 border-b-2">
    <h1 className="text-lg font-semibold">{title}</h1>
    <span className="text-red-300">${price}</span>
  </div> );
}
 
export default Cart