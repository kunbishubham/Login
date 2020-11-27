import React ,{useState} from 'react'
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
 

 const App = () => {
      const [name, setname] = useState();
      const [lastname, setlastname] = useState();
      const  [lastnamenew, setlastnamenew] = useState();
      const [Fullname, setFullname] = useState();

    const  InputEvent = (event) =>{
        console.log(event.target.value);
        setname(event.target.value);
    }
    const  InputEventwo = (event) =>{
        console.log(event.target.value);
        setlastname(event.target.value);
    }
    const  onsubmit = (event) =>{
    event.preventDefault();
        setFullname(name);
        setlastnamenew(lastname);
    }
    return (
    <>
    <div className="maindiv">
    <form  onsubmit={onsubmit}>
         <div>
         <h1>{Fullname}  {lastnamenew}</h1>
         <input type="text"  className="form-control" placeholder="Enter your Name " onChange={InputEvent} value={name}/><br/>
 
         <input type="text"  className="form-control"placeholder="Enter your lastName " onChange={InputEventwo} value={lastname}/><br/>
 
         <button  class="btn btn-primary" onClick={onsubmit} > Click me </button>
         </div>
         </form>
         </div>
         </>
    )
};
 export default App;

 
