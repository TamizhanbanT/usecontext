import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';

import Navbar1 from './Navbar';

import "./context.css";

import SimpleImageSlider from "react-simple-image-slider";







function Usecontext1() {

    let data = require('./product2.json');
    
    const[Cartvalue,Setcartvalue]=useState(0)

    

   function Card(){

     const[Image,SetImage]=useState(0)

     const[Cart,Setcart]=useState([])

     

        function Addtocart(id){
               if(!Cart.includes(id)){
                Setcart((x)=>[...x,id])}  
                
                Setcartvalue(Cart.length)
                console.log(Cart)
                }
                /* console.log(Cart) */

       

    


    let data1=data.products.map((x)=>{

       
        return(
          <div>
            <div class="container">
                <div class="card">
              {/*   <img  class="card-img-top" src={x.images[0]} /> 
                       <div class="img">{image}</div>  */}

                         <SimpleImageSlider
                             width={300}
                             height={250}
                             images={x.images}
                              showBullets={true}
                             showNavs={true}
                             autoPlay={true} 
                              onStartSlide = {(index, length) => {
                               SetImage(index);
                                       }}
                                autoPlayDelay = {100}
                          />
                    <div class="card-body">
                                         
                        <h4 class="card-title">{x.title}</h4>

                        <h5>{x.category}</h5>
                                              
                        <p class="card-text">  Price$:{x.price}  </p>

                         <Button variant="outline-dark" onClick={()=>Addtocart(x.id)}>Add to cart</Button>                
                     </div>
                </div>
            </div>
         </div>
        )
    })
    
    return(data1)

   }


  return (
    <div>
      
       <Navbar1 value={Cartvalue}></Navbar1>    

      

      <div class="cards">{Card()}</div>
    </div>
  )
}

export default Usecontext1
