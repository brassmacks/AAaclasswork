

// // Depending on timezone, your results will vary
// const event = new Date();

// console.log(event.toLocaleTimeString('en-US'));
// expected output: 1:15:30 AM


class Clock {
    constructor() {
        this.time = new Date();
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        
        
        // 4. Schedule the tick at 1 second intervals.
        // setInterval(1000) tick
    }


    printTime() {

        console.log(Clock.time.toLocaleTimeString('en-US'));
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }

    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }
}

// const clock = new Clock();



