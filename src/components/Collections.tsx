import { Slide } from "react-awesome-reveal";
import { Button } from "./Button";

interface CollectionInter {
  darki : Boolean;
}

export const Collections = ({darki}:CollectionInter) =>{
  return(
    <div className={`${darki?"dark":""}`}>

      <div className={`h-[390px] sm:h-[100vh]  dark:bg-black bg-white flex-col flex justify-around`}>

        <div className=" h-[10vh] dark:text-white flex justify-center font-poppins items-end sm:text-[30px]">
          Shop Our Collections  
        </div>


        <Slide damping={0.1} direction="up" duration={1200} triggerOnce >
            <div className=" sm:h-[72vh] h-[30vh]  flex justify-evenly">


                  
                    <div className=" h-full w-[110px]  sm:w-[20%] rounded-lg  bg-cover sm:bg-center bg-no-repeat  bg-[url('./images/c1.png')]">

                      <div className=" h-[95%] flex-col flex justify-end items-center">
                        <Button variant="secondary" text="Men's Collection ➝" />
                      </div>
                      

                    </div>                  
                  
                    <div className="h-full  w-[110px] sm:w-[25%] bg-cover sm:bg-center rounded-lg  bg-[url('./images/c2.png')]">
                      <div className=" h-[95%] flex-col flex justify-end items-center">
                        <Button variant="secondary" text="Women's Collection ➝" />
                      </div>
                    </div>
                  
                  
                  
                    <div className="sm:h-full  w-[110px] sm:w-[20%] bg-cover sm:bg-center rounded-lg  bg-[url('./images/c3.png')]">
                      <div className=" h-[95%] flex-col flex justify-end items-center">
                        <Button variant="secondary" text="Summer Collection ➝" />
                      </div>
                    </div>

            </div>
        </Slide>


      </div>
    
    </div >
  )
}