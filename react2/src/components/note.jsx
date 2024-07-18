import { forwardRef } from "react";

const Note = forwardRef(({content,initalPos ,...props},ref) => {
  return ( 
    <div ref={ref} 
    style={{
      position:'absolute',
      left: `${initalPos?.x}px`,
      top:`${initalPos?.y}px`,
      border:'1px solid black',
      userSelect:'none',
      padding:'10px',
      width:'200px',
      cursor:'move',
      backgroundColor:'lightyellow'
    }}
    {...props}
    >
      📌{content}</div>
   );
})
 
export default Note