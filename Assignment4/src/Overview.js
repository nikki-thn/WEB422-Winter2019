import React, { Component } from 'react';
import MainContainer from './MainContainer.js';
import ProjectsPanel from './ProjectsPanel.js';
import TeamsPanel from './TeamsPanel.js';
import EmployeesPanel from './EmployeesPanel.js';

class Overview extends Component {
    render() {
        let url = "https://lit-fortress-10601.herokuapp.com/";
        return (
          <div>
            <MainContainer isActive="Overview">
            <h1 className="page-header">Overview</h1> 
            <div className="row"> 
              <div className="col-md-4"> 
                <ProjectsPanel dataSource={url + "projects"} />
              </div> 
              <div className="col-md-4"> 
                <TeamsPanel dataSource={url + "teams"} />
              </div> 
              <div className="col-md-4"> 
                <EmployeesPanel dataSource={url + "employees"} />
              </div>}
            </div> 
            </MainContainer>
          </div>
        );
    }
}

export default Overview;