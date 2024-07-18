const Item = ({data,handleSelect,selected,status}) => {

  let border = ''

  if(selected.includes(data) && status===null){
    border = 'border-blue-600'
  } else if(selected.includes(data) && status ==='correct'){
    border = 'border-[#66cc99]' 
  } else if (selected.includes(data) && status ==='wrong'){
    border = 'border-red-400'
  } else {
    border ='border-[#414141]'
  }

  return ( 
    <>
    <button disabled={selected.includes(data)} onClick={handleSelect} className={`bg-gray-100 cursor-pointer ${border} font-medium border-2 rounded-md p-4`}>{data}</button>
    </>
   );
}
 
export default Item;