import { Fade, Slide } from "react-awesome-reveal";
import { Button } from "./Button";
import { OpenIcon } from "../icons/OpenIcon"

interface HeroSectionProps {
  darki: boolean;
}

export const HeroSection = ({ darki }: HeroSectionProps) => {
  return(
    <>
        <div className={`${darki?"dark":""}  pt-[60px] overflow-x-hidden`}>
          <div className={`sm:h-[10px] bg-white dark:bg-black`}>

          </div>
            <div className="flex justify-center items-center w-full bg-white dark:bg-black">
                <div className="bg-[url('/images/img3.png')] w-[95vw] rounded-lg mb-2.5 sm:mb-8 mt-[20px] h-[63vh]  bg-no-repeat bg-inherit bg-cover bg-center
                 sm:h-[88vh] ">

                  <div className=" sm:h-[200px] mt-[89%] ml-2 sm:ml-0 sm:mt-[26%] flex justify-around w-full pl-2 pr-2">
                      <div className="h-full">
                        <Slide damping={0.1}  triggerOnce className="text-[#333333] sm:text-[#2c3a45] text-[14px]  sm:text-[24px] font-bold">
                          <p>ELEGENCE MEETS</p>
                          <p>MODERN STYLE</p>
                        </Slide>
                      </div>

                      <div className="flex-col justify-end  items-end h-full">
                          <Slide damping={0.1} direction="up" duration={2000} triggerOnce className="text-white text-[18px] font-medium mt-20 sm:mt-40">
                            <Button variant="primary" size="md" text="Explore" endIcon={<OpenIcon/>} />
                          </Slide>
                      </div>

                      <div className=" font-extrabold text-[22px] h-full">
                        <Slide damping={0.1} direction="right"  triggerOnce className="text-[#333333] sm:text-[#2c3a45] font-bold text-[20px] sm:text-[28px] ">
                          <p>Flat 20% off</p>
                        </Slide>
                        
                      </div>
                  </div>

                </div>
          </div>
          <div className={`h-[100px] sm:h-[203px] dark:bg-[#3a3a3a] bg-[#d4d4d4] dark:text-white`}>

              <Fade cascade damping={0.4} triggerOnce={true} className="font-playfair sm:leading-tight text-[18px] gap-0  sm:text-[50px]  flex justify-center sm:pt-[1%]">
                <p className="pt-[22px] sm:pt-[7px]">Elevate Your  Style  with MIRELLE</p>
                <p> Where Elegance Meets Style</p>
              </Fade>

          </div>
        </div>
    </>
  )
}