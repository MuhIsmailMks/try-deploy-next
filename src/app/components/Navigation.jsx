 
import React,{ useState } from 'react'   
import Link from 'next/link' 
import {usePathname} from 'next/navigation'
import Image from "next/image";
import { layout ,dimension} from '../styles';
import  '../page.css'

// import {MenuButton} from './Components'
import { MenuButton } from './Components'; 
import { useShoppingBag } from '../context/ShoppingBagContext';
// image
import logo from '../icons/logo.svg'
import search from '../icons/search-icon.svg'
import account from '../icons/account-icon.svg'
import bagNavIcon from '../icons/bag-nav-icon.svg'

export default function Navigation() {

  const currentRoute = usePathname(); 
  const [menu, setMenu] = useState(false);

  const handleClickMenu = () => {
    setMenu(!menu); 
  };
  

  return (
    <header className='fixed z-[999] left-0 top-0 w-full'> 
        <nav className="w-full px-[1.55rem] h-[80px] bg-[#1F1F1F] relative flex justify-between items-center s-tablet:px-[4rem] max-LTablet:h-[60px]  xl-desktop:px-[10%] phone:h-[44px]  ">

          <div className="logo w-auto phone:h-[30px] s-tablet:h-[40px] max-LTablet:relative ">
            <Image
              src={logo}
              alt="logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div
            className="menu relative items-center  mobile:bg-white mobile:absolute mobile:right-0 mobile:top-[100%] mobile:h-[50px] mobile:w-[100%] mobile:z-30  mobile:px-[2rem]   phone:w-[100%] phone:h-[92vh]    max-s-desktop:ml-[15%] x-desktop:ml-[30%]"
            id={menu === true ? "activeMenu" : "noActiveMenu"}
          >
            <ul className="text-black flex   text-[1rem]  mobile:gap-[3rem] phone:h-full phone:flex-col   s-tablet:gap-[1.125rem]  ">
              <li >
               <Link className={currentRoute === '/' ? "active" : ""} href={'/'}>Home</Link>
              </li>
              <li > 
                <Link className={currentRoute === '/products/' ? "active" : ""} href='/products/'>Products</Link>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div
            className={`accessibility relative ${layout.flexCenter} gap-[.5rem]  `}
          >
            
            {[
              { icon: search, alt: "search Icon" },
              { icon: account, alt: "account Icon" },
              { icon: bagNavIcon, alt: "bag icon" },
            ].map((image, i) => (
              <Image
                src={image.icon}
                key={i}
                alt={image.alt} 
                className="h-[37px] w-full object-contain cursor-pointer tablet:h-[32px]  xl-phone:h-[24px] x-phone:h-[24px] x-phone:ml-[.5rem]  "
                priority
              />
            ))}

            <MenuButton click={handleClickMenu}/>
          </div>
        </nav>
      </header>
  )
}
