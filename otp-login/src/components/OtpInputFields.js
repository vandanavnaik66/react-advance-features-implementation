import React from 'react'
import {useState,useRef,useEffect} from 'react'
import '../App.css'

export const OtpInputFields = () => {
  const length=4;

    const [otpInputField, setotpInputField] = useState(new Array(length).fill(""));

    const inputRef=useRef([]); //for focusing otp fields and giving reference to each field
    console.log(inputRef)

    const afterSubmitOtpFun=()=>{
console.log("otp submit successful")
    }

const handleOtpField=(index,e)=>{
   const value=e.target.value;
   if(isNaN(value)){
    return;
   }
  let newOtp=[...otpInputField];
   newOtp[index]=value.substring(value.length-1); //last entered number only it takes
   setotpInputField(newOtp)
  
   const combinedOtp=newOtp.join("");
   console.log(combinedOtp)
   if(combinedOtp.length===length){
    afterSubmitOtpFun()
   }

   if( value && inputRef.current[index+1] && index<length-1){
    inputRef.current[index+1].focus();
   }

}
const handleClick=(index)=>{
inputRef.current[index].setSelectionRange(1,1);

if(index>0 && !otpInputField[index-1]){
    inputRef.current[otpInputField.indexOf("")].focus();
}

}
const handleOnKeyDown=(index,e)=>{
if(e.key==="Backspace" && !otpInputField[index] && index>0 && inputRef.current[index-1]){
    inputRef.current[index-1].focus();
}
}

// to handle first filed when arrive to otp field
useEffect(
    ()=>{
      inputRef.current[0].focus();
    },
    [])

  return (
    <>
    
        <div className='otp-field-container'>
        {
        otpInputField.map((field,index)=> 
             <input
             key={index}
             ref={(input)=>inputRef.current[index] =input}
             type='text' 
             value={field}
             onChange={(e)=> handleOtpField(index,e)}
            onClick={()=>handleClick(index)}
        onKeyDown={(e)=>handleOnKeyDown(index,e)}
              />
        )}
        </div>
     
    </>

  )
}
