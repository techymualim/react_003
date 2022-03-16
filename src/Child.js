import { useContext } from "react";
import ValueContext from './ValueContext';
function Child(){
    let val=useContext(ValueContext)
    return (<div>

       Number is {val}
    </div>);
}

export default Child;