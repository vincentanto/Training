// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//for each
console.log("For-Each :")
const arr=["aa","bb","cc","dd","ee","ff","gg"];
arr.forEach(p=>console.log(p));
console.log("\n");


//MAP
console.log("Map :")
const arr2 = [5,3,1,7,9];
var ans = arr2.map(function (v){return v*v});
console.log(ans+"\n");

//filter
console.log("Filter: ")
const arr3=["Ethiopia","Egypt","India","England"];
ans=arr3.filter(function (v){return v.startsWith('E')});
console.log(ans+"\n");

//getStringList
console.log("etStringList : ")
const arr4=[24,"jaga",-99,9.87,true,false,"mass machi"];
ans=arr4.filter(v =>(typeof v =="string" ));
console.log(ans+"\n");

//reduce
console.log("reduce : ")
const arr5=[ "Estonia", "Finland", "Sweden", "Denmark", "Norway", "and IceLand are north European countries"];

ans=arr5.reduce((a,c)=> a+" "+c+",");
console.log(ans+"\n");

//count of country names initial value 
console.log("count of country names initial value : ");
const arr6=["India","Indonesia","Iceland","Ireland","Australia","Japan"];
var m = 0;
var mc = '#';
var alph={
 a:[],b:[],c:[],d:[],e:[],f:[],g:[],h:[],i:[],j:[],k:[],l:[],m:[],n:[],o:[],p:[],q:[],r:[],s:[],t:[],u:[],v:[],w:[],x:[],y:[],z:[]
}

arr6.forEach(function (v){
    alph[v[0].toLowerCase()].push(v);
    if(m < alph[v[0].toLowerCase()].length){
        m = alph[v[0].toLowerCase()].length;
        mc = v[0].toLowerCase();
    }
})
console.log(alph[mc]+"\n");


//Destruction
console.log("DESTRUCTION : ");
const arr7=["jaga","aadhi","bundro","bunseena","divTr"];
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp]=arr7;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
//Q9
var newset = new Set();
console.log(newset);

// /Q10.
 newset = new Set();
for (var i = 0; i <=10; i++) {
newset.add(i);
}
console.log(newset);

// Q11.
 newset = new Set();
for (var i = 0; i <= 10; i++) {
newset.add(i);
}
console.log(newset);
newset.delete(10);
console.log(newset);

// Q12.
newset = new Set();
for (var i = 0; i <= 10; i++) {
newset.add(i);
}
console.log(newset);
newset.clear()
console.log(newset);

// Q13.
var names = ["Alice", "Bob", "Charlie", "Dave", "Eric"];
      const res = new Set(names);
      console.log(res);

// Q14.
  names = {
        Alice: 5,
        Bob: 3,
        Charlie: 6,
        Dave: 4,
        Eric: 4,
      };
      console.log(names);

// Q15.
var a = [4, 5, 8, 9];
      var b = [3, 4, 5, 7];
     var  A = new Set(a);
      var B = new Set(a);
     union = Array.from(a.concat(b));
      console.log(union);

// Q16.
a = [4, 5, 8, 9];
       b = [3, 4, 5, 7];
       A = new Set(a);
       B = new Set(b);
       c = [...a, ...b];
      console.log(new Set(c));

// Q17.
 a = [4, 5, 8, 9];
       b = [3, 4, 5, 7];
       A = new Set(a);
     B = new Set(b);
       c = a.filter((num) => B.has(num));
      console.log(new Set(c));

// Q18.
  a = [4, 5, 8, 9];
       b = [3, 4, 5, 7];
       A = new Set(a);
       B = new Set(b);
       c = a.filter((num) => !B.has(num));
      console.log(new Set(c));

      console.log(mostSpokenLanguages(countries, 10))