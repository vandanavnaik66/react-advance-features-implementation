import './App.css';
import {useState} from 'react'
import { OtpInputFields } from './components/OtpInputFields';

function App() {
  const [phoneNumber, setphoneNumber] = useState('');
  const[showOtpInput,setShowOtpInput] =useState(false)



  const handlePhoneNumber=(e)=>{
   setphoneNumber(e.target.value)
  }

  const handleSubmitNumber=(e)=>{
   e.preventDefault();
   
   //phone validation
   let regex= /[^0-9]/g;
   if(phoneNumber.length<10  || regex.test(phoneNumber)){
   alert("Invalid Phone Number");
   return;
   }
   // call Backend api if anythere or show otp inputs
   setShowOtpInput(true)
  }

  return (
    <div className="App">
     {
      !showOtpInput?
      <form onSubmit={handleSubmitNumber} className='form-style'>
        <p>Enter Your Phone number to received the OTP!!!</p>
      <input type='text' 
      value={phoneNumber}
      onChange={handlePhoneNumber}
      />
      <button type='submit'>Submit</button>
      </form> :
      <div>
     <p>Enter OTP sent to <span style={{color:"skyblue",fontWeight:"700"}}>{phoneNumber}</span> number</p>
      <OtpInputFields/>
      </div>

     }  

    </div>
  );
}

export default App;
