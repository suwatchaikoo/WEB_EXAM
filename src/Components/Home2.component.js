import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Content } from '../Components';

class Home2 extends React.Component {

    constructor(){
        super();
        this.state={
            Param : "asdasdasd",

        };

    }
    setParam(p){
        const param = p.target.value;
        this.setState({Param : param});
    }
    render() {
        const { match } = this.props;
        /*const { location, pattern, match, isExact } = this.props;*/
        return (
            <div>
     
                <div>
                    
                </div>
                <div>
                <p>Click Button GetData and Clear : {this.setParam.bind(this)} </p>
                    <ul>
                        <li><Link to={{pathname: "President/level4", search: '?erer:1234' , param : this.state.Param}} className="active"><button onClick={() => this.props.GetData}>Get Data</button></Link></li>
                        <li><Link to={{pathname: "Clear/level4", search: '?erer:1234' , param : this.state.Param}} className="active"><button onClick={() => this.props.Clear}>Clear</button></Link></li>
                        
                
                    </ul>
                </div>
                <div className="rightContent">
                    <Route path="/President" component={Content} />
                </div>
            </div>
        );
    }
}

export default Home2;
