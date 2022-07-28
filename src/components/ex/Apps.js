import React from "react";
import Text from "./Text";

class Apps extends React.Component{
    constructor(props){
        super(props);
            this.state = {};
            this.circle = React.createRef(null);
        }

    componentDidMount(){
        console.log(this.circle);
    }

    componentWillUnmount() {

    }

    render() {
    return (
            <div style={{width: "100vw", height:"100vh", textAlign:"center"}}>
            <Text/>
            <div style={{margin:"auto", width: "250px", height: "250px", background:"green", borderRadius:"250px"}} ref={this.circle}></div>

            </div>
        );
    }   
}

export default Apps;