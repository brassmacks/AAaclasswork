






    // MonkeyPatch Array#
    //
    //#bubbleSort
    //
    //#substrings
    //
    Array.prototype.bubbleSort = function() {
    //  bind sortable to true
        let sortable = true;
        let counter = 0 
        while (sortable) {
            // debugger
          sortable = false
        counter += 1
          for (i = 0; i<this.length-1; i++) {
            if (this[i] > this[i + 1]) {
                let alias = this[i+1]
                this[i+1] = this[i]
                this[i] = alias;
                sortable = true;
                i = 0
            }
          }
        }
        return [this, counter];
    }


    let bubbleUp = [23,-2,24,3,13,2,-5]
    //
    //
    String.prototype.subStrings = function () {
        let stor = new Array;
        // bind storage array of strings
        // for loop i
        stor.push(this)
        for (i=0; i<this.length;i++) {
            // for loop j = i+1
            for (j=i+1; j<this.length; j++) {
                stor.push(this.substring(i,j))
            }
        }
        stor.push(this[this.length-1])
        return stor
        // push subs into storage
        // return storage

    }

    testeroni = "testeroni"

