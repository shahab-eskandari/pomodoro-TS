
const TimeDisplay = ( value: {value: number} ) => {
    return (
      <div>
        <h1 className="time-display__number">{value.value}</h1>
      </div>
    );
  };
  
  export default TimeDisplay;
  