import React from 'react';

class Circle extends React.Component {
  render() {
    return(
      <div className="circle">
        <h1>Circle!</h1>
        <p>{this.props.params.circleId}</p>
      </div>
    );
  }
}

export default Circle;
