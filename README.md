This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


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






// [
//   {
//     "imageProduct": "earbudsV5",
//     "ratingProduct": 4.5,
//     "totalSales": 39,
//     "favoriteCount": 13,
//     "favoriteState": false,
//     "nameProduct": "Earbuds v5",
//     "PriceProduct": "80.99",
//     "offSell": "95",
//     "newProduct": true
//   },
//   {
//     "imageProduct": "microphoneElgato",
//     "ratingProduct": 5,
//     "totalSales": 23,
//     "favoriteCount": 5,
//     "favoriteState": false,
//     "nameProduct": "Elgato wave 3 | microphone ",
//     "PriceProduct": "189.89"
//   }
// ]




    {/* hero products */}
      <div className="hero-product  w-full h-[603px] relative xl-desktop:h-[900px]  max-s-desktop:h-[40vw] s_desktop-xl_tablet:h-[40vw] mobile:mt-[3rem] mobile:h-[40vw] phone:mt-0 phone:h-[75vw]">
        <SwiperSlides />
      </div>

      {/* special products */}
      <div  className={`special-products relative max-w-[100%]  ${dimension.Wfull_hAuto}`}
      >

       <div className={`title-special-product ${layout.flexStart} px-[2rem] phone-tablet:justify-center`}>
         <TitleSectionM   text={'Special product'}  />
       </div>
 
         {/* special products container*/}
        <div   className={`special-products-container  ${dimension.Wfull_hAuto} ${dimension.specialProductContainer} ${layout.flexBetweenItemsStart}`}  >
          {/* col1 left*/}
          <div
            className={`h-[auto] w-[932px] max-w-[70%] relative ${layout.flexDirection} gap-[1.45rem] s_desktop-xl_tablet:gap-[1.7vw] s-tablet:max-w-[90%] s-tablet:gap-[1vw]  phone:max-w-[100%] phone:gap-[.4rem] `}
          >
            {/* top */}
            <div
              className={`${layout.flexBetween} ${dimension.specialProductLeftContainer} `}
            >
              <SpecialProductSmallContainer
                imageProduct={specialProduct1}
                altImage={"logitech G502 X Plus"}
                brandProduct={"Logitech"}
                nameProduct={"G502 X Plus"}
              />

              <SpecialProductMediumContainer
                bgImageProduct={bgSpecialProduct2}
                imageProduct={specialProduct2}
                altImage={"Ring Car Cam"}
                brandProduct={"Ring"}
                nameProduct={"Car Cam"}
              />
            </div>

            {/* bottom */}
            <div
              className={`${layout.flexBetween} flex-row-reverse ${dimension.specialProductLeftContainer}`}
            >
              <SpecialProductSmallContainer
                imageProduct={specialProduct4}
                brandProduct={"Sony"}
                nameProduct={"WF-1000XM5"}
              />

              <SpecialProductMediumContainer
                bgImageProduct={bgSpecialProduct3}
                imageProduct={specialProduct3}
                altImage={"Unistellar eQuinox 2 Smart Telescope"}
                brandProduct={"Unistellar"}
                nameProduct={"eQuinox 2 Smart Telescope"}
              />
            </div>
          </div>

          {/* col2 right*/}
          <div
            className={`relative ${dimension.specialProductRightContainer}  bg-black `}
          >
            <SpecialProductLargeContainer
              bgImageProduct={bgSpecialProduct5}
              imageProduct={specialProduct5}
              altImage={"Apple’s the AirPods Max 2"}
              brandProduct={"Apple’s"}
              nameProduct={" AirPods Max 2"}
            />
          </div>
        </div>

      </div>

      {/* our products */}
      <div className="our-products my-[3rem] mx-[auto]">
        <div
          className={`products-title ${layout.flexCenter} ${dimension.Wfull_hAuto} relative`}
        >
          <h2
            className={`relative font-[700] s-desktop:text-[2.5rem] tablet:text-[1.8rem] phone:text-[1.6rem] leading-[1] `}
          >
            Our Products
          </h2>
        </div>

        <div
          className={`products-container mt-[4rem] mx-[auto] max-w-[1700px] ${layout.flexStart}   content-start  flex-wrap ${dimension.Wfull_hAuto} s-desktop:px-[2rem] tablet:px-[2.5rem] phone:px-[1.5rem] gap-[1.5rem]`}
        >
          <Cards />
        </div>
      </div>




      {/* percobaan untuk card */}
      <div className="w-[300px] h-[200px] max-w-[100%] bg-black relative mt-[14rem] mx-[auto]">
        <RatingProduct />
      </div>

 
      
      <Link href='/shoppingBag'>To bag</Link>


      