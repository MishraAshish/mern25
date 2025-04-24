import React, { Component } from "react";

export default class Home extends Component {

    //creation life cycle starts
    constructor(props){
        super();
        //initializing the state/props/fields etc
        this.state = {
            user : props.user
        }
        this.counter = 100;        
        this.intervalObject = null;
        this.incrementCounter();

        this.userNameRef = React.createRef();//creates a reference pointer so that html can be accessed with this 

        //html will not be present so this can't be accessed in contructor LC method
        //this.userNameRef.current.value = "Value has been updated"
        //this.userNameRef.current.focus();
    }

    //this creation life cycle method ensure html is rendered on browser we can make call to fetch data and bind it to html element
    componentDidMount(){
        console.log("componentDidMount" )

        setTimeout(()=>{
            this.userNameRef.current.value = "Value has been updated"
            this.userNameRef.current.focus();
        },2000)
        
    }

    incrementCounter = ()=>{
        this.intervalObject = setInterval(()=> {//continous loop
                this.setState(
                    {userAge : this.counter})
                //console.log(this.state.counter)
                this.counter++;
                console.log(this.counter)
                
            }, 2000);//runs every  2 seconds forever - unless cleared
    }



    //destruction life cycle method
    //it must be used to clear all the api calls, reference that are used in current component
    componentWillUnmount(){
        
        console.log("componentWillUnmount is called")
        clearInterval(this.intervalObject);
    }

    //render life cycle method must be implemented to return the view/virtual dom/jsx
    render(){
        console.log("Home Render!!!")
        return(
            <>
                <h1>Home Component</h1>  

                <input type="text" value={this.state.user.userName} ref={this.userNameRef} />

                <label>{this.state.user.userAge}</label>
            </>
        )
    }
}

//we should use default props to assign default values to the properties that we use in our component
Home.defaultProps = {
    user : {
        userName : "The Default User Name",
        userAge : 25
    }
}
