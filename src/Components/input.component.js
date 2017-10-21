import React from 'react';
import {  NavLink } from 'react-router-dom';
class Input extends React.Component {
    constructor(){
        super();
        this.state={
            user:'นาย ญาณวุฒิ ลิ้มธนาวุฒิ 57021588'
        };
    }
    showStateLink(e){
        const text  = e.target.value;
        this.setState({user:text});
    }
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>{this.state.user}</h1>
                   
                 
            </div>
        );
    }
}

export default Input;