const Boxes = ({box, handleBox,selected,boxIndex}) => {

  return ( 
    <button disabled={selected.includes(boxIndex)} onClick={handleBox} className={`w-20 h-20 ${box?'visible':'invisible'} ${selected.includes(boxIndex)?'bg-green-500':''}  border-2 border-black/50 cursor-pointer`}></button>
   );
}
 
export default Boxes;