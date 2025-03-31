import { Fade } from "react-awesome-reveal";
export const HeroSection = ({darki,setDarki}) =>{
  return(
    <>
        <div className={`${darki?"dark":""} pt-[60px]`}>
          <div className={`sm:h-[10px] bg-white dark:bg-black`}>

          </div>
            <div className="flex justify-center items-center w-full bg-white dark:bg-black">
                <div className="bg-[url('./images/img3.png')] w-screen mt-[20px] h-[50vh]  bg-no-repeat bg-inherit bg-cover bg-center
                 sm:h-[88vh] ">

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