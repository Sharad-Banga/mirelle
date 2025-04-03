import { GithubIcon } from "../icons/GithubIcon";
import { Xicon } from "../icons/Xicon";

interface FooterInter{
  darki : Boolean;
}


export const Footer =({darki}:FooterInter)=>{

  return(
    <div className={`${darki?"dark":""}`}>
        <div className="h-[60vh] bg-[#E0E0E0] dark:bg-[#181717] flex flex-col items-center justify-end ">

              <div className="w-[90vw] sm:w-[80vw]  h-[60%] sm:h-[50%] dark:text-white
               border-t-2 border-black dark:border-white/55 flex justify-around sm:items-center font-poppins">
                  
                  <div className="flex-col mt-2 sm:mt-0 ml-5 sm:ml-0">

                    <a href=""><p className="font-semibold mb-3">SHOP</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hover:font-normal dark:hover:text-white">MENS</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hover:font-normal dark:hover:text-white">WOMEN</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hover:font-normal dark:hover:text-white">SUMMER SPECIAL</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hover:font-normal dark:hover:text-white">MOST SELLING</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hover:font-normal dark:hover:text-white">TOP RATED</p></a>

                  </div>

                  <div className="mt-2 sm:mt-0 ml-7 sm:ml-0">
                    <a href=""><p className="font-semibold mb-3 ">HELP</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hover:font-normal dark:hover:text-white">GET HELP</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hover:font-normal dark:hover:text-white">ORDER STATUS</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hover:font-normal dark:hover:text-white">RETURNS</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hover:font-normal dark:hover:text-white">PAYMENT OPTIONS</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hover:font-normal dark:hover:text-white">DAMAGE PRODUCT</p></a>
                  </div>

                  <div className="mt-2 sm:mt-0 ml-7 sm:ml-0">
                    <a href=""><p className="font-semibold mb-3">ABOUT</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hover:font-normal dark:hover:text-white">NEWS</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hover:font-normal dark:hover:text-white">CAREERS</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hover:font-normal dark:hover:text-white">INVESTORS</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hidden sm:inline hover:font-normal dark:hover:text-white">SUSTAINABILITY</p></a>
                    <a href=""><p className="dark:text-white/65 font-light hover:font-normal dark:hover:text-white">REPORT A CONCERN</p></a>
                  </div>


              </div>

              <div className="w-[80vw] flex-col text-black dark:text-white flex justify-center items-center pb-10  h-[25%] gap-2 ">

                <div className="flex items-center font-poppins justify-center text-black dark:text-white text-[65%] sm:text-[90%] mb-1">Developed and Designed by Sharad Banga  &nbsp;  <a target="_blank"  href="https://x.com/sharad_banga"> <Xicon/> </a> &nbsp;  
                <a className="dark:bg-white bg-[#E0E0E0] rounded-3xl h-7 w-7 flex items-center" target="_blank" href="https://github.com/Sharad-Banga"><GithubIcon/></a>
                </div>

                <div>
                <a href="">MIRELLE.</a> <span className="dark:text-white/55 text-black/55">All Rights Reserved 2025 ©</span>
                </div>

              </div>

        </div>
    </div>
  )
}