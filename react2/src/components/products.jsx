const Product = ({title, description,price,icon,addToCart}) => {
  return ( 
    <div className=" bg-gray-200/50 border-1 p-6 rounded-lg">
      <h1 className="text-xl font-bold">{title}</h1>
      {icon}
      <p className="text-lg tracking-tight">{description}</p>
      <p className="text-red-400 text-sm">${price}</p>
      <button onClick={addToCart} className="border-1 p-2 bg-slate-600/40 rounded-md">Add To Cart</button>
    </div>
   );
}
 
export default Product;