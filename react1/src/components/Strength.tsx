

const Strength = ({password}:{password:string}) => {
  const strength = 
  password.length === 0 
    ? '' 
    : password.length > 0 && password.length <= 4 
      ? 'Small' 
      : password.length > 4 && password.length < 8 
        ? 'Medium' 
        : 'High';

  return ( 
    <div className='flex justify-between'>
    <h1>Strength:</h1>
    <h1>{strength}</h1>
    </div>
   );
}
 
export default Strength;