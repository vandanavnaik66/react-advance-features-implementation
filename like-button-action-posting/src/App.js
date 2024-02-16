import { useState } from 'react';
import './App.css';
import { IoHeartOutline } from "react-icons/io5";
import { BiLoaderCircle } from "react-icons/bi";

function App() {
const[liked,setLiked]=useState(false)
const[isFetching,setIsFetching] =useState(false)
const[isError,setIsError] =useState(null)

  const handleLikeBtn=async()=>{

    setIsFetching(true)
    setIsError(null)
     
    try{
       const res=await fetch("https://www.greatfrontend.com/api/questions/like-button",{
      method:'POST',
      body: JSON.stringify({action:liked? "unlike":"like"}),
      headers: {"content-type":"application/json"}
      })
    //  const data= await (res.json())
     console.log(res)

     if(res.status>=200 && res.status<300){
      setLiked(true)
     }else{
    const data=await res.json();
    console.log(data)
    setLiked(false)
       setIsError(data.message)
       return; // returning nothing is undefined that means false incase of boolean type
     }

     }
     finally{
      setIsFetching(false)
     }
  }

  return (
    <div className="App">
    <button disabled={isFetching} className={`like-btn ${liked? 'liked':""}`} onClick={handleLikeBtn}> {isFetching ? <BiLoaderCircle /> : <IoHeartOutline style={{height:"20px", width:"20px", strokeWidth:"15px"}} />} {liked ? "Liked" : "Like"} </button>
    <h4>{isError? isError : ""}</h4>
    </div>
  );
}

export default App;
