export const layout = {
    flexCenter: 'flex justify-center items-center',
    flexCenterItemsStart: 'flex justify-center items-start',
    flexStart: 'flex justify-start items-center',
    flexBetween: 'flex justify-between items-center',
    flexBetweenItemsStart: 'flex justify-between items-start',
    flexEnd: 'flex justify-end items-center',
    flexDirection: 'flex flex-col items-start',
}

export const dimension = {
    Wfull_hAuto : 'w-[full] h-[auto]',

    // hero product button
    viewProduct: 'w-[164px] h-[32px] tablet:h-auto tablet:w-[140px] xl-phone:h-[25px] xl-phone:w-[110px]  x-phone:h-[19px] x-phone:w-[90px]',


    // title line
    sectionProductTitleLine:'w-[50%] h-[3px] absolute bottom-0 left-0  bg-primary-color phone:h-[1.5px]',


    // special product container size
    specialProductContainer:" max-w-[1420px] my-[1rem] mx-auto px-[3.5rem] s_desktop-xl_tablet:px-[1.5rem] s-tablet:px-[1rem] s-tablet:flex-col s-tablet:gap-[1vw] s-tablet:items-center phone:px-[1rem] phone:flex-col phone:gap-[.45rem]",
    specialProductLeftContainer:"x-desktop:h-[240px] s_desktop-xl_tablet:h-[17vw] gap-[1.5rem]  w-full s_desktop-xl_tablet:gap-[0rem]   s-tablet:h-[20vw]  s-tablet:gap-[0]  phone:h-[42vw] phone:min-h-[200px] phone:flex-col phone:gap-[0rem] phone:justify-between",
    specialProductRightContainer:" x-desktop:h-[500px] x-desktop:w-[364px] s_desktop-xl_tablet:h-[35.5vw] h-min-[400px] s_desktop-xl_tablet:w-[28%] s-tablet:h-[39vw]  s-tablet:w-[35%]  phone:h-[43vw] phone:w-[80%] phone:max-w-[240px]  phone:mx-auto  phone:min-h-[210px]" ,

    // special product size
    // special product small size
    specialProductSmall:"x-desktop:w-[370px] h-[240px] s_desktop-xl_tablet:w-[40%]  s_desktop-xl_tablet:h-[100%]  s-tablet:w-[43%] s-tablet:h-[100%] ",
    specialProductImageSmall: "absolute top-[1.313rem]  w-[159px] h-auto right-[28%] s_desktop-xl_tablet:w-[40%] s_desktop-xl_tablet:right-[20%] mobile:right-[20%] s-tablet:w-[40%] phone:w-[35%] phone:top-[10%]",

    // special product medium size
    specialProductMedium:"relative pl-[10%] h-[240px] x-desktop:w-[537px] s_desktop-xl_tablet:w-[57%]  s_desktop-xl_tablet:h-[100%]  s-tablet:w-[55%] s-tablet:h-[100%]",
    specialProductImageMedium:"relative w-[250px] h-[auto] s_desktop-xl_tablet:w-[65%] s-tablet:w-[70%] phone:w-[50%]",   
    
    // special product large size
    specialProductLarge:"h-full w-full",
    specialProductImageLarge:"h-[auto] x-desktop:w-[281px] s_desktop-xl_tablet:w-[80%] s-tablet:w-[70%] phone:w-[60%]", 

   // special product size small and medium for phone
    specialProductPhoneSize:"phone:h-[49%] phone:w-[50%] phone:min-w-[240px] phone:max-w-[90%]",
    specialImageProductPhoneSize:"relative z-[2] phone:h-[100%] phone:w-[auto]",

   // special product text container small and medium 
   specialProductTextContainer:"absolute w-full h-[38%] bottom-0 left-0  text-white z-10 px-[2rem] s-tablet:h-[50%] s_desktop-xl_tablet:px-[5%] s-tablet:px-[8%] phone:px-[1rem] phone:h-[50%]",
 
}

export const gradient = {
    textGradient: 'bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500',
    bgGradient: 'bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500',

    // header section
    newProductGradient:`bg-clip-text text-transparent bg-gradient-to-r from-[#00B2FF] to-[#0836C1]`
}

export const textStyle = {
    textPlusSans : '',

    // common text style
    mediumLatoText:'text-[600] text-[1.75rem] font-Lato relative xl-tablet:text-[1.4rem] s-tablet:text-[1.2rem] phone:text-[1rem]',


    // header section
    viewProductText:"text-black font-maitre font-[700] text-[1rem] tablet:text-[1.6vw]  xl-phone:text-[.7rem] x-phone:text-[.5rem]",    

    // section product title
    sectionProductTitle: "text-[600] text-[1.75rem] font-Lato relative xl-tablet:text-[1.4rem] s-tablet:text-[1.2rem] phone:text-[1rem]",

    // special products text
    brandSpecialProduct: "brand-product text-[1.75rem] font-Lato s_desktop-xl_tablet:text-[2vw] s-tablet:text-[2.5vw] phone:text-[.9rem]",
    nameSpecialProduct: "name-product text-[#C2C2C2] font-inter font-[400] tracking-[4px] text-[0.938rem] s_desktop-xl_tablet:text-[1.2vw] s-tablet:text-[1.4vw] phone:text-[.6rem] phone:tracking-[2px]", 
    

    // our products section
    // card product text
    accessibiltyCard : "font-saira  text-[0.938rem] font-[500] tablet:text-[.75rem] phone:text-[.6rem]",
    productName:'text-[0.938rem] tablet:text-[.8rem]  phone:text-[.6rem]',
    productPrice:'text-[0.938rem] tablet:text-[.85rem] phone:text-[.6rem]',
    offProductPrice:'text-[.75rem] tablet:text-[.67rem] phone:text-[.58rem]',
    newProductText :'s-desktop:text-[0.938rem] tablet:text-[0.8rem] phone:text-[0.6rem]',
}


// product card styles
export const productCardStyles = { 
    // product card size
    cardSize : "overflow-hidden s-desktop:h-[280px] s-desktop:w-[230px]  tablet:h-[245px] tablet:w-[190px]  phone:h-[190px] phone:w-[140px]", 
    newProductSize:'s-desktop:w-[42px] s-desktop:h-[18px] tablet:w-[37px] tablet:h-[18px] phone:w-[35px] phone:h-[13px]',
    cardImageHeight:"s-desktop:h-[152px] tablet:h-[135px] phone:h-[100px]",
    cardNameHeight:'s-desktop:h-[63px] tablet:h-[55px] phone:h-[45px]',

    // rating star size
    ratingSizeStar : "s-desktop:w-[auto] s-desktop:h-[16px]   tablet:w-[auto] tablet:h-[13px]   phone:w-[auto] phone:h-[10px]", 
    

    // icons product card size
    cardBagIcon:"w-[18px] h-[23px] tablet:w-[13px] tablet:h-[19px] phone:w-[10px] phone:h-[15]", 
}


const defaultExport = layout;
export default defaultExport; 

