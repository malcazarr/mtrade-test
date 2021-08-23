import './App.css';
import { Route } from 'react-router-dom';
import Workspace1 from './pages/Workspace1';
import Workspace2 from './pages/Workspace2';
import Analisys from './pages/Analysis';
import Workspace4 from './pages/Workspace4';
import Workspace5 from './pages/Workspace5';
import Workspace6 from './pages/Workspace6';

function App() {
  return (
    <div>
      <Route exact path="/" component={Workspace1} />
      <Route path="/workspace2" component={Workspace2} />
      <Route path="/analysis" component={Analisys} />
      <Route path="/workspace4" component ={Workspace4}  />
      <Route path="/workspace5" component={Workspace5} />
      <Route path="/workspace6" component={Workspace6} />
    </div>
  );
}

export default App;
