import React, {Component} from "react";
import Footer from "./CommonComponents/FooterComponent";

export default class ApplicationComponent extends Component {

    /**
     *
     */
    constructor(props) {
        super();
        this.state = {
            userName : "SomeUser",
            userAddress : "SomeAddress"
        }
    }

    render(){
        let name = "Joel", x=5, y = 9;
        let sessionName = "MERNStack - React Props"
        return( //vitual dom or jsx code (javascript like xml structure)
            <div>
                <h1>This is coming from Application Component</h1>
                
                <b>{name}</b>
                <hr />
                <b>Multiply 5*10 = {5*10} </b>
                <hr />
                <b>Sum 5+9 = {5+9} </b>
                <hr />
                <b>{this.state.userName}</b>
                <hr />
                <Footer sessionName={sessionName}/>
            </div>            
        )
    }
}