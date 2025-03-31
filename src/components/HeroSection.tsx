import { Fade, Slide } from "react-awesome-reveal";
import { Button } from "./Button";
import { OpenIcon } from "../icons/OpenIcon"

interface HeroSectionProps {
  darki: boolean;
}

export const HeroSection = ({ darki }: HeroSectionProps) => {
  return(
    <>
        <div className={`${darki?"dark":""} pt-[60px]`}>
          <div className={`sm:h-[10px] bg-white dark:bg-black`}>

          </div>
            <div className="flex justify-center items-center w-full bg-white dark:bg-black">
                <div className="bg-[url('./images/img3.png')] w-screen mt-[20px] h-[50vh]  bg-no-repeat bg-inherit bg-cover bg-center
                 sm:h-[88vh] ">

                  <div className=" h-[100px] mt-[65%] sm:mt-[28%] flex justify-around items-center ">
                      <div>
                        <Slide damping={0.1}  triggerOnce className="text-white text-[13px] sm:text-[24px] font-medium">
                          <p>ELEGENCE MEETS</p>
                          <p>MODERN STYLE</p>
                        </Slide>
                      </div>

                      <div>
                          <Slide damping={0.1} direction="up" duration={2000} triggerOnce className="text-white text-[18px] font-medium mt-10">
                            <Button variant="primary" size="md" text="Explore" endIcon={<OpenIcon/>} />
                          </Slide>
                      </div>

                      <div className=" font-extrabold text-[22px]">
                        <Slide damping={0.1} direction="right"  triggerOnce className="text-white text-[28px] font-medium">
                          <p>Flat 20% off</p>
                        </Slide>
                        
                      </div>
                  </div>

                </div>
            </div>
          <div className={`h-[100px] sm:h-[203px] dark:bg-[#3a3a3a] bg-[#d4d4d4] dark:text-white`}>

              <Fade cascade damping={0.4} className="font-playfair text-[18px] gap-0  sm:text-[50px]  flex justify-center sm:pt-[1%]">
                <p className="pt-[20px]">Elevate Your  Style  with MIRELLE</p>
                <p> Where Elegance Meets Style</p>
              </Fade>

          </div>
        </div>
    </>
  )
}