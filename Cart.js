import React from 'react'
/* 
function Cart(props) {

  
  return (
    <div>
       <h1>{props.name}</h1>
    </div>
  )
}

export default Cart

 */


 export  function Callback({pass}) {

  const value1=123

   console.log(pass)
  return (
    <div>
      <button onClick={()=>pass(value1)}>pass to parent component</button>
      
    </div>
  )
}


