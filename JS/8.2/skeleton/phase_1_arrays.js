



    // monkey patch:
    //  Array#

    // #uniq
    // unique elements in the order that they originally appeared 
    // should not mutate original array
    // objectID of 1 != 2
    
    // #twoSum
    // returns an array of the positions whose values sum to 0
    
    // #transpose
    // when given a 2d array, flips the inner array indices with the outer
    //


    Array.prototype.uniq = function() {

        let uniqs = []
        this.forEach( val =>
            { if (!(uniqs.includes(val)))
            uniqs.push(val)
        })
        console.log(this)
        return uniqs;
    }

    arr2 = [1,1,2,1,3,3,2,5,2]


    Array.prototype.twoSum = function() {

        let zeros = []
        for ( i = 0; i < this.length - 1; i++ ) {
            for (j = i + 1; j < this.length; j++) {
                if (this[i] + this[j] === 0) {zeros.push([i,j])};
            }
        }
        return zeros

    }
    arr1 = [-1,1,0,0,-1,4,-4,1]


    Array.prototype.transpose = function() {

        let flipped = new Array(this[0].length)
        for (var i = 0; i < flipped.length; i++) {
            flipped[i] = new Array(this.length)
        }

        for (i = 0; i < this.length; i++) {
            for (j = 0; j < this[0].length; j++) {
                flipped[j][i] = this[i][j]
            }
        }
        return flipped


    }

    let twoD = [[1,2,3],[5,6,7],[8,9,10]]
    let twoD2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]