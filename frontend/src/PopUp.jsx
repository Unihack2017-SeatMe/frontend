import React from 'react';
import {observer} from 'mobx-react';
import './PopUp.css';

import {mapState} from './shared/state/dummyState';

@observer
export class PopUp extends React.Component {
  render() {
    const {name, id} = this.props;
    const {count, capacity} = mapState.allRoomData.get(id);
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
