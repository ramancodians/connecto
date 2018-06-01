import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/main.css';
import Board from './Comp/Board';
import LaunchPage from "./Comp/LaunchPage"
import WinningPage from "./Comp/WinningPage"
import TokenSelectionPage from "./Comp/TokenSelection"
import registerServiceWorker from './registerServiceWorker';

const WithRouters = () => (
  <Router>
    <div className="pull-to-refresh-disable">
      <Route exact path="/" component={LaunchPage} />
      <Route exact path="/game" component={Board} />
      <Route exact path="/token-selection" component={TokenSelectionPage} />
      <Route exact path="/over" component={WinningPage} />
    </div>
  </Router>
)

ReactDOM.render(<WithRouters />, document.getElementById('root'));
registerServiceWorker();
