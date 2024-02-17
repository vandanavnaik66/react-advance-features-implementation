import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [product, setProduct] = useState();
const[page,setPage]=useState(1)

  const fetchProduct = () => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((obj) => {
        if(obj && obj.products){
          setProduct(obj.products)
          console.log(obj.products)
        }
      }
       );
  };
  useEffect(() => {
    fetchProduct();
  }, []);


  const handlePage=(selectedPage)=>{
    if(
      selectedPage >0 &&
      selectedPage <=10 &&
      selectedPage !==page
    ){
      setPage(selectedPage)    
    }
  }
  const handlePageForword=()=>{
    setPage(page+1)    
  }
  const handlePagebackword=()=>{
    setPage(page-1)    
  }

  return (
  <div >
    {
product?.length >0 && 
<div className="grid-container" >
  {
    product.slice((page*10-10),page*10).map((prod)=>{
      return<div className="single-container">
           <img src={prod.thumbnail}/>
           <span>{prod.title}</span>
      </div>
    })
  }
  </div>
    }
    <div>
      {
        product?.length>0 && <div className="pagination-container">
          <div className={(page<=1)?"disableBtn":"" } onClick={handlePagebackword}>⏪</div>
           {
            ([...Array(Math.ceil(product.length)/10)]
            .map((_,i)=> <span 
            key={i}
            className={page===i+1 ? "pageActive" : ""}
             onClick={()=>handlePage(i+1)}>{i+1}</span>))
           }
          <div className={(page>=10)?"disableBtn":"" }
          onClick={handlePageForword}>⏩</div>

        </div>
      }
    </div>

  </div>
  )
}

export default App;
