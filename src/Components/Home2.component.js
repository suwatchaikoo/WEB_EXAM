import React from 'react';



class Home2 extends React.Component {
  render() {
    return (
      <div>
      
        <p>Click Button GetData and Clear : {this.props.count} </p>
        <button onClick={() => this.props.GetData}>Get Data</button>
        <button onClick={() => this.props.Clear}>Clear</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.app
  };
};




export default Home2;