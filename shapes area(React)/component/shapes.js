import React,{Component} from "react";
class Square extends Component{
    render () {
        return(
        <div class="child">
        <h1>Area of Square</h1>
        <input type="textfield" id="sq" placeholder="enter side"/>
        <br/>
       <input type="button" value="calculate" onClick={sqr} class="btn"/>
       <br/>
      <h3 id="so"></h3>
       </div>  
        )
    }
}

class Rectangle extends Component{
    render () {
        return(
        <div class="child">
        <h1>Area of Reactangle</h1>
        <input type="textfield" id="rl" placeholder="enter length"/>
        <br/>
        <input type="textfield" id="rb" placeholder="enter breath"/>
        <br />
       <input type="button" value="calculate" onClick={rqr} class="btn"/>
       <br/>
      <h3 id="ro"></h3>
       </div>  
        )
    }
}

class Triangle extends Component{
    render () {
        return(
        <div class="child">
        <h1>Area of Triangle</h1>
        <input type="textfield" id="tl" placeholder="enter height"/>
        <br/>
        <input type="textfield" id="tb" placeholder="enter base"/>
        <br />
       <input type="button" value="calculate" onClick={tqr} class="btn"/>
       <br/>
      <h3 id="to"></h3>
       </div>  
        )
    }
}

class Circle extends Component{
    render () {
        return(
        <div class="child">
        <h1>Area of Circle</h1>
        <input type="textfield" id="r" placeholder="enter radius"/>
        <br/>
       <input type="button" value="calculate" onClick={cir} class="btn"/>
       <br/>
      <h3 id="co"></h3>
       </div>  
        )
    }
}

class Cube extends Component{
    render () {
        return(
        <div class="child">
        <h1>Area of Cube</h1>
        <input type="textfield" id="cq" placeholder="enter side"/>
        <br/>
       <input type="button" value="calculate" onClick={cqr} class="btn"/>
       <br/>
      <h3 id="cuo"></h3>
       </div>  
        )
    }
}

const sqr=()=>{
    var radius=document.getElementById('sq').value;
    let ans=4*radius;
    document.getElementById("so").innerHTML="Area of Square is : "+ans.toFixed(2);
}

const rqr=()=>{
    let l=document.getElementById('rl').value;
    let b=document.getElementById('rb').value;
    let ans=l*b;
    document.getElementById("ro").innerHTML="Area of Rectangle is : "+ans.toFixed(2);
}

const cir=()=>{
    var radius=document.getElementById('r').value;
    let ans=radius*radius*Math.PI;
    document.getElementById("co").innerHTML="Area of circle is : "+ans.toFixed(2);
}

const tqr=()=>{
    let l=document.getElementById('tl').value;
    let b=document.getElementById('tb').value;
    let ans=0.5*l*b;
    document.getElementById("to").innerHTML="Area of Triangle is : "+ans.toFixed(2);
}

const cqr=()=>{
    var radius=document.getElementById('cq').value;
    let ans=6*radius*radius;
    document.getElementById("cuo").innerHTML="Area of Cube is : "+ans.toFixed(2);
}

export {Square,Rectangle,Circle,Cube,Triangle};