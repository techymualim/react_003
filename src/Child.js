import { useContext } from "react";
import ValueContext from './ValueContext';
function Child(){
    let val=useContext(ValueContext)
    return (<div>

       Number is {val[0]}
       <button onClick={()=>{val[1](++val[0])}}>xD</button>
    </div>);
}

export default Child;