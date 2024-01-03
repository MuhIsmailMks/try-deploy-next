import React from 'react';
import StoreItems from '../data/products.json'
import formatCurrency from '../utilities/formatCurrency';

type typePropsBag = {
  isOpen:boolean 
  closeBag:boolean 
  id:number
}
 
  
export default function ShoppingBag( ) { 
  const gr = true;
  
  return ( 
   <div>
        <div className={`bag-container fixed left-0 top-0 translate-y-[100%]  z-[10] w-[100%] max-w-[100vw] duration-[.2s] h-full py-[1rem] px-[1.5rem] ${gr == true ? 'active' : ''}`}> 
          
          
          <h1 className='text-[2rem] font-mono text-center text-[black] font-semibold'>Bag</h1>
          <button id='close-bag' className='right-[2rem] absolute top-[2rem] w-[35px] h-[35px] cursor-pointer'   >
            <img src="../../public/close-item.svg" alt="" />
          </button>

          <div className="about-bag-product w-full relative flex justify-center gap-[1rem]">

            <div className="products-list  flex flex-col gap-[.5rem] w-[691px]">
              <div className="about-product mx-auto w-[100%] h-[50px] bg-white flex justify-end text-black items-center px-[.5rem] gap-[.3rem] shadow-[0px_13px_17.700000762939453px_-10px_rgba(0,0,0,0.25)] ">
              
              <div className='flex items-center justify-between w-full relative'>
                  <h2>Product List</h2>
                  <div className='flex items-center '>
                  <p className='w-[90px] text-center font-sans font-[500] '>Price</p>
                  <p className='w-[90px] text-center font-sans font-[500] '>Quantity</p>
                  <p className='w-[90px] text-center font-sans font-[500] '>Total</p>
                  <p className='w-[90px] text-center font-sans font-[500] '>Remove</p>
                  </div>
              </div>
              </div>

              <div className="product-list-container h-[350px] w-full relative overflow-y-auto flex flex-col gap-[.3rem]">
                
              </div>

            </div>

            <div className="price-product-container w-[40%]">
              <div className="price-container flex flex-col gap-[.7rem] relative w-[470px] h-[auto] shadow-[0px_4px_22.399999618530273px_1px_#00000040] rounded-[15px] font-medium text-[1.25rem] px-[1.75rem] py-[1rem] text-black">
                <h3>Total</h3>

                <div className="line my-[.3rem] w-full h-[1px] bg-[#D7D7D7]"></div>

                {/* payment checkout */}
                <div className="payment-checkout flex justify-between">
                  <p>payment method:</p>
                  <div className="payment flex gap-[.5rem]">
                  {[
                    { image: '../../public/mastercard-icon.svg' },
                    { image: '../../public/paypal-icon.svg' },
                    { image: '../../public/visa-icon.svg' },
                    { image: '../../public/debit-icon.svg' },
                  ].map((itemPayment, i) => (
                    <img key={i} src={itemPayment.image} className='h-[18px] w-auto' alt="" />
                  ))} 
                  </div>
                </div>

                <div className="line my-[.3rem] w-full h-[1px] bg-[#D7D7D7]"></div>

                {/* total items */}
                <div className="items flex justify-between">
                <p>Items</p>
                 <span>  </span>
                 </div>

                 {/* total-price */}
                <div className="total-price flex justify-between">  
                 <p>Total</p>
                 <span>
                  {
                      formatCurrency(2000)
                  }
                </span>
                </div>

                {/* discount */}
                 <div className="discount flex justify-between"> 
                  <p>discount</p>
                  <span> 
                  -{
                    formatCurrency(200)
                   }
                  </span>
                 </div>

                 <div className="line my-[.3rem] w-full h-[1px] bg-[#D7D7D7]"></div>

                 {/* subtotal */}
                <div className="subTotal flex justify-between">
                  <p>Subtotal</p>
                  <span> 
                  
                  </span>
                </div>

                <button className='bg-[#439CEF] text-[white] w-[180px] h-[40px] rounded-[5px] mx-auto'>Checkout</button>

              </div>

             <div>
             <div className='total-price flex items-center'>
                <h1 className='text-black font-semibold'>Total :</h1>
                <h2 className='text-black'> 
               
                </h2>
              </div>
              <div className='total-discound flex items-center'>
                <h1 className='text-black font-semibold'> Discount :</h1>
                <h2 className='text-black'>  - 
                {
                  formatCurrency(92034)
                }
                </h2>
              </div>
              <div className='total-price-after-discount flex items-center'>
                <h1 className='text-black font-semibold'>Total Price :</h1>
                <h2 className='text-black'> 
                {/* {formatCurrency(bagItems.reduce((total,bagItem) => {
                  const item = StoreItems.find(i => i.id === bagItem.id)
                  return total + (item?.price || 0)  * bagItem.quantity
                  }, 0))
                } */}
                </h2>
              </div>
             </div>
        
            </div>

          </div>

        </div>  
   </div>
  )
}
