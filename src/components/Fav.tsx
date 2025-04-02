import { useState } from "react";
import { LeftIcon } from "../icons/LeftIcon";
import { NextIcon } from "../icons/NextIcon";


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

    
    let [x,setX] = useState(1);

    function handleback(){

      if(x==0){
        setX(5);
      }

      if(x<2){
        setX(x=>5);
      }
      else{
        setX(x=>x-1);
      }
    }

    function handleNext(){

      if(x>4){
        setX(x=>1);
      }
      else{
        setX(x=>x+1);
      }
    }




  return(
    <div className={`${darki?"dark":""} `}>


        <div className=" h-[100vh] bg-white dark:bg-black dark:text-white text-black flex-col flex justify-evenly" >

        <div className="font-poppins text-3xl dark:text-white text-black flex justify-center">
            Customer Favourites
        </div>

        <div className="h-[80vh] mt-6 flex  justify-center gap-64">
            <div className={`hidden sm:flex h-full w-[30vw] bg-[url('./images/f${x}.png')] bg-cover rounded-md`}>

            </div>


            <div className="flex items-center gap-3">
                  <div onClick={handleback} className=" cursor-pointer">
                      <LeftIcon/>
                  </div>

                    <div className=" flex-col sm:mt-10 bg-red h-[60vh]">
                          <div className={` h-[85%] w-[80vw] sm:w-[22vw] bg-[url('./images/fi${x}.png')] bg-cover rounded-md`}>
                            
                          </div>

                          <div className="flex-col">
                            <div className="flex justify-center">{cards[x-1].name}</div>
                            <div className="flex justify-center">{cards[x-1].price}</div>
                          </div>
                    </div>
                   
                  <div onClick={handleNext} className=" cursor-pointer">
                    <NextIcon/>
                  </div>
            </div>

            
        </div>

        </div>
    
    </div>
  )

}