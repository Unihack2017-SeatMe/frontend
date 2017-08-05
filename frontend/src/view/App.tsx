import  * as React from 'react';
import { FullnessMap } from './FullnessMap';
import { FullnessList } from './FullnessList';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
});
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Drawer>
            <FullnessList/>
          </Drawer>
          <main className="map-section">
            <FullnessMap/>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}
export { App };
export default App;
