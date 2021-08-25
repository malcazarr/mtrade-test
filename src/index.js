import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Menubar from './components/Menubar';
import Slidebar from './components/Slidebar';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="row bg-gray-custom" style={{height: "100vh"}}>
          <div className="col-sm-5 col-mb-4 col-lg-3 col-xl-2 bg-black-custom" >
            <Slidebar/>
          </div>
          <div className="col-sm-7 col-mb-8 col-lg-9 col-xl-10">
            <div className="row bg-black-custom">
              <Menubar/>
            </div>
            <div className="row bg-gray-custom text-white">
              <App />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
