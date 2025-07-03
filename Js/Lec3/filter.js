var arr = [6, 7, 8, 12, 45, 34, 67, 45, 67, 4509, 4, 6,547, 57];

Array.prototype.filterReplica = function(logic){
    let output = []
    
    for(var i = 0; i < this.length; i++){
        if(logic(this[i])){
            output.push(this[i]);
        }
    }
    return output;
}

function greaterthan50(x){
    return x > 50;
}

function even(x){
    return x%2==0
}

const filtered = arr.filterReplica(even) 
console.log(filtered)
