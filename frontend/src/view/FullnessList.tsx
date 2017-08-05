import * as React from 'react';
import { mapState } from '../state/frontend-state';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import { FullnessItem } from './FullnessItem';
import {List} from 'material-ui/List';
const FullnessList = observer(
  (props) => (
    <List>
      {
        mapState.fullnessList.map(([key, item]) => (
          <FullnessItem key={key} id={key}/>
        ))
      }
    </List>
  )
);
export { FullnessList };
export default FullnessList;