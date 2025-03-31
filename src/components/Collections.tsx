interface CollectionInter {
  darki : Boolean;
}

export const Collections = ({darki}:CollectionInter) =>{
  return(
    <div className={`${darki?"dark":""}`}>

      <div className={`h-[100vh]  dark:bg-black bg-white flex-col flex justify-around`}>

        <div className="bg-red-400 h-[10vh]">
            
        </div>

        <div className="h-[65vh] bg-green-400">

        </div>

      </div>
    
    </div >
  )
}