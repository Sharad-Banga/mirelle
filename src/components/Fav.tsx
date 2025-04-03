import { useState } from "react";
import { LeftIcon } from "../icons/LeftIcon";
import { NextIcon } from "../icons/NextIcon";


interface FavInter{
  darki : Boolean;
}



const cards = [
  {
    "id": 0,
    "i1": '/images/f1.png',
    "i2":"/images/fi1.png",
    "name":"Warwick Waxed Jacket",
    "price":"$364"
  },
  {
    "id": 1,
    "i1": "/images/f2.png",
    "i2":"/images/fi2.png",
    "name":"Cove Knitted Shirt",
    "price":"$179"
  },
  {
    "id": 2,
    "i1": "/images/f3.png",
    "i2":"/images/fi3.png",
    "name":"Whool Overshirt",
    "price":"$297"
  },
  {
    "id": 3,
    "i1": "/images/f4.png",
    "i2":"/images/fi4.png",
    "name":"1796 Jumper",
    "price":"$166"
  },
  {
    "id": 4,
    "i1": "/images/f5.png",
    "i2":"/images/fi5.png",
    "name":"Bexley Jacket",
    "price":"$364"
  },
];













export const Fav =({darki}:FavInter)=>{

    
    let [x,setX] = useState(1);
    

    function handleback(){

      console.log(x);
      

      if(x<2){
        setX(5);
      }
      else{
        setX(px=>px-1);
      }
    }

    function handleNext(){

      if(x>4){
        setX(1);
      }
      else{
        setX(zx=>zx+1);
      }
    }




  return(
    <div className={`${darki?"dark":""} `}>


        <div className=" h-[110vh] bg-white dark:bg-black dark:text-white text-black flex-col flex sm:justify-evenly" >

        <div className=" mt-12 sm:mb-16 font-poppins text-3xl dark:text-white text-black flex justify-center">
            Customer Favourites
        </div>

        <div className="h-[80vh] mt-6 flex  justify-center gap-64">
            <div className={`hidden sm:flex h-full w-[30vw]   bg-cover rounded-md`}  style={{ 
                                            backgroundImage: `url(${cards[x-1].i1})`
                                          }}>

            </div>


            <div className="flex items-center gap-3">
                  <div onClick={handleback} className=" mb-10 sm:mb-0 cursor-pointer">
                      <LeftIcon/>
                  </div>

                    <div className=" flex-col  sm:mt-10 bg-red h-[60vh]">
                          <div className={` h-[85%]  w-[80vw] sm:w-[22vw] bg-center  bg-cover rounded-md cursor-pointer `}  style={{ 
                                            backgroundImage: `url(${cards[x-1].i2})`
                                          }}>
                            
                          </div>

                          <div className="flex-col">
                            <div className="flex justify-center font-poppins mt-5 text-[130%]">{cards[x-1].name}</div>
                            <div className="flex justify-center text-black/55 dark:text-white/75 font-bold">{cards[x-1].price}</div>
                          </div>
                    </div>
                   
                  <div onClick={handleNext} className="mb-10 sm:mb-0 cursor-pointer">
                    <NextIcon/>
                  </div>
            </div>

            
        </div>

        </div>
    
    </div>
  )

}