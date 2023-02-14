function check(value){
    let v=Number(0);
    let n=Number(value)
    while(n>0){
        
       v+=Math.floor(n%10);
       n/=10;
    }
    return v%2==1 ? "Oddish":"Evenish";
}
console.log(check(678));
console.log(check(373));
console.log(check(246));
