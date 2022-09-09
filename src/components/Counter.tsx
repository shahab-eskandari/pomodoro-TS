import "./Counter.css";

type CounterProps = { 
    duration: number 
    setDuration: (count:number)=>void
}
export default function Counter(props:CounterProps) {


return (
    <div>
        <div className='counter__row'>
        <button
            className='counter__button'
            aria-label="Decrement value"
            onClick={()=>props.setDuration(props.duration - 1)}
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
