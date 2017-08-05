import React from 'react';
import './PopUp.css';

export class PopUp extends React.Component {

  renderHTML() {
    
  }

  render() {
    const {name, count, capacity} = this.props;
    return (
      <div>
        <div>{`name: ${name}`}</div>
        <div>{`count: ${count}`}</div>
        <div>{`capacity: ${capacity}`}</div>
      </div>
    );
  }
}

export default PopUp;
