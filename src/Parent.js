import Child from "./Child.js"

function Parent(Props){
    return (<div>

        Parent
        <Child num={Props.num}></Child>
    </div>);
}

export default Parent;