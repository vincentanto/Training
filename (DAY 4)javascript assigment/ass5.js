// 5.Given two strings, return true if they are anagrams of one another

function check(str1,str2){
if(str1.toUpperCase().split("").sort().join("")==str2.toUpperCase().split("").sort().join("")){
    console.log("The given Strings are anagaram");
}
else{
    console.log("The given Strings are not anagaram");
}
}
check("mary","Army");