// const readline = requires("readline");

// absurdBubbleSort(arr, isDone)
// promt the user to perfrom each comparison for us 

// askIfGreaterThan(el1, el2, callback)
// yes or no el1 > el2

    // const reader = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // });  

    // reader.question(`which is greater? left for ${el1} or right for ${el2}`);

    // // bubble sort in JavaScript 

const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    // Prompt user to tell us whether el1 > el2; pass true back to the
    // callback if true; else false.

    reader.question(`which is greater? true for ${el1} or false for ${el2}`);

   
    // return true or false --> either continue loop or break loop 

}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    madeAnySwaps = false;
    
    const cb = (a, b) => { return a > b; };

    let y = i+1;

    while (y < arr.length) {
        [el1, el2] = [arr[i], arr[y]];  // double assigned el1 and el2
        madeAnySwaps = askIfGreaterThan(el1, el2, cb);  // asking the user which ele is greater; el1 or el2
        
        //[2,1,1,3,53] 

        if (madeAnySwaps) {
            [arr[i], arr[y]] = [arr[y], arr[i]];
        } 
        // when ele1 > ele2, make ele1 at the position of ele2 and wise versa 
        
        i++; //incrementing the value of i
        y++;

        // if we did not swap anything, switch the value of ele2, switch to next position 
        // in the array 

    } 

        
    if (i === arr.length - 1) {
       outerBubbleSortLoop(madeAnySwaps);
    }



    
    
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.

    const bubble = function (arr)
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});




