import { useEffect, useState } from "react";


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

    
    


  const [x, setX] = useState(0);
  const [currentCard, setCurrentCard] = useState(cards[0]);

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setX((prevX) => (prevX + 1) % 5);
    }, 2000);

    
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setCurrentCard(cards[x]);
  }, [x]);



  return(
    <div className={`${darki?"dark":""} `}>

          <div className="h-[100vh] dark:bg-black bg-white flex flex-col justify-around">

              <div className="font-poppins text-[30px] dark:text-white text-black flex justify-center">
                  Customer Favourites
              </div>

              <div className="h-[60vh] flex  justify-center gap-3 items-center ">

                    <div className="h-[300px] bg-cover bg-center w-[200px] opacity-55" 
                    style={{ backgroundImage: `url('./images/f1.png')` }}>

<img 
              src="/images/f1.png" 
              alt="Fixed image" 
              className="absolute inset-0 w-full h-full object-cover"
            />

                    </div>
                  
                  <div className="h-[360px] ] w-[250px] opacity-100 z-20 bg-cover bg-center" style={{ backgroundImage: `url(${currentCard.i1})` }} >

                  </div>
                  
                
              </div>

          </div>
    
    </div>
  )

}