"use client";

import React, { use, useEffect, useState } from "react";
import styles from "./page.css";
import Navigation from './components/Navigation'
import dataCard from './dataCard.json' 

export default function Home() { 

  const dataRender =  dataCard.length

  // if(dataRender)
  console.log(dataRender);

  return (  
      <main className={styles.main}>
      {/* navigation */}
      <Navigation/>

      <div className="card-containers w-full h-auto relative px-[4rem] py-[2rem]">
        <div className="card-container flex gap-[1rem] flex-wrap ">
          {
            dataCard.map((data,i) => (
                <Card number={data.number} key={i}/> 
            ))
          }
         
        </div>
      </div>

    </main>   

  );
}
