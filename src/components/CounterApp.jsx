import PropTypes from "prop-types";
import {useState} from "react"

//Esta función esta afuera del counter app ya que no necesita del valor de value que le pasamos como propiedad al counter app
// Y por eso no es necesario incluirla cada vez que el CounterApp se renderize

//const handleEvent = (eventNew) => {
  //  console.log(eventNew);
//}


export const CounterApp = ({value}) => {

    const [number,setNumber]=useState(value);

    const handleEvent = (eventNew) => {
        setNumber(x=>x+1)
    }

    return (
        <>
        <h1>Counter App</h1>
        <h2>This is the counter Value : {number}</h2>
        <button className="btn-counter" onClick={handleEvent}>+1</button>
        </>
    )
}

CounterApp.propTypes={
    value: PropTypes.number.isRequired
}
CounterApp.defaultProps = {
    value : 0
}