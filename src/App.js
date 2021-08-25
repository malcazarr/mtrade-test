import './App.css';
import { Route } from 'react-router-dom';
import Workspace1 from './pages/Workspace1';
import Workspace2 from './pages/Workspace2';
import Analisys from './pages/Analysis';
import Workspace4 from './pages/Workspace4';
import Workspace5 from './pages/Workspace5';
import Workspace6 from './pages/Workspace6';
import { useState } from 'react';
import Menubar from './components/Menubar';
import Slidebar from './components/Slidebar';
import Notifier from './components/Notifier';


function App() {
  const [slidebar, setSlidebar] =useState(true)
  return (
    <div>
      <Notifier></Notifier>
      <div className="row bg-gray-custom" style={{height: "100vh"}}>
        <div className={slidebar? "col-sm-5 col-mb-4 col-lg-3 col-xl-2 bg-black-custom" : "d-none"}>
          <Slidebar/>
        </div>
        <div className="col-sm-7 col-mb-8 col-lg-9 col-xl-10">
          <div className="row bg-black-custom">
            <Menubar/>
          </div>
          <div className="row bg-gray-custom text-white">
            <Route exact path="/" component={Workspace1} />
            <Route path="/workspace2" component={Workspace2} />
            <Route path="/analysis" component={Analisys} />
            <Route path="/workspace4" component ={Workspace4}  />
            <Route path="/workspace5" component={Workspace5} />
            <Route path="/workspace6" component={Workspace6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
