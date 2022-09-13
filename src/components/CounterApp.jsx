import PropTypes from "prop-types";
import {useState} from "react"

//Esta función esta afuera del counter app ya que no necesita del valor de value que le pasamos como propiedad al counter app
// Y por eso no es necesario incluirla cada vez que el CounterApp se renderize

//const handleEvent = (eventNew) => {
  //  console.log(eventNew);
//}


export const CounterApp = ({value}) => {

    const [number,setNumber]=useState(value);

    const handleAdd = (event) => {
        console.log(event)
        setNumber(x=>x+1)
    }

    const handleSubstract = () => {
        if(number == 0){
            return 0
        }
        else{
        setNumber(x => x-1);
        }
    }

    const handleReset = (  ) => setNumber( x => { return x = 0 + value}) ;

    return (
        <>
        <h1>Counter App</h1>
        <h2 data-testid="counter-test">This is the counter Value : {number}</h2>
        <div className="center">
            <button className="btn-counter" onClick={handleAdd}>+1</button>
            <button className="btn-counter" onClick={handleSubstract}>-1</button>
            <button arial-label="btn-reset" className="btn-counter" onClick={handleReset}>RESET</button>
        </div>
        </>
    )
}

CounterApp.propTypes={
    value: PropTypes.number.isRequired
}
CounterApp.defaultProps = {
    value : 0
}