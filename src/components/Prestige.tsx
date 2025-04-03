
interface PrestigeInter{
  darki : Boolean;
}

export const Prestige =({darki}:PrestigeInter) =>{
  return(
    <div  className={`${darki?"dark":""} `} >

      <div className="h-[100vh] sm:h-[110vh] p-4 sm:p-0 flex-col flex justify-between border-t-2 border-black dark:border-white bg-white dark:bg-black dark:text-white border-b-2 ">

          <div className=" h-[15vh] mt-4 sm:mt-10 flex items-center justify-evenly gap-3 sm:gap-0">

                  <div className="font-semibold font-poppins text-[#DEA12F]">
                  ● Prestige
                  </div>
                  <div className="font-normal font-poppins text-[120%] sm:text-[320%] ml-26 ">
                    <p><span className="font-medium">MIRELLE</span> IS MORE </p>
                    <p>THAN JUST FASHION.</p>
                  </div>
                  
                  <div></div>

          </div>


          <div className="h-[60vh] sm:h-[60vh] flex flex-col md:flex-row sm:justify-center md:gap-24 items-center">
            <div className="w-full md:w-[20%] py-4 md:py-0 flex-col flex justify-center items-center text-center md:text-left">
              <div className="font-quattrocento text-sm md:text-base lg:text-lg w-full">
                <p>It's for the modern woman and</p>
                <p>man who embrace style <span className="hidden md:inline">without</span></p>
                <p className="hidden md:block">excess, confidence without effort,</p>
                <p className="hidden md:block">and beauty without compromise.</p>
              </div>
            </div>

            <div className="w-[65%] sm:w-[40%] md:w-[20%] h-[59vh] max-h-[63vh] md:h-full bg-no-repeat  bg-center bg-[url('/images/p1.png')]   sm:bg-[url('/images/p1.png')] rounded-lg ">
            </div>

            <div className="w-[45%] hidden md:inline md:w-[20%] h-[3] md:h-full bg-contain bg-no-repeat bg-center bg-[url('/images/p2.png')] rounded-lg">
            </div>
          </div>
          <div className=" h-[15vh] text-white/10 font-rammetto   flex-col flex justify-end text-[300%] ml-5 sm:text-[600%] ">
                MIRELLE
          </div>

      </div>
    
    </div>
  )
}