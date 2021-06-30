



    // Monkey patch for Array#
    //
    // #myEach(callback)
    //      return undefined

    Array.prototype.myEach = function(cb) {
        
        for (i = 0;i<this.length;i++) { cb(this[i]) }
    }
    testy = [1,2,3,4,5]

    printer = ele => console.log(ele)
    donkey = ele => console.log(ele + "HEEEHAAAAWWWW")
    addOnerPrint = ele => console.log(ele + 1)
    // #myMap(callback)
    //  should use myEach for a closure
    //
    makeMany = ele => {let out = []; let i = 0; while (i<ele) {out.push(i);i++} return out}

    
    Array.prototype.myMap = function(cb) {
        let outPut = new Array;
        this.myEach(ele => outPut.push(cb(ele)));
        return outPut;
    }



    //  #myReduce(callback[, initialValue]) 

    //      initialValue should be set as a default value
    //      which is done the exact same way as in ruby
    //      
    //      general arch 
    //    fun myReduce(cb, iV=null) {
    //         let source = []
    //         if(iV != null) acc = iV; source += this;
            // else acc = this[0]; source += this.slice(1);
    //       source myForeach el => {
    //              acc = cb(acc, el);
    //          
    Array.prototype.myReduce = function(cb, iV=null) {
        
        let source = new Array;
        if (iV != null) {
            acc = iV;
            source = this;
        } else {
            acc = this[0]
            source = this.slice(1);
        }
        for (i=0; i<source.length; i++) {
            acc = cb(acc, source[i]);
            };
        return acc;
    }

    const dblUp = function(var1, var2) {
        out = var1 * var2
        return out;
    }

    const powerUp = function(var1, var2) {
        return var1 ** var2;
    }

    let accu1 = 1;
    let accu2 = 2;
    let accu5 = 5;
    let accuHuge = 3542;
    let accuNeg = -4; 