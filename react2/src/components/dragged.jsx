import { useState } from "react";
import Notes from "./notes";
const Dragged = () => {
  const [notes,setNotes]= useState([
    {
      id:1,
      text:'Check the description for my course '
    },
    {
      id:2,
      text:'Like this video and subscribe to it '
    }
  ])

  return ( 
    <div>
    <Notes notes ={notes} setNotes = {setNotes}/>
    </div>
   );
}
 
export default Dragged;