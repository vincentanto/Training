import React,{Component} from "react";
import "./2022(inclass-react)/style.css"
class Mul extends Component{
     
    constructor(props){
        super(props);
        this.state={
            a:2,
            b:4,
            c:6,
        };
    }
    changeA = () =>{
        this.setState((prevState) => ({ a: 5 }));
    };
    changeB = () =>{
        this.setState((prevState) => ({ b: 10 }));
    };
    changeC = () =>{
        this.setState((prevState) => ({ c: 7 }));
    };
   changeAll =() =>{
    this.setState((prevState) => ({ c: 8,b:11,a:3 }));
   };
    render() {
       
        return(
       <div class="mbtn">
        <h1>AxBxC</h1>
       <br/>
       <button onClick={this.changeA} class="btn">changeA</button> {this.state.a}<br/>
       <button onClick={this.changeB} class="btn">changeB</button>{this.state.b}<br/>
       <button onClick={this.changeC} class="btn">changeC</button> {this.state.c}<br/>
       <h1>{this.state.a * this.state.b * this.state.c}</h1>
       <button onClick={this.changeAll} class="btn">changeAll</button>
       </div>
        );
     
        
    }
}

export default Mul;