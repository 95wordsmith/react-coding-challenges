import React, { useState, useEffect } from "react";


const intital = 600
function getTime (){
  const storedtime = localStorage.getItem('currentTime')
  if(storedtime){
    return parseInt(storedtime)
  }
  return intital
}

const Timer = () => {
const [time,setTime]= useState(getTime())

useEffect(()=>{

  const interval =setInterval(()=>{
    setTime((prev)=>{
      if(prev ===0){
        return intital
      }
      localStorage.setItem('currentTime',prev-1)
      return prev-1
    })
  },1000)
  return ()=>clearInterval(interval)
},[])

const minutes = Math.floor(time/60)
const seconds = time%60
  return (
    <div>
      <h1>Countdown Timer</h1>
      <span>
      {minutes}:{seconds.toString().padEnd(2,'0')}
      </span>

    </div>
  );
};

export default Timer;
