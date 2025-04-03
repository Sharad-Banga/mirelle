import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

interface ExciInter{
  darki : Boolean;
}


export const Exclusive = ({darki}:ExciInter) =>{
  return(
    < div  className={`${darki?"dark":""}`}>

      <div className="h-[20vh] bg-white dark:text-white dark:bg-black border-t-2 border-b-2 dark:border-white border-black  flex justify-around text-[6vh] sm:text-[5vw] ">

          <Marquee speed={50} gradient={false} className=" ">
          <div className="flex gap-10 sm:gap-20">
          <div>
            Exclusive
          </div>
          <div>✦</div>
          <div>
          Timeless
          </div>
          <div>✦</div>
          <div>
          Ethical
          </div>
          <div>✦</div>
          <div className="sm:hidden">&nbsp;</div>
          </div>
          </Marquee>

          

      </div>
    
    </div>
  )
}