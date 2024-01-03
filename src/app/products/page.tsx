'use client'

// react
import React from 'react'; 
import Navigation from '../components/Navigation';
import { dimension, layout } from '../styles';
import Image from 'next/image';

// data
import dataProducts from '../data/products.json' 
import { ProductItem } from '../components/CardProduct';  

//redux  https://chat.openai.com/c/15a9955e-bec3-4f39-a67a-ce0a24c33ddf

// image
import mainImage from '../images/main-image-products.webp' 
import mainImageTablet from '../images/main-image-products-tablet.webp' 
import mainImagePhone from '../images/main-image-products-handphone.webp' 
import { Provider } from 'react-redux';

export default function products (){ 

  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const { width } = dimensions;  

  const widthMainImage = () => {
    if(width >= 1100){
      return mainImage
    } else if  (width <= 1100 && width >= 600){
      return mainImageTablet
    } else if (width <= 600){
      return mainImagePhone
    }
  }
 
  return (
    <main>
      <Navigation/>
      
      <div className={`product-container ${dimension.Wfull_hAuto} relative`}> 

       <div className={`main-image ${dimension.Wfull_hAuto} relative bg-[#222222] ${layout.flexCenter}`}> 
           <Image 
             src={widthMainImage()}
             alt="main image"
           />
       </div>


        {/* products */}
       <div className={`all-products ${dimension.Wfull_hAuto} relative min-h-[100vh]`}>

        <div className="products-title">

        </div>
        <div className={`products-container my-[3rem] px-[1.6rem] ${layout.flexCenter} flex-wrap gap-[2rem]`}>   
           {
            dataProducts.map(item => (
              <ProductItem data={item} key={item.id}/> 
            ))
          } 
         
        </div>
       </div>

      </div>

    </main>
  )
}

 