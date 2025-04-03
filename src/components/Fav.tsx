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

    function handleDot(s:number){
      setX(s);
    }




  return(
    <div className={`${darki?"dark":""} `}>


        <div className=" h-[90vh] sm:h-[130vh] bg-white dark:bg-black dark:text-white text-black flex-col flex sm:justify-evenly" >

        <div className=" mt-12 sm:mt-0 sm:mb-0 font-poppins text-3xl dark:text-white text-black flex justify-center ">
            Customer Favourites
        </div>

        <div className="h-[80vh] mt-6 flex  justify-center gap-64">
            <div className={`hidden sm:flex h-full w-[30vw]   bg-cover rounded-md`}  style={{ 
                                            backgroundImage: `url(${cards[x-1].i1})`
                                          }}>

            </div>


              <div className="flex flex-col mt-3 items-center justify-center  bg-white rounded-lg  h-[520px] w-[340px] sm:w-[360px] sm:mt-14" >
                    

                          <div className="flex items-center ">

                                  <div onClick={handleback} className="mt-6  text-[#964B00] sm:mb-0 cursor-pointer">
                                      <LeftIcon/>
                                  </div>

                                  <div className=" flex-col  sm:mt-10 bg-red h-[50vh]">
                                        <div className={` h-[80%] mt-2  w-[70vw] sm:h-[90%] sm:w-[20vw] bg-center  bg-cover rounded-md cursor-pointer `}  style={{ 
                                                          backgroundImage: `url(${cards[x-1].i2})`
                                                        }}>  
                                    </div>
                                  </div>

                                  <div onClick={handleNext} className="mt-6 text-[#964B00] sm:mb-0 cursor-pointer">
                                    <NextIcon/>
                                  </div>
                          </div>




                            <div className="flex-col text-red-800 font-medium">
                              <div className="flex justify-center font-poppins  text-[130%]">{cards[x-1].name}
                              </div>
                              <div className="flex justify-center   text-black/70 font-bold">{cards[x-1].price}
                              </div>
                            </div>
                      
                    
                    

                    <div className="text-black/40 flex justify-evenly w-[40%] mt-2">
                      <div onClick={()=>handleDot(1)} className={`${x%5==1?"text-black":""} cursor-pointer`}>●</div>
                      <div onClick={()=>handleDot(2)} className={`${x%5==2?"text-black":""} cursor-pointer`}>●</div>
                      <div onClick={()=>handleDot(3)} className={`${x%5==3?"text-black":""} cursor-pointer`}>●</div>
                      <div onClick={()=>handleDot(4)} className={`${x%5==4?"text-black":""} cursor-pointer`}>●</div>
                      <div onClick={()=>handleDot(5)} className={`${x%5==0?"text-black":""} cursor-pointer`}>●</div>
                    </div>
              </div>

            
        </div>

        </div>
    
    </div>
  )

}