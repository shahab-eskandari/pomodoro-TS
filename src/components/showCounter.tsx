import TimeDisplay from "./timeDisplay";

const ShowCounter = (countDown:{countDown: number}) => {

    const minutes = Math.floor(countDown.countDown / 60 );
    const seconds = Math.floor( countDown.countDown % 60 );
    
    return (
      <div>
          <div className="show-counter__container">
              <TimeDisplay value={minutes}/>
              <h1 className="time-display__number">:</h1>
              <TimeDisplay value={seconds}/>
          </div>
      </div>
    );
};

export default ShowCounter;