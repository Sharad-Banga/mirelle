import { BarsIcon } from "../icons/BarsIcon";
import { CartIcon } from "../icons/CartIcon"
import { DarkIcon } from "../icons/DarkIcon"
import { LightIcon } from "../icons/LightIcon"

interface NavbarProps {
  darki: boolean;
  setDarki: (value: (prev: boolean) => boolean) => boolean;
}

export const Navbar = ({ darki, setDarki }: NavbarProps) => {
  function handleModes(){
    setDarki((a)=>!a);
    console.log(darki);
    
  }
  return(
    <div className={`${darki ? "dark" : ""} select-none fixed `}>
        <div className={` sm:h-[70px] dark:bg-black dark:text-white  pl-[10px] w-screen bg-white text-black mr-0 flex justify-evenly h-[60px] sm:justify-between sm:pl-10 sm:pr-10 items-center `}>

          <div className="hidden sm:flex gap-10">
            <div>HOME</div>
            <div>SHOP</div>
            <div>ABOUT</div>
          </div>

          <div className="flex">
            <div className="w-[200px] font-medium font-bodoni text-[20px] sm:text-[40px]">
              MIRELLE
            </div>
            <div className="w-[10px] "> </div>
          </div>

          <div className="flex sm:gap-5 gap-3 ">
            <div className="hidden sm:flex"> </div>
            <div className="hidden sm:flex"></div>
            <div className="flex gap-1">
              <div className="hidden sm:flex">CART </div>
              <CartIcon/>
            </div>

            <div className=" cursor-pointer "  onClick={handleModes}>
                {darki && <LightIcon/>}
                {!darki && <DarkIcon/>}
            </div>
            <div className="sm:hidden">
              <BarsIcon/>
            </div>
          </div>


        </div>
    </div>
  )
}