import React, { useState, useEffect } from "react";
 
import formatCurrency from "../utilities/formatCurrency";

import { useShoppingBag } from "../context/ShoppingBagContext"; 

type ProductsItem = {
  id: number;
  productName: string;
  price: number;
  image: string;
};

// import { useDispatch } from "react-redux";
// import { addToBag } from "../redux/slice/BagSlice";

export function ProductItem({data}) {
  // const dispatch = useDispatch();
  // const addToBags = () => { 
  //   dispatch(addToBag({
  //     ...data,
  //     quantity:1
  //   }))
  // }
   
  return (
    <div  className="w-[200px] h-[auto] relative   rounded-sm bg-[white] shadow-2xl pb-[1rem] flex flex-col justify-center"    >
      <div className="image w-full h-[170px] relative flex items-center justify-center bg-[#191919]">
        <img src='/images/fold5.jpg' alt="" className="w-full h-[150px] object-contain" />
      </div>

      <div className="about-product px-[.5rem] py-[.25rem] text-center font-medium font-mono">
        <p>{data.productName}</p>
        <p className="mt-[1rem] text-[1.2rem]">{formatCurrency(data.price)}</p>
      </div>
 
        {
          2 >= 1 ? <div className="flex flex-col">

          <div className="quantity-product flex justify-center w-full gap-[.6rem] h-auto relative">
 
         <button  className="h-[30px] w-[30px] bg-black flex justify-center items-center"  > - </button>
 
           <p>1</p>
           
         <button  className="h-[30px] w-[30px] bg-black flex justify-center items-center" > +  </button>
 
       </div> 
 
         <button className="mt-[1rem] mx-[auto] py-[.3rem] px-[1rem] bg-[#B31312] rounded-lg text-[#161A30] font-semibold"  >
         Remove
         </button>
 
             </div> : null 
        } 

        <button className="bg-[#5FBDFF] mt-[1rem] py-[.3rem] w-[60%] mx-auto rounded-lg text-[.8rem]" >
           + Add to Bag
         </button>  
    </div>
  );
}
