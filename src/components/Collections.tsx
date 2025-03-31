import { Slide } from "react-awesome-reveal";

interface CollectionInter {
  darki : Boolean;
}

export const Collections = ({darki}:CollectionInter) =>{
  return(
    <div className={`${darki?"dark":""}`}>

      <div className={`h-[100vh]  dark:bg-black bg-white flex-col flex justify-around`}>

        <div className=" h-[10vh] dark:text-white flex justify-center font-poppins items-end sm:text-[30px]">
          Shop Our Collections  
        </div>


        <Slide damping={0.1} direction="up" duration={1200} triggerOnce >
            <div className="h-[72vh]   md:flex justify-evenly">


                  
                      <div className="h-full  w-[20%] rounded-lg  bg-center bg-no-repeat  bg-[url('./images/c1.png')]">

                      </div>                  
                  
                    <div className="h-full w-[25%] bg-center rounded-lg  bg-[url('./images/c2.png')]">
                    
                    </div>
                  
                  
                  
                    <div className="sm:h-full w-[20%] bg-center rounded-lg  bg-[url('./images/c3.png')]">
                    
                    </div>

            </div>
        </Slide>


      </div>
    
    </div >
  )
}