Array.prototype.reduceReplica = function(logic, intitalVal){
    
    let acc = intitalVal;
    for(var i = 0; i < this.length; i++){
        acc = logic(acc, this[i], this)
    }
    return acc;
}

var arr = [1, 2, 3, 4, 5, 6]

const result = arr.reduceReplica((acc, curr) => acc * curr, 1);
console.log(result);
