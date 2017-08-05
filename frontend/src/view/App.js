import  * as React from 'react';
import { FullnessMap } from './FullnessMap';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div className="page">
        <aside className="side-bar">
          <nav>

          </nav>
        </aside>
        <main className="map-section">
          <FullnessMap/>
        </main>
      </div>
    );
  }
}
export { App };
export default App;
