import React, { useEffect, useState } from 'react'

const LiveClock = () => {
    const [time,setTime]=useState(new Date())

    useEffect(() => {
        const inetrval=setInterval(() =>{
            setTime(new Date())
        },1000)

        return () => clearInterval(inetrval)
    },[])

    const montrealTime= time.toLocaleString('en-US',{
        timeZone:'America/Montreal',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false
    })
  return (
    <div>
        <h6>{montrealTime}</h6>
    </div>
  )
}

export default LiveClock