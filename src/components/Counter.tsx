import "./Counter.css";

type CounterProps = { 
    duration: number 
    setDuration: (count:number)=>void
    durationError: boolean
}
export default function Counter(props:CounterProps) {
console.log(props.durationError)

return (
    <div>
        <div className='counter__row'>
        <button
            className='counter__button'
            aria-label="Decrement value"
            disabled={props.durationError}
            onClick={()=>{
                //if(!props.durationError){
                    props.setDuration(props.duration - 1)
                //}else{
                  //  console.log("Error")
                }
               // }
            }
        >
            -
        </button>
        <span className='counter__value'>{props.duration}</span>
        <span>min</span>
        <button
            className='counter__button'
            aria-label="Increment value"
            onClick={()=>props.setDuration(props.duration + 1)}     
        >
            +
        </button>
        </div>
    </div>
)
}
