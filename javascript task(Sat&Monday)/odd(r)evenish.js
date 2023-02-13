function check(array){
    let v=Number(0);
    for(let i=1;i<array.length;i++){
       v+=Number(array[i]);
    }
    return v%2==1 ? "Oddish":"Evenish";
}
console.log(check([2,3,4,1]));
console.log(check([2,6,8,1]));