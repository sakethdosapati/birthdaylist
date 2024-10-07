import React, { useState } from 'react'
import db from './db'
import "./App.css"

function App() {
  const[data,setData] = useState(db);
  return (
    <div>
      <h2>{data.length} Birthdays Today</h2>
      {data.map((x,y)=>{
        return(
          <div id='main' key={y}>
          <div >
          <img src={x.image} alt="images" style={{width:"150px",height:"150px"}} />
          </div>
          <div id='sub'>
          <h3>{x.name}</h3>
          <p>{x.date}</p>
          </div>
          </div>
        )
      })}
      <button onClick={()=>setData([])}>ClearAll</button>
    </div>
  )
}

export default App
