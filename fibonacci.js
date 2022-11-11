const fibarray =[];
let prev=0;
let next=1;
function fibonacci(n){
    if(n===0){
        return fibarray;
    }
    fibarray.push(prev);
    const t=prev;
    prev = next;
    next = t + next;
    return fibonacci(n-1);   
}

console.log(fibonacci(8));