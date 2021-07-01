

// // // Depending on timezone, your results will vary
// const event = new Date();

// console.log(event.toLocaleTimeString('en-US'));
// // // expected output: 1:15:30 AM


class Clock {
    constructor() {

        this.time = new Date();
        // 1. Create a Date object.
        this.printTime.call(this, this.time);
        // 2. Store the hours, minutes, and seconds.
        setInterval(this._tick.bind(this), 1000);
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
        // setInterval(1000) tick
    }

    // 
    

    printTime(time) {
        const outPut = time.toLocaleTimeString('en-US');
        console.log(outPut);

        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }

    _tick() {
        let now = new Date(); 
        this.printTime(now);
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }
}

// const clock = new Clock();



