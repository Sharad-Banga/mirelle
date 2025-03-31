


export interface ButtonProps{
  variant : "primary" | "secondary"|"sign"|"submit";
  size? : "sm"|"md"|"lg";
  text : string;
  startIcon? : any;
  endIcon? : any;
  onClick : ()=> void;
}

const variantStyles = {
  "primary":"bg-[#222222]  text-white  text-[90%]",
  "secondary":"bg-[#41c0b6] text-black",
  "sign" : "bg-[#1e8682] w-full flex justify-center text-white",
  "submit" : "bg-red-500 w-[85%] flex justify-center h-[10%] mb-4"
}

const sizeStyles = {
  "sm":"pl-2 ",
  "md":"pl-4 pr-4 pt-2 pb-2",
  "lg":"p-6"

}

const defaultStyles = "rounded-lg p-4";

export const Button = (props :ButtonProps) =>{
  return(
    <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size || 'md']} flex items-center gap-2 `}
     onClick={props.onClick} > {props.startIcon} {props.text} {props.endIcon}</button>
  )
}
