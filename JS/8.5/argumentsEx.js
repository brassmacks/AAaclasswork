




// write a function that takes any number of arguments

// function adder(arguments) {

//     const summer = (accumulator, ele) => accumulator + ele;
//     let result = arguments.reduce(summer);
//     console.log(result);

// }

// function adder2(...args) {
//     let sum = 0;
//     args.forEach(ele=> sum += ele);
//     return sum;
// }
// sum(1, 2, 3, 4) === 10;


// sum(1, 2, 3, 4, 5) === 15;


// function.myBind with: 

// bind time args <= args when myBind is defined
// applycontext,args)
//  call time args <=
// function(args) 

Function.prototype.myBind = function(context, ...bindArgs) {

    // this.bind()
    // let that = this;

    return (...args) => this.apply(context, [ ...bindArgs, ...args]);
    // const newFunc = function(...args){ that.apply(context,[ ...bindArgs, ...args])
        // };
    // return newFunc;
    //==> function() with the same context
}


class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true


// function stephenCurry(numArgs){ //5
//     const summer = (accumulator, ele) => accumulator + ele;
//     let numbers = [];

//     let _currySum = function(num){
//         numbers.push(num);

//         if(numbers.length === numArgs){
//             // debugger
//         let res = numbers.reduce(summer);
//         return res;

//         }else{
//             return _currySum;
//         }

//     // numbers.reduce()
//     // debugger
//     };
//     return _currySum;
// } 

// const sum = stephenCurry(4);
// console.log(sum(5)(30)(10)(1));


// fun.curry(5)._currySum


Function.prototype.curry = function(numArgs) {
    
    const summer = (accumulator, ele) => accumulator + ele;
    
    let numbers = [];
    
    let _currySum = function (num) {
        numbers.push(num);
        
        if (numbers.length === numArgs) {
            // debugger
            let res = numbers.reduce(summer);
            return res;
            
        } else {
            return _currySum;
        }
        
        // numbers.reduce()
        // debugger
    };
    return _currySum;
};



let fun = function(arr){
    return arr;
};

console.log(fun.curry);
// arr.forEach(ele=> {
//     console.log(fun.curry(arr.length));
// });
