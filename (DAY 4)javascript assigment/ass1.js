//1.Given a string, reverse each word in the sentence
 var str="Welcome to this Javascript Guide!";
 var str2=str.split(" ");
 var ans="";
for(let i=0;i<str2.length;i++){
    let n=str2[i].length;
    for(let j=n-1;j>=0;j--){
        ans+=str2[i].charAt(j);
    }
    ans+=" ";
}
console.log(ans);