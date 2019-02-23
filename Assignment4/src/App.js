/*********************************************************************************
* WEB422 – Assignment 4
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Nikki Truong 
* Student ID: 124314173 
* Date: February 18, 2019
*
* Heroku: https://lit-fortress-10601.herokuapp.com/
********************************************************************************/

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Overview from './Overview.js';
import Projects from './Projects.js';
import Teams from './Teams.js';
import Employees from './Employees.js';
import NotFound from './NotFound.js';

class App extends Component {
  render() {
    let url = "https://lit-fortress-10601.herokuapp.com/";
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview dataSource={url}/>
        )} />
        <Route path='/projects' render={() => (
          <Projects dataSource={url + "projects"}/>
        )} />
        <Route path='/teams' render={() => (
          <Teams dataSource={url + "teams"}/>
        )} />
        <Route path='/employees' render={() => (
          <Employees dataSource={url + "employees"}/>
        )} />
        <Route render={() => (
          <NotFound/>
        )} />
      </Switch>
    );
  }
}

export default App;
