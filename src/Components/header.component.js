import React from 'react';

class Test extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>Test</h1>
            </div>
        );
    }
}

export default Test;