import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
    }
    function handleDecrement() {
        setCount(count - 1)
    }
    function handleReset(){
        setCount(0)
    }
  return (
     <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'99vh', backgroundColor:"#22C1C3",background:"linear-gradient(85deg,rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)"}}>
        <div className="container w-75  rounded-3" style={{border:'2px solid white',height:'auto',paddingBottom:"5px",backgroundImage: `url('./images/2.jpg')`,backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',}}>
          <div className="container rounded-circle mt-4 text-center p-3" style={{height:'140px',border:'5px solid white',width:'140px'}}>
            <h6>Your Count</h6> <h3> {count} </h3> 
          </div>
          <div className="buttons mt-5" style={{ display:"flex",flexDirection:"column",gap:"10px"}}>
  <button type="button" className="btn btn-success" onClick={handleClick}>
    Count
  </button>
  <button type="button" className="btn btn-warning" onClick={handleDecrement}>
    Decrease
  </button>
  <button type="button" className="btn btn-danger" onClick={handleReset}>
    ReSet
  </button>

        </div>
        </div>

      </div>
  )
}

export default Counter
