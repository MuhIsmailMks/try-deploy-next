import React from 'react' 
import storeItems from '../data/products.json';
import formatCurrency from '../utilities/formatCurrency';

type CartItem = {
    id :number
    quantity : number
    price: number
}

export default function BagItem({id,quantity}:CartItem) { 
  const item = storeItems.find(i => i.id === id);
  if(item == null) return null 

  return (
    <div className="shopping-bag mx-auto w-[100%] h-[110px] min-h-[100px] relative bg-[white] shadow-[10px_13px_17.700000762939453px_-10px_rgba(0,0,0,0.25)] flex items-center justify-between px-[.5rem]" key={id} >

            <section className='h-[100%] w-[auto] relative flex'>
              <div className="image-product h-[100%] w-[140px] flex items-center justify-center ">
                <img src={`../../public/${item.image}`} alt="" className='h-[90px] w-[90px] object-contain my-auto' />
              </div>
              <p className='w-[100px] py-[.8rem] text-[black] font-medium text-[1.1rem]'>{item.productName}</p>
            </section>

            <div className='h-[100%] flex items-center  text-[.938rem]'>
              <p className='w-[90px] text-black text-center font-sans font-[500] '>{formatCurrency(item.price)}</p>
              <p id='quantity-text' className='w-[90px] text-black text-center font-sans font-[500] '>{quantity}</p>
            

              <div id='price' className='w-[90px] relative  '>
                 <p className=' line-through text-left text-[.8rem] text-[red]'>
                  {
                   item.discount? formatCurrency(item.discount + item.price * quantity) : null
                  }
                  </p>
                  <p id='total-price' className=' w-[90px] text-black  font-sans font-[500] '>{formatCurrency(item.price * quantity)}</p>
              </div> 

              <div className="remove-item  relative w-[90px]  h-[100%] cursor-pointer flex justify-center items-center" >
                 <img src="../../public/remove- product-icon.svg" alt="" 
                 className='w-[auto] h-[31.05px] object-cover'/>
              </div>

            </div>

            {/* <p className='absolute bottom-0 right-[3rem] text-black line-through'>{item.discount? formatCurrency(item.discount * quantity) : null}</p> */}

          
          </div>   
  )
}
