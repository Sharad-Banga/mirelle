import { useEffect, useState } from "react";


interface FavInter{
  darki : Boolean;
}



const cards = [
  {
    "id": 0,
    "i1": './images/f1.png',
    "i2":"./images/fi1.png",
    "name":"Cove Knitted Shirt",
    "price":"$ 125"
  },
  {
    "id": 1,
    "i1": "./images/f2.png",
    "i2":"./images/fi2.png",
    "name":"bluuu Shirt",
    "price":"$ 125"
  },
  {
    "id": 2,
    "i1": "./images/f3.png",
    "i2":"./images/fi3.png",
    "name":"whitee Shirt",
    "price":"$ 125"
  },
  {
    "id": 3,
    "i1": "./images/f4.png",
    "i2":"./images/fi4.png",
    "name":"green Shirt",
    "price":"$ 125"
  },
  {
    "id": 4,
    "i1": "./images/f5.png",
    "i2":"./images/fi5.png",
    "name":"sss Shirt",
    "price":"$ 125"
  },
];













export const Fav =({darki}:FavInter)=>{

    
    





  return(
    <div className=" h-[100vh] bg-white dark:bg-black dark:text-white text-black flex-col flex justify-evenly" >

          <div className="font-poppins text-3xl dark:text-white text-black flex justify-center">
              Customer Favourites
        </div>

        <div className="h-[60vh] bg-red-300 flex  justify-around">
              <div className="h-full w-[30vw] bg-[url('./images/f1.png') ">



              </div>
              <div className="bg-red-800 h-full w-[30vw] bg-[url('./images/f1.png') ">
                
              </div>
        </div>
    
    </div>
  )

}