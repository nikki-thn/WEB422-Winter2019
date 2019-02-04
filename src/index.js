import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

class Home extends Component{
    render(){
      return <h1>Home Page</h1>
    }
  }
  
  class Projects extends Component{
    render(){
      return <h1>All Projects Page</h1>
    }
  }
  
  class Project extends Component{
    render(){
      return <h1>Specific Project Page</h1>
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
